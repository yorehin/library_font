<template>
  <div>
    <img src="../../../assets/img/banner.png" height="100%" width="100%"/>
    <div id="div-id">
      <img src="../../../assets/img/contactUs/contact_back.png" height="100%" width="100%"/>
      <div id="contact">
        <div id="contact-top">
          <div id="contact-left">
            <div class="font-font"><i class="iconfont iconplace" style="color: white; font-size: 23px;"></i>&nbsp;&nbsp;地址:河南省安阳市汤阴县信合路南段路东47巷</div>
            <div class="font-font"><i class="iconfont iconshouji" style="color: white; font-size: 23px;"></i>&nbsp;&nbsp;电话:155-3723-2100</div>
            <div class="font-font"><i class="iconfont iconyouxiang" style="color: white; font-size: 23px;"></i>&nbsp;&nbsp;邮箱:123278392@qq.com</div>
            <div class="font-font"><i class="iconfont iconweixingongzhonghao" style="color: white; font-size: 23px;"></i>&nbsp;&nbsp;微信公众号:安阳大玉网络科技有限公司</div>
            <div class="look-code">扫码关注</div>
            <div class="use-code"><img src="../../../assets/img/home/home_contactQR.png" height="220" width="220"/></div>
          </div>
          <div class="right-img"><img src="../../../assets/img/home/home_map.png" height="498" width="700"/></div>
          <!--<ul>-->
          <!--<li><div class="li-div1"><div class="compute"><img src="../../assets/img/home/首页-最新产品-Excel.png" height="300" width="360"/><div class="new-text">Excel小帮手-定制软件</div></div></div></li>-->
          <!--<li><div class="li-div1"><div class="compute"><img src="../../assets/img/home/首页-最新产品-汤阴县图书馆.png" height="300" width="360"/><div class="new-text">汤阴县图书馆-WEB网站</div></div></div></li>-->
          <!--<li><div class="li-div1"><div class="compute"><img src="../../assets/img/home/首页-最新产品-斑点狗.png" height="300" width="360"/><div class="new-text">斑点狗约课-小程序</div></div></div></li>-->
          <!--</ul>-->
          <!--<div id="div-img"><img src="../../assets/img/home/首页最新产品指示球.png" height="48" width="48"/></div>-->
          <!--<div id="div-text"><div>查看更多<i class="iconfont icongengduo"></i></div></div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ContactUs'
  }
</script>

<style scoped>
  #div-id{
    width: 100vw;
    height: 100vh;
  }
#contact{
  margin-top: -757px;
  width: 100%;
  min-height: 744px;
}
#contact-top{
  height: 100vh;
  min-height: 750px;
  width: 1200px;
  margin: 0 auto;
}
#contact-left{
  width: 415px;
  /*height: 100vh;*/
  /*margin-left: 370px;*/
  margin-top: 107px;
}

.font-font{
  margin-left: -70px;
  font-size: 18px;
  padding: 0 0 22px 0;
  color: white;
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
