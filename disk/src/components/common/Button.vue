<template>
    <div class="bg" @click="clicked">
    <div class="icon">
      <slot name="icon">
        <img :src="icon">
      </slot>
    </div>
    <div class="text">
      <slot name="text">
      <span>{{text}}</span> 
    </slot>
    </div>
  </div>
  
</template>
<script>
export default {
  name:'Button',
  props:['icon','text'],
  methods:{
    clicked(){
      this.$emit('click');
    }
  }
}
</script>
<style lang="scss" scoped>
@import './base.scss';

.bg{
  background-color: $btn-bg;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover{
    background-color:$btn-hover-bg;
    cursor: pointer;
  }
  .icon{
    img{
      width: $ico-size;
      height:$ico-size;
    }
  }
  .text{
    font-size: $font-sz;
    margin-left: 2px;
  }
}
</style>