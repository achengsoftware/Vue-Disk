<template>
  <div>
    <div class="avatar">
      <img :src="head"/>
      <span>{{name}}</span>
    </div>
    <ul>
      <li class ="btngb"
      v-for="btn in btns" 
      :key="btn.id">
      <a >
        <img :src="btn.icon"/>
        <span>{{btn.text}}</span>
      </a>
    </li>
    </ul>

  </div>
</template>

<script>
export default {
  name:'LeftBar',
  props:{
    isShowMenu:{
      type:Boolean,
      default:true
    }
  },
  data(){
      return{
        head:require('../../assets/img/man.png'),
        name:'Jom.Jonns',
        btns:[
          {
            id:1,
            icon:require('../../assets/img/home.png'),
            text:'我的文件'
          },
           {
            id:2,
            icon:require('../../assets/img/share.png'),
            text:'我的分享'
          },
           {
            id:3,
            icon:require('../../assets/img/logout.png'),
            text:'退出登录'
          },
          {
            id:4,
            icon:require('../../assets/img/login.png'),
            text:'登录'
          },
          {
            id:5,
            icon:require('../../assets/img/info.png'),
            text:'关于'
          }
        ]
      }
  },
  computed:{
  },
  methods:{
  }
}
</script>
<style lang="scss" scoped>
.avatar{
  width: 90px;
  height: 90px;
  border-radius: 50%;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 60px;
 
  span{
    display: block;
    height: 30px;
    line-height: 30px;
    text-align: center;
     margin: 0 auto;
  }
}

.btngb{
   width: 100%;
   height: 30px;
   font-size: 12px;
   padding-top: 4px;
   padding-left: 20px;

   &:hover{
     background: #000;
   }
  a {
    display:inline;
    img{
      vertical-align: middle;
      height: 12px;
      width: 12px;
    }
    span{
      display: inline-block;
      height: 24px;
      line-height: 24px;
      text-align: center;

      padding-left: 6px;
    }
  }
}

</style>