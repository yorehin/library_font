<template>
  <div>
    <img src="../../../assets/img/banner.png" height="100%" width="100%"/>

    <div id="div-img">
      <div class="div-bottom">汤阴县图书管导览系统<br></div>
      <div class="div-flex">
        <img src="../../../assets/img/product/lib_list1.png" height="327" width="582"/>
        <img src="../../../assets/img/product/lib_list3.png" height="328" width="582"/>
        <img src="../../../assets/img/product/lib_list4.png" height="329" width="582"/>
        <img src="../../../assets/img/product/lib_list5.png" height="328" width="582"/>
      </div>
    </div>
  </div>

</template>
<script>
  export default {
    name: 'PC_product_lib_list'
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
