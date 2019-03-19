<template>
  <div>
    <img src="../../assets/mobile/home/轮播图1.png" height="100%" width="100%"/>
    <div id="father">
      <div style="border-left:2px solid #fbb03b;margin: 12px 0 13px 10px;padding-left: 7px">发展历程</div>
      <div class="son">
        <img class="class-img" src="../../assets/img/aboutUs/发展历程.png" height="45" width="45"/>
        <div class="border1"></div>
        <div class="border" style="margin-left: 55px"></div>
        <div class="border" style="margin-left: 79px"></div>
        <div class="border" style="margin-left: 79px"></div>

        <h2><div id="company">公司成立</div></h2>
        <h2><div id="project">第一个项目WEB网站完成</div></h2>
        <h2><div id="program">斑点狗约课小程序上线</div></h2>
        <div class="about-circular" style="margin-left: 52px; margin-top: -16px"><div class="year">2018</div><div class="date">11-02</div></div>
        <div class="about-circular" style="margin-left: 55px; margin-top: -103px"><div class="year">2018</div><div class="date">11-30</div></div>
        <div class="about-circular" style="margin-left: 154px; margin-top: -15px"><div class="year">2019</div><div class="date">02-15</div></div>
      </div>

      <div style="border-left:2px solid #fbb03b;margin: 12px 0 13px 10px;padding-left: 7px">企业文化</div>
      <div class="son">
        <img id="son1-img" src="../../assets/img/aboutUs/企业文化.png" height="45" width="45"/>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们是一个对工作充满激情和责任的团队，坚持以扎实的技术、给力的效率、可信的质量、实惠的价格、完善的售后满足客户需求，为中国信息化建设献出自己的力量。</p>
      </div>
      <div id="down"><div class="down-div">&copy;2018  安阳大玉网络科技股份有限公司  版权所有  </div><div class="down-div2"><a id="down-a">豫ICP备17037574号</a></div></div>
        <div class="back1">
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'aboutus'
  }
</script>

<style scoped>
  .down-div2{
    display: inline;
  }
  #down-a{
    display: inline;
    font-size: 3px;
    color: white;
  }
  #down-a:hover{
    background-color: #fbb03b;
  }
  #down{
    height: 15px;
    text-align: center;
    color: black;
    /*background-color: #10103b;*/
  }
  .down-div{
    line-height: 15px;
    display: inline;
    /*margin: 54px 0 0 0;*/
    /*width: 60px;*/
    font-size: 3px;
    border-right: 1px solid black;
  }
  #div-id{
    float: left;
    display: inline-block;
    margin-left: 50px;
    /*margin-left: 100px;*/
  }
  #father{
    /*position: relative;*/
    width: 100%;
    min-width: 100vw;
    height: 249px;
    display: block;
  }
  .son{
    /*position: absolute;*/
    /*float: left;*/
    /*margin: 59px auto 0;*/
    /*text-align: center;*/
    width: 90%;
    margin: 10px auto 0;
    height: 180px;
    padding: 10px;
    background-color: #fafafa;
    /*display: inline-block;*/
    /*margin-left: 370px;*/
    /*margin-top: 118px;*/
  }
  .son1{
    width: 100%;
    margin: 0 auto;
  }
  .son div{
    float: left;
  }
  .about-circular{
    display: block;
    /*margin-left: 200px;*/
    width: 44px;
    height: 44px;
    border-radius: 25px;
    border: 1px solid black;
  }
  .year{
    display: inline-block;
    margin-top: 5px;
    margin-left: 10px;
    font-size: 7px;
    /*text-align: center;*/
    /*line-height: 20px;*/
  }
  .date{
    display: inline-block;
    padding: 4px;
    margin: 5px 0 0 2px;
    text-align: center;
    font-size: 7px;
    /*width: 30px;*/
    border-top: 1px solid black;
    line-height: 10px;
  }
  .border{
    display: inline;
    padding: 10px;
    float: left;
    border-right: 1px solid black;
    /*margin-left: 55px;*/
    margin-top: -15px;
  }
  .border1{
    float: left;
    border-top: 1px solid black;
    margin-top: 35px;
    margin-left: -10px;
    width: 355px;
    height: 5px;
    display: block;
  }
  .class-img{
    float: left;
    /*margin-left: 0px;*/
    /*margin-top: 50px;*/
  }
  #company{
    float: left;
    margin-top: -43px;
    margin-left: 53px;
    font-size: 9px;
  }
  #project{
    float: left;
    margin-top: 13px;
    margin-left: 108px;
    font-size: 9px;
  }
  #program{
    float: left;
    margin-top: -68px;
    margin-left: 217px;
    font-size: 9px;
  }
  p{
    margin: 0 auto;
    font-size: 14px;
    /*letter-spacing:1.5px;*/
    /*float: left;*/
    width: 75vw;
    line-height: 25px;
    margin-top: -20px;
  }
  #son1-img{
    margin-left: 7px;
    margin-top: 7px;
  }
  /*.back1{*/
  /*z-index: 1000;*/
  /*background-color: #fafafa;*/
  /*height: 375px;*/
  /*width: 1600px;*/
  /*margin-top: -1000px;*/
  /*}*/
</style>
