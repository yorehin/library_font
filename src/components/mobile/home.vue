<template>
  <!--<div id="hed"></div>-->
  <div>
    <div id="li1"></div>
    <img src="../../assets/mobile/home/轮播图1.png" height="204" width="100%"/>
    <div>
      <div class="newProduct0" style="color: #10103b;">产品服务</div>
      <div class="newProduct1">
        <div class="newProduct2">
        Product Service
        </div>
      </div>
      <div class="font-1">
        <div class="font-2">手机APP设计开发</div>
        <div class="font-3"><i class="iconfont iconappkaifa"></i></div>
        <div class="comprehend">了解详情</div>
      </div>
    </div>
    <div class="testBack" >
      <!--<img src="" height="100%" width="100%"/>-->
      <div class="newProduct0" style="color: white; padding-top: 16px">最新产品</div>
      <div class="newProduct1" style="color: white;">
        <div class="newProduct2" style="color: white; border-top: 1px solid white;">
          New Product
        </div>
      </div>
      <div style="text-align: center; margin-top: -10px;"><img src="../../assets/mobile/home/首页-最新产品-Excel.png" height="300" width="360"/></div>
      <div class="getName">名称获取</div>
      <div class="comprehend" style="margin-top: -3px; color: white">了解详情</div>
    </div>
    <div>
      <div class="newProduct0" style="color: #10103b;">关于我们</div>
      <div class="newProduct1">
        <div class="newProduct2">
          About Us
        </div>
      </div>
      <div id="aboutMe">
        <div id="box0"><div id="box1"><div id="box2"></div></div></div>
        <i class="iconfont iconfazhan" style="font-size: 27px; color: #0f1937; margin-top: -20px; margin-left: 45px"></i>
        <div class="about-div-1">
          <div class="about-circular"><div class="year">2019</div><div class="date">02-15</div></div><div class="a-a">斑点狗约课小程序上线</div>
        </div>
        <div class="line-line" style="margin-left: 141px; margin-top: -3px"></div>
        <div class="about-div-2">
          <div class="about-circular"><div class="year">2018</div><div class="date">11-30</div></div><div class="a-a">第一个项目WEB网站完成</div>
        </div>
        <div class="line-line" style="margin-left: 59px; margin-top: 77px"></div>
        <div class="about-div-3">
          <div class="about-circular"><div class="year">2018</div><div class="date">11-02</div></div><div class="a-a">公司成立</div>
        </div>
        <!--<div class="div-line">fdsfd</div>-->
        <div class="div-right">
          <!--<div class="div-riq">-->
          <div class="div-top">发展历程</div>
          <!--</div>-->
          <div class="div-bottom">企业文化</div>
        </div>
      </div>
    </div>
    <div class="aboutUs" >
      <div class="newProduct0" style="color: white; padding-top: 16px">联系我们</div>
      <div class="newProduct1" style="color: white;">
        <div class="newProduct2" style="color: white; border-top: 1px solid white;">
          Contact Us
        </div>
      </div>

      <div id="contact-top">
        <div id="contact-left">
          <div class="font-font"><i class="iconfont iconplace" style="color: white; font-size: 12px;"></i>&nbsp;&nbsp;地址:河南省安阳市汤阴县信合路南段路东47巷</div>
          <div class="font-font"><i class="iconfont iconshouji" style="color: white; font-size: 12px;"></i>&nbsp;&nbsp;电话:155-3723-2100</div>
          <div class="font-font"><i class="iconfont iconyouxiang" style="color: white; font-size: 12px;"></i>&nbsp;&nbsp;邮箱:123278392@qq.com</div>
          <div class="font-font"><i class="iconfont iconweixingongzhonghao" style="color: white; font-size: 12px;"></i>&nbsp;&nbsp;微信公众号:安阳大玉网络科技有限公司</div>
          <div class="use-code"><img src="../../assets/img/home/联系我们-二维码.png" height="109" width="109"/></div>
          <div class="look-code">扫码关注</div>
        </div>
        <div class="right-img"><img src="../../assets/img/home/地图.png" height="250" width="350"/></div>
      </div>

    </div>
    <div>
    <div id="down"><div class="down-div">&copy;2018  安阳大玉网络科技股份有限公司  版权所有  </div><div class="down-div2"><a id="down-a">豫ICP备17037574号</a></div></div>
    </div>

  </div>

</template>

<script>
  export default {
    name: 'home'
  }
</script>

