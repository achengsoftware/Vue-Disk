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
          <LeftBar></LeftBar>
        </div>
    </template>
    </mt-popup>

    <mt-header title="Eye Disk" class="header">
        <mt-button  slot="left" @click="showNenu=!showNenu">
          <img src="./assets/img/home.png" height="20" width="20" slot="icon">
       </mt-button>
     </mt-header>

    <div class="content">
      22
    </div>
  </div>
</template>

<script>
  import LeftBar from "./components/leftbar/LeftBar"
  export default {
    components:{
      LeftBar
    },
    data(){
      return{
        showNenu:false
      }
    }

  }
</script>
<style>
*{
  margin: 0;
  padding: 0;
  color: white;
  list-style: none;
}
#app{
  font-family: '微软雅黑', 'Microsoft YaHei', Arial, Helvetica, sans-serif, '宋体';
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
  /* position: relative; */
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
}
.header{
  width: 100%;
  height: 40px;
   flex:1;
}
.content{
  background-color: #f3f3f4;
  flex:1;
  width: 100%;
}
</style>