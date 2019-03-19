<template>
  <div>
    <nav>
      <i id="icon1" class="iconfont iconshouye" style="color: white; font-size: 14px;"></i>
      <i id="icon2" class="iconfont icongengduo2" style="color: white; font-size: 14px;"></i>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'mobile'
  }
</script>

<style scoped>
nav{
  position:fixed;
  height: 44px;
  width: 100%;
  color: white;
  background-color:rgba(0,0,0,0.2);
}
  #icon1{
    float: left;
    margin-left: 10px;
    line-height: 44px;
  }
  #icon2{
    float: right;
    margin-right: 10px;
    line-height: 44px;
  }
</style>