<style scoped>
  .down-div2{
    display: inline;
  }
  #down-a{
    display: inline;
    font-size: 12px;
    color: white;
  }
  #down-a:hover{
    background-color: #fbb03b;
  }
  #down{
    height: 30px;
    text-align: center;
    color: white;
    background-color: #10103b;
  }
  .down-div{
    line-height: 30px;
    display: inline;
    /*margin: 54px 0 0 0;*/
    width: 137px;
    font-size: 3px;
    border-right: 1px solid white;
  }
  #contact-top{
    width: 100%;
    margin: 0 auto;
  }
  #contact{
    display: inline-block;
    font-size: 30px;
    width: 100vw;
    height: 100%;
    /*max-width: 100%;*/
    /*max-height: 100vh;*/
    /*width: 1920px;*/
    background-color: #10103b;
  }
  #contact-left{
    margin-top: 15px;
  }
  .font-font{
    margin-left: 57px;
    font-size: 9px;
    padding: 0 0 11px 0;
    color: white;
  }
  .look-code{
    margin: 6px auto 0;
    text-align: center;
    color: white;
    font-size: 12px;
  }
  .use-code{
    margin: 0 auto;
    text-align: center;
  }
  .right-img{
    margin-top: 12px;
    text-align: center;
  }









  .aboutUs{
    background-color: #10103b;
    height: 591px;
  }
  .div-right{
    display: inline-block;
    font-size: 12px;
    text-align: center;
    height: 24px;
    color: black;
    background-color: #fbb03b;
    margin-left: 211px;
    margin-top: 115px;
  }
  .div-top{
    display: inline;
    text-align: center;
  }
  .div-bottom{
    display: inline;
    text-align: center;
  }
  .about-circular{
    display: inline-block;
    width: 44px;
    height: 44px;
    border-radius: 50px;
    border: 1px solid #10103b;
  }
  .a-a{
    margin-top: -50px;
    margin-left: 56px;
  }
  .line-line{
    border-left: 3px solid #10103b;
    position:absolute;
    width: 36px;
    height: 36px;
    transform: rotate(45deg);
  }
  .about-div-1{
    position:absolute;
    display: inline-block;
    margin-left: 95px;
    margin-top: -32px;
    font-size: 8px;
    line-height: 46px;
  }
  .about-div-2{
    position:absolute;
    display: inline-block;
    margin-left: 13px;
    margin-top: 45px;
    font-size: 8px;
    line-height: 46px;
  }
  .about-div-3{
    position:absolute;
    display: inline-block;
    margin-left: -65px;
    margin-top: 124px;
    font-size: 8px;
    line-height: 46px;
  }
  .year{
    margin-top: 9px;
    font-size: 10px;
    text-align: center;
    line-height: 10px;
    /*margin-bottom: 3px;*/
  }
  .date{
    padding-top: 3px;
    margin: 3px auto 0;
    text-align: center;
    font-size: 10px;
    width: 40px;
    border-top: 1px solid black;
    line-height: 10px;
  }
  #box0{
    width: 35px;
    height: 35px;
    border-top: 1px solid black;
    border-left: 1px solid black;
    /*transform: rotate(45deg);*/
  }
  #box1{
    margin-top: -1px;
    margin-left: -1px;
    width: 10px;
    height: 10px;
    border-top: 1px solid white;
    border-left: 1px solid white;
  }
  /*.iconfazhan{*/
    /*font-size: 24px;*/
  /*}*/
  #box2{
    margin-top: -1px;
    margin-left: -1px;
    width: 5px;
    height: 5px;
    background-color: black;
  }
  #aboutMe{
    position:relative;
    margin: 5px auto 0;
    width: 95%;
    height: 253px;
  }
  .getName{
    text-align: center;
    margin-top: -50px;
  }
  .testBack{
    background:url('../../assets/mobile/home/最新产品背景.png')
  }
  .iconfont {
    -webkit-app-region: no-drag;
    cursor: pointer;
    font-size: 26px;
    text-align: center;
    margin: 0 auto;
    /*margin-left: 10px;*/
  }
  #li1{
    height: 44px;
    color: white;
    background-color: #0d0d2f;
  }
  .newProduct0{
    text-align: center;
    margin: 12px auto 0px;
    padding-bottom: 6px;
  }
  .newProduct1{
    margin-top: 10px;
    text-align: center;
  }
  .newProduct2{
    color: #10103b;
    padding: 6px;
    border-top: 1px solid #10103b;
    display: inline;
    text-align: center;
    font-size: 1px;
    /*width: 500px;1*/
  }
  .font-1{
    border: 1px #10103b dashed;
    width: 174px;
    height: 131px;
    margin: 10px;


  }
  .font-2 {
    margin-top: 15px;
    font-size: 16px;
    text-align: center;
    /*margin-bottom: 65px;*/
    color: #10103b;
  }
  .font-3{
    margin: 22px auto 0;
    text-align: center;
  }

 .comprehend {
   margin: 18px auto 0;
    /*margin: 65px auto 39px;*/
    /*padding: 6px;*/
    text-align: center;
    font-size: 12px;
   line-height: 23px;
    width: 65px;
    height: 23px;
    border: 1px solid #10103b;
    color: #10103b;
  }
</style>
