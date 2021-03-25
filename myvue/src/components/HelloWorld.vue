<template>
  <div class="hello">
     {{msg}}
    <form>
      <textarea class="text" v-model="inputValue"></textarea><br/>
      <button class="btn" type="button" v-on:click="sumitValue">提交</button>
    </form>
    <ul>
      <li v-for="item in dataList" :key="item">
        <p>{{item}}</p>
        <button type="button" v-on:click='deleteItem(item)' class="btn">删除</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '请发表评论',
      inputValue: '',
      dataList: [
        '评论1',
        '评论2',
        '评论3'
      ]
    }
  },
  methods: {
    sumitValue: function () {
      this.dataList.push(this.inputValue)
    },
    deleteItem: function (item) {
      var index = this.dataList.indexOf(item)
      this.dataList.splice(index, 1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  /* list-style-type: none; */
  padding: 0;
  width: 80%;
  margin:50px auto;
}
li {
  margin:0;
  text-align: left;
  display: flex;
  justify-content: space-between;
}
a {
  color: #42b983;
}
.text{
  width:60%;
  height:100px;
  margin: 0 auto;
}
.btn{
  width: 80px;
  height: 40px;
  text-align: center;
  background: darkblue;
  color: white;
  border:none;
}
</style>
