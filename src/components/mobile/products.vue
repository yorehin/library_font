<template>
  <div>
    <div id="li1"></div>
    <img src="../../assets/mobile/home/PHomeTurn1.png" height="204" width="100%"/>
    <div class="div-img">
      <img v-for="img in imgs" :src="img.cover" height="294" width="100%"/>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  import bolosev from '../../service/bllosev'
  export default {
    name: 'product',
    data(){
      return{
        imgs:[],
      }
    },
    created(){
      bolosev.productList({}).then(res => {
        if(res.code == 0){
          this.imgs= res.data;
        }else{
          this.$message('操作失败');
        }
      })
    }
  }
</script>

<style scoped>
  #li1{
    height: 44px;
    color: white;
    background-color: #0d0d2f;
  }
  .div-img{

    margin: 12px auto 0;
    text-align: center;
  }
  .div-img>img{
    height: 147px;
    width: 175px;
    padding: 2px;
  }
  .img3{
    /*text-align: left;*/
    margin-right: 181px;
  }
</style>
