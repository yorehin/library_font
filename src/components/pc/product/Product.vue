<template>
  <div>
    <img src="../../../assets/img/banner.png" height="100%" width="100%"/>
    <div class="product-div">
      <a href="/excel"><img src="../../../assets/img/product/product_excel.png" height="302" width="362"/></a>
      <a href="/dog"><img src="../../../assets/img/product/product_dog.png" height="302" width="362"/></a>
      <a href="/lib"><img src="../../../assets/img/product/product_lib.png" height="302" width="362"/></a>
      <a href="/libList"><img src="../../../assets/img/product/product_nav.png" height="302" width="362"/></a>
      <a href="/weChat"><img src="../../../assets/img/product/product_wechat.png" height="302" width="362"/></a>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Product'
  }
</script>

<style scoped>
  .product-div{
    width: 1200px;
    margin: 63px auto 0;
  }
  .product-div img{
    padding: 17px;
  }
  div{
    background-color: #f4f4f5;
  }
</style>
