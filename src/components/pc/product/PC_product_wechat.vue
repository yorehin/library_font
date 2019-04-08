<template>
  <div>
    <img src="../../../assets/img/banner.png" height="100%" width="100%"/>

    <div id="div-img">
      <div class="div-bottom">汤阴县图书管微信公众号<br></div>
      <div class="div-flex">
        <img src="../../../assets/img/product/wechat6.png" height="669" width="377"/>
        <img src="../../../assets/img/product/wechat2.png" height="669" width="377"/>
        <img src="../../../assets/img/product/wechat3.png" height="669" width="377"/>
        <img src="../../../assets/img/product/wechat4.png" height="669" width="377"/>
        <img src="../../../assets/img/product/wechat5.png" height="669" width="377"/>
        <img src="../../../assets/img/product/wechat1.png" height="669" width="377"/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PC_product_wechat'
  }
</script>

<style scoped>
  .div-flex{
    width: 1200px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 auto;
  }
  .div-flex>img{
    margin-bottom: 36px;
  }
  #div-img{
    text-align: center;
    margin: 0 auto;
  }
  .div-bottom{
    margin-top: 115px;
    font-size: 24px;
    margin-bottom: 30px;
  }
</style>
