<template>
  <div class="main">
    <mt-popup
    v-model="showNenu"
    position="right"
    pop-transition="popup-fade"
    class="leftBar"
    >
    <template v-slot="description">
        <div class="leftBarBg">
          <mt-header title="" style="background:#343848;">
            <router-link to="/" slot="left">
              <mt-button icon="back" @click="showNenu=!showNenu"></mt-button>
            </router-link>
          </mt-header>
          <LeftBar @hide-left-bar="showNenu=false">

          </LeftBar>
        </div>
    </template>
    </mt-popup>

    <header class="header">
      <img class="logo" src="./assets/logo.png"/>
      <h2>Eye Disk</h2>
      <Button class="menu-btn" :icon="icon" @click="showNenu=!showNenu"></Button>
    </header>
    <main class="content">
      <!-- 路由匹配到的组件将渲染在这里 -->
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
  import LeftBar from "./components/leftbar/LeftBar"
  import Button from './components/common/Button'
  export default {
    components:{
      LeftBar,
      Button
    },
    data(){
      return{
        showNenu:false,
        icon:require('./assets/img/more.png')
      }
    }

  }
</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
  color: white;
  list-style: none;
}
html{
    width: 100%;
    height: 100%;
}
body{
  height: 100%;
}
#app{
  font-family: '微软雅黑', 'Microsoft YaHei', Arial, Helvetica, sans-serif, '宋体';
   height: 100%;
}
.leftBar{
  height: 100%;
  width: 40%;
}
.leftBarBg{
    width: 100%;
    height: 100%;
    display: block;
    background-color:#343848;
}
.main{
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
}
.header{
  width: 100%;
  height: 40px;
  padding: 0;
  margin: 0;
  .logo{
    width: 26px;
    height: 26px;
    display: inline-block;
    line-height: 40px;
    margin: auto 0;
    vertical-align: middle;

    padding-left: 10px;
  }
  h2{
    color: #000;
    display: inline-block;
    padding-left: 2px;
    font-weight: normal;
    font-size: 14px;
    line-height: 40px;
    margin: auto 0;
    text-align: center;
    vertical-align: middle;

  }
  .menu-btn{
    width: 26px;
    height:26px;
    margin: 8px;
    box-sizing:border-box;
    position:absolute;
    right: 2px;
    top: 0;
  }
}
.content{
  background-color:#f3f3f4;
  flex:1;
}
</style>