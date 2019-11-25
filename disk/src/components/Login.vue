<template>
  <div>
    <form>
      <main class="main">
        <label class='tip'>欢迎登录</label>
        <input class="input" type="text" name="user" placeholder="请输入用户名"/>
        <input class="input" type="password"  name="pwd" placeholder="请输入密码"/>
        <button class="login" @click.prevent="login">登录</button>
      </main>
    </form>
  </div>
</template>

<script>
export default {
  name:'Login',
  methods:{
    login(){
      console.log('login')
    }
  }
}
</script>

<style lang="scss" scoped>
@import './common/base.scss';

.main{
  display: flex;
  align-items: center;
  margin-top: 120px;
  .tip{
    color: $btn-bg;
    margin-bottom: 20px;
    font-weight: 500;
  }
  .input{
    color: #000;
    width: 80%;
    height: 30px;
    border: none;
    padding: 6px;
    box-sizing:border-box;
    margin-bottom: 12px;
    border-bottom: 1px solid $btn-bg;
    background: transparent;
    &:hover{
      border-bottom: 1px solid $btn-hover-bg;
    }
  }
  .login{
    width: 80%;
    height: 30px;
    border: none;
    border-radius: 6px;
    margin-top: 20px;
    background: $btn-bg;
    box-shadow: 2px 2px 4px #888888;
    &:hover{
      background: $btn-hover-bg;
    }
  }
}
</style>