<template>
  <div>
    <img src="../../../assets/img/banner.png" height="100%" width="100%"/>

    <div id="div-img">
      <div class="div-bottom">斑点狗小程序<br></div>
      <div class="div-flex">
        <img src="../../../assets/img/product/dog1.png" height="667" width="375"/>
        <img src="../../../assets/img/product/dog2.png" height="667" width="375"/>
        <img src="../../../assets/img/product/dog3.png" height="667" width="375"/>
        <img src="../../../assets/img/product/dog4.png" height="667" width="375"/>
        <img src="../../../assets/img/product/dog5.png" height="667" width="375"/>
        <img src="../../../assets/img/product/dog6.png" height="667" width="375"/>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'PC_product_dog'
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
