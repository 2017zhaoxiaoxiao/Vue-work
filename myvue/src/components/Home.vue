<template>
  <div class="home">
    <nav>
      <p class="title">网站标题</p>
    </nav>
    <div class="left">
      <el-row class="tac">
      <el-col :span="12">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @select="selectOption"
          background-color="teal"
          text-color="#fff"
          active-text-color="#ffd04b">
            <el-menu-item index="1" path="/hello" >
            <i class="el-icon-menu"></i>
            <span slot="title">导航一</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" >
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    selectOption (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  nav{
    width:100%;
    height:80px;
    background-color: teal;
    color: #fff;
    display: flex;
    align-items: center;
    margin-bottom: 6px;
  }
  .title{
    font-weight: bold;
    float: left;
    width:10%;
    line-height: 80px;
    font-size: 20px;
    padding-left:20px;
  }
  /* li{
    display: inline-block;
    width: 100px;
    height:30px;
    background-color: #fff;
    text-align: center;
    line-height: 30px;
    border-radius: 2px;
    margin-right:20px;
  }
  li a{
    color: teal;
    font-size:16px;
    text-decoration: none;
  } */
  .left{
    width:10%;
    height:800px;
    background-color: teal;
  }
  .el-col-12 {
      width: 100%;
  }
</style>
