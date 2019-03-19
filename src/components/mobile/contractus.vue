<template>
  <div>
    <img src="../../assets/mobile/home/轮播图1.png" height="100%" width="100%"/>
    <div id="div-id">
      <div id="contact">
        <div id="contact-top">
          <div id="contact-left">
            <div class="font-font"><i class="iconfont iconplace" style="color: black; font-size: 14px;"></i>&nbsp;&nbsp;地址:河南省安阳市汤阴县信合路南段路东47巷</div>
            <div class="font-font"><i class="iconfont iconshouji" style="color: black; font-size: 23px;"></i>&nbsp;&nbsp;电话:155-3723-2100</div>
            <div class="font-font"><i class="iconfont iconyouxiang" style="color: black; font-size: 23px;"></i>&nbsp;&nbsp;邮箱:123278392@qq.com</div>
            <div class="font-font"><i class="iconfont iconweixingongzhonghao" style="color: black; font-size: 23px;"></i>&nbsp;&nbsp;微信公众号:安阳大玉网络科技有限公司</div>
            <div class="look-code">扫码关注</div>
            <div class="use-code"><img src="../../assets/img/home/联系我们-二维码.png" height="220" width="220"/></div>
          </div>
          <div class="right-img"><img src="../../assets/img/home/地图.png" height="498" width="700"/></div>
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
    width: 415px;
    /*height: 100vh;*/
    /*margin-left: 370px;*/
    /*margin-top: 107px;*/
  }

  .font-font{
    /*margin-left: -70px;*/
    font-size: 18px;
    padding: 0 0 22px 0;
    color: black;
  }
  .look-code{
    text-align: center;
    color: white;
    font-size: 24px;
    margin-top: 50px;
    margin-left: -150px;
  }
  .right-img{
    position:absolute;
    margin-top: -500px;
    margin-left: 490px;
  }
  .use-code{
    text-align: center;
    margin-top: 30px;
    margin-left: -150px;
  }
</style>
