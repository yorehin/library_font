<template>
  <div>
    <img src="../../assets/img/banner.png" height="100%" width="100%"/>
    <div id="father">
      <div class="son">
        <h1><div style="border-left:4px solid #0f1937">发展历程</div></h1>
        <img class="class-img" src="../../assets/img/aboutUs/发展历程.png" height="90" width="90"/>
        <div class="border2"></div>
        <div class="border"></div>
        <div class="border"></div>
        <div class="border1"></div>
        <h2><div id="company">公司成立</div></h2>
        <h2><div id="project">第一个项目WEB网站完成</div></h2>
        <h2><div id="program">斑点狗约课小程序上线</div></h2>
        <div class="about-circular" style="margin-left: 360px; margin-top: -18px"><div class="year">2018</div><div class="date">11-02</div></div>
        <div class="about-circular" style="margin-left: 143px; margin-top: -175px"><div class="year">2018</div><div class="date">11-30</div></div>
        <div class="about-circular" style="margin-left: 375px; margin-top: -18px"><div class="year">2019</div><div class="date">02-15</div></div>
      </div>

    </div>
    <div>
      <h1><div style="border-right:4px solid #0f1937">企业文化</div></h1>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们是一个对工作充满激情和责任的团队，坚持以扎实的技术、给力的效率、可信的质量、实惠的价格、完善的售后满足客户需求，为中国信息化建设献出自己的力量。</p>
      <img src="../../assets/img/aboutUs/企业文化.png" height="90" width="90"/></div>
    <div class="back1">
    </div>
    <div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'AboutUs'
  }
</script>

<style scoped>
  #father{
    /*position: relative;*/
    width: 100%;
    min-width: 100vw;
    height: 941px;
    display: block;
  }
  .son{
    /*position: absolute;*/
    /*float: left;*/
    margin: 118px auto 0;
    /*text-align: center;*/
    width: 1200px;
    /*display: inline-block;*/
    /*margin-left: 370px;*/
    /*margin-top: 118px;*/
  }
h1{
  font-size: 23px;
  color: #0f1937;
  margin: 0 auto;
}
  .son div{
    float: left;
  }
  .about-circular{
    display: block;
    /*margin-left: 200px;*/
    width: 88px;
    height: 88px;
    border-radius: 50px;
    border: 1px solid #10103b;
  }
  .year{
    display: inline-block;
    margin-top: 20px;
    margin-left: 28px;
    font-size: 15px;
    /*text-align: center;*/
    /*line-height: 20px;*/
  }
  .date{
    display: inline-block;
    padding: 8px;
    margin: 10px 0 0 7px;
    text-align: center;
    font-size: 15px;
    width: 60px;
    border-top: 1px solid black;
    line-height: 20px;
  }
  .border{
    padding: 20px;
    float: left;
    border-right: 1px solid black;
    margin-left: 190px;
    margin-top: 127px;
  }
  .border1{
    float: left;
    border-top: 1px solid black;
    margin-left: 240px;
    margin-top: -45px;
    width: 780px;
    height: 10px;
    display: block;
  }
  .border2{
    float: left;
    padding: 20px;
    margin-top: 127px;
    margin-left: 180px;
    border-right: 1px solid black;
  }
  .class-img{
    float: left;
    margin-left: 0px;
    margin-top: 100px;
  }
  #company{
    float: left;
    margin-top: -93px;
    margin-left: 370px;
    font-size: 18px;
  }
  #project{
    float: left;
    margin-top: -10px;
    margin-left: 539px;
    font-size: 18px;
  }
  #program{
    float: left;
    margin-top: -100px;
    margin-left: 787px;
    font-size: 18px;
  }
  /*.back1{*/
    /*z-index: 1000;*/
    /*background-color: #fafafa;*/
    /*height: 375px;*/
    /*width: 1600px;*/
    /*margin-top: -1000px;*/
  /*}*/
</style>
