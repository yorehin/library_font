<template>
  <div>
    <div id="li1"></div>
    <img src="../../assets/mobile/home/轮播图1.png" height="100%" width="100%"/>
    <div id="div-id">
      <div id="contact">
        <div id="contact-top">
          <div id="contact-left">
            <div class="font-font"><i class="iconfont iconplace" style="color: black; font-size: 16px;"></i>&nbsp;&nbsp;地址:河南省安阳市汤阴县信合路南段路东47巷</div>
            <div class="font-font"><i class="iconfont iconshouji" style="color: black; font-size: 16px;"></i>&nbsp;&nbsp;电话:155-3723-2100</div>
            <div class="font-font"><i class="iconfont iconyouxiang" style="color: black; font-size: 16px;"></i>&nbsp;&nbsp;邮箱:123278392@qq.com</div>
            <div class="font-font"><i class="iconfont iconweixingongzhonghao" style="color: black; font-size: 16px;"></i>&nbsp;&nbsp;微信公众号:安阳大玉网络科技有限公司</div>
            <div class="use-code"><img src="../../assets/mobile/contactUs/二维码.png" height="109" width="109"/></div>
            <div class="look-code">扫码关注</div>
          </div>
          <div class="right-img"><img src="../../assets/img/home/home_map.png" height="250" width="350"/></div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'contactus'
  }
</script>

<style scoped>
  #li1{
    height: 44px;
    color: white;
    background-color: #0d0d2f;
  }
  #div-id{
  }
  #contact{
    margin-top: 0px;
    width: 100%;
    min-height: 744px;
  }
  #contact-top{
    min-height: 750px;
    margin: 0 auto;
  }
  #contact-left{
    width: 100%;
    /*height: 100vh;*/
    /*margin-left: 370px;*/
    /*margin-top: 107px;*/
  }
  /*.iconfont {*/
    /*-webkit-app-region: no-drag;*/
    /*cursor: pointer;*/
    /*!*font-size: 50px;*!*/
    /*!*margin-left: 10px;*!*/
  /*}*/
  .font-font{
    margin-left: 40px;
    margin-top: 14px;
    font-size: 12px;
    /*padding: 0 0 22px 0;*/
    color: black;
  }
  .look-code{
    text-align: center;
    margin: 13px auto 0;
    color: black;
    font-size: 12px;
    /*margin-top: 50px;*/
    /*margin-left: -150px;*/
  }
  .right-img{
    /*position:absolute;*/
    text-align: center;
    margin: 13px auto 0;
    padding: 10px;
    /*margin-top: -500px;*/
  }
  .use-code{
    text-align: center;
    margin-top: 14px;
    /*margin-left: -150px;*/
  }
</style>
