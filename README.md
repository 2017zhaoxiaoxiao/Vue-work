# Vue-work
# ls01 基础指令学习
    v-on 
    v-model
    v-show
    v-if
    v-for
    v-bind
## ls02 组件使用，父子组件传值
    父传子
    <say-name name="张三"></say-name>
    Vue.component("say-name"{
        props：['name']//接受父组件传递的参数
        template:'<div>{{name}}</div>'
    })
    子传父
    <say-name1 :name="name" v-on:chName="changename()"></say-name1>
    Vue.component("say-name1"{
        props：['name']//接受父组件传递的参数
        template:'<div @click="tochange">{{name}}</div>'
        methods:{
                tochange:function(){
                    
                    this.$emit('chName',{
                        name:'李四'
                    });
                }
            }
    })
      var myAPP =  new Vue({
            el :'#app',
            data:{
                name:'张三'
            },
            methods:{
                changename:function(pval){
                    alert("触发了父组件中方法");
                    this.name = pval.name;
                }
            }

        })

## ls03 过滤器 格式化数据（更换数据展示形式，例如小写边大写）
   <div id="app">
        <p>学习vue进度为{{pregress|toPercent}}</p>
        <p>{{message|toUpper}}</p>
    </div>
    <script>
        var myapp = new Vue({
            el:'#app',
            data:{
                pregress:0.3,
                message : "my name is aa"
            },
            filters: {
                toUpper:function(value){
                    return value.toUpperCase();
                },
                toPercent:function(value){
                    return value*100 +'%';

                }
            }
        })
    </script>
## ls05watch侦听属性
    watch  来响应数据的变化。
## ls04 ls06computed计算属性
    computed 根据依赖于元数据得到新数据，数据是有其他数据计算得来的，可以使用缓存
    计算属性发生重新赋值后 触发set方法，在set方法中 可以更新元数据。
     computed:{
                priceofTax:{
                    get:function(){
                        return this.price*1.8;
                    },
                    set:function(value){
                        this.price = value/1.8
                    }
                },
           },
## ls07样式绑定
   class绑定
   <div v-bind:class="{ 'active': isActive }"></div>
   绑定class对象
   <div v-bind:class="allstyle"></div>
   数组
    <div v-bind:class="[style1,style2]"></div>
    <script>
        new Vue({
        el: '#app',
        data: {
            isActive: true,
            allStyle:{
                toRed:true,
                toBig:true
            },
            style1:toGreen,
            style2:tosmall
        }
        })
    </script>

## ls08 条件判断
    v-if v-else-if v-else
     <p v-if="inputValue<0">
        输入成绩不合法
     </p>
     <p v-else-if="inputValue<60">
        {{inputValue}}分 ；很遗憾。您的成绩不合格
     </p>
     <p v-else-if="inputValue>=60|| inputValue<80">
        {{inputValue}}分 ；你的成绩等级:良好
     </p>
     <p v-else>
        {{inputValue}}分 ；恭喜。你的成绩等级:优秀
     </p>

## ls09:事件绑定练习
    v-on绑定事件（可简写@）
    事件修饰符：
    .stop - 阻止冒泡
    .prevent - 阻止默认事件
    .capture - 阻止捕获
    .self - 只监听触发该元素的事件
    .once - 只触发一次
    .left - 左键事件
    .right - 右键事件
    .middle - 中间滚轮事件
    键盘事件中通过
    @keyup.enter="" 监听回车事件
## ls10:表单控件的绑定练习
  修饰符 ：.lazy .number .trim(去掉前后空格)
    文本输入框： 
        <input type="text" id="username" v-model.lazy="user_input"/>
    单选 
        <label for="male">男</label>
        <input type="radio" id="male" name="男" value="男" v-model="sexData">
        <label for="famal">女</label>
        <input type="radio" id="famal" name="女" value="女"  v-model="sexData">
    多选
        <label for="peach">梨</label>
        <input type="checkbox" id="peach" name="梨" value="梨" v-model="foot_input">
        <label for="apple">苹果</label>
        <input type="checkbox" id="apple" name="苹果" value="苹果"  v-model="foot_input">
        <label for="bannan">香蕉</label>
        <input type="checkbox" id="bannan" name="香蕉" value="香蕉" v-model="foot_input">
    下拉选择
        <select name="school" id="school" v-model="school">
            <option value="河北大学">河北大学</option>
            <option value="河北医科大学">河北医科大学</option>
            <option value="河北师范大学">河北师范大学</option>
        </select>
## ls11:vue 路由
创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  routes:[
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]
})