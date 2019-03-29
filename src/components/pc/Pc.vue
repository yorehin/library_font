<template>
  <section class="section">
    <nav>
      <!--<div id="app">-->
      <!--<img src="assets/img/logo.png">-->
      <!--<router-view/>-->
      <section class="mynav" >
        <!--导航-->
        <img src="../../assets/img/home/logoDay.png" height="30" width="80"/>
        <!--<div id="div-ul">-->
        <ul>
          <li><router-link to="/">网站首页</router-link></li>
          <li id="li1"><router-link to="Service">产品服务
            <ul class="ul">
              <li class="li2"><router-link>手机APP设计开发</router-link></li>
              <li class="li2"><router-link>小程序设计开发</router-link></li>
              <li class="li2"><router-link>WEB网站设计开发</router-link></li>
              <li class="li2"><router-link to="Service/service-pc">PC客户端设计开发</router-link></li>
              <li class="li2"><router-link>软件定制开发</router-link></li>
            </ul>
          </router-link></li>
          <li><router-link to="Product">最新产品
            <ul class="ul">
              <li class="li"><a>Excel小帮手-定制软件</a></li>
              <li class="li"><a>汤阴县图书馆-WEB网站</a></li>
              <li class="li"><a>斑点狗约课-小程序</a></li>
            </ul></router-link></li>
          <li><router-link to="AboutUs">关于我们</router-link></li>
          <li><router-link to="ContactUs">联系我们</router-link></li>
          <li><a href="http://3d.dayu1.net" target="_blank">切换 &nbsp;<i class="iconfont iconqiehuan" style="font-size: 16px"></i></a></li>
        </ul>
      </section>
    </nav>
    <a class="a-right" href="#top"><div class="div3"><i class="iconfont iconzhiding"></i></div></a>
    <a v-if="right_QR"><div class="div9"><img src="../../assets/img/home/home_rightQR.png" height="116" width="121"/></div></a>
    <a><div class="div7" @click="right_QR = !right_QR"><i class="iconfont iconweixingongzhonghao"></i></div></a>
    <a href="http://line.dayu1.net/cust" target="_blank"><div class="div8"><i class="iconfont iconzaixianzixun"></i></div></a>
    <router-view></router-view>
    <footer>
      <div id="down"><div class="down-div">&copy;2018  安阳大玉网络科技股份有限公司  版权所有  </div><div class="down-div2"><a id="down-a" href="http://www.miitbeian.gov.cn">豫ICP备17037574号</a></div></div>
    </footer>
  </section>
</template>

<script>
  export default {
    name: 'Pc',
    data(){
      return{
        right_QR:false
      }
    }
  }
</script>

<style scoped>
  .a-right:hover{
    border: 0px;
  }
  nav{
    position:fixed;
    height: 64px;
    /*width: 1440px;*/
    width: 100%;
    background-color:rgba(0,0,0,0.2);
    /*margin: 0 auto;*/
  }
  /*.section{*/
  /*background-color:rgba(0,0,0,0.2);*/
  /*width: 100%;*/
  /*}*/
  .mynav{
    margin: 0 auto;
    /*width: 100vw;*/
    height: 64px;
    width: 1200px;/*off*/
    max-width: 100%;
  }
  img{
    float: left;
    /*margin-left: 130px;*/
    padding: 18px;
  }
  ul{
    float: right;
  }
  li{
    line-height: 64px;
    text-align: center;
    font-size: 12px;
    margin-left: 10px;
    float:left;
    list-style:none;
    width: 80px;
    height: 64px;
  }
  li:hover ul{
    display: block;
    /*margin-left: -200px;*/
    /*float: right;*/
  }
  .ul{
    position: absolute;
    display: none;
  }
  .li{
    width: 128px;
    float: left;
  }
  .li2{
    width: 100px;
  }
  a{
    display: block;
    color: white;
    text-decoration:none;
  }
  #li3 a:hover{}

  /*#li1 > ul {*/
  /*position: absolute;*/
  /*display: none;*/
  /*}*/
  /*#li1 > ul > li {*/
  /*float: left;*/
  /*}*/
  /*.mynav > ul > li:hover ul {*/
  /*display: block;*/
  /*}*/

  #li1 a:hover{
    color: #fbb03b;
    border-top: 5px #fbb03b solid;
  }
  a:hover{
    color: #fbb03b;
    border-top: 5px #fbb03b solid;
  }

  #down{
    height: 60px;
    text-align: center;
    color: white;
    background-color: #10103b;
  }
  .down-div{
    line-height: 60px;
    display: inline;
    margin: 107px 0 0 0;
    width: 275px;
    font-size: 12px;
    border-right: 1px solid white;
  }
  .down-div2{
    display: inline;
    padding: 4px;
  }
  #down-a{
    margin: 0 auto;
    display: inline;
    font-size: 12px;
    color: white;
  }
  #down-a:hover{
    background-color: #fbb03b;
  }
  .div3{
    margin-top: 47vh;
    right: 20px;
    position:fixed;
    display: flex;
    flex-direction: row-reverse;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #545454;
    background-color: #bcbcbd;
  }
  .div9{
    padding: 0;
    margin-top: 50vh;
    right: 50px;
    position:fixed;
    display: flex;
    flex-direction: row-reverse;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #545454;
    /*background-color: #bcbcbd;*/
  }
  .div7{
    margin-top: 52vh;
    right: 20px;
    position:fixed;
    display: flex;
    flex-direction: row-reverse;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #545454;
    background-color: #bcbcbd;
  }
  .div8{
    margin-top: 57vh;
    right: 20px;
    position:fixed;
    display: flex;
    flex-direction: row-reverse;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #545454;
    background-color: #bcbcbd;
  }
  .div3 i{
    line-height: 40px;
    position:fixed;
    font-size: 22px;
    margin-left: -9px;
    /*right: 5px;*/
    /*top: 100px;*/
  }
  .div7 i{
    line-height: 40px;
    position:fixed;
    font-size: 22px;
    margin-left: -9px;
    /*right: 5px;*/
    /*top: 100px;*/
  }
  .div8 i{
    line-height: 40px;
    position:fixed;
    font-size: 22px;
    margin-left: -9px;
    /*right: 5px;*/
    /*top: 100px;*/
  }
  #div-i{

  }
  /*.kwehk{*/
  /*position: absolute;*/
  /*left: 0; top:50px;*/
  /*width: 100%; background-color: #005580;*/
  /*line-height: 33px;*/
  /*display: none;*/
  /*}*/
</style>
