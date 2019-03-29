<template>
<div>




  <!--<div class="nav">-->
    <!--<ul>-->
      <!--<li>ABOUT</li>-->
      <!--<li>VIEW</li>-->
      <!--<li>CASE</li>-->
      <!--<li>SERVICE</li>-->
      <!--<li>HOME</li>-->
    <!--</ul>-->
  <!--</div>-->
  <div id="pageContain">

    <div class="page page1 current">
      <div class="contain">

      </div>
    </div>

    <div class="page page2">
      <div class="contain">

      </div>
    </div>

    <div class="page page3">
      <div class="contain">

      </div>
    </div>

    <div class="page page4">
      <div class="contain">

      </div>
    </div>
  </div>
  <ul id="navBar">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
  <div id="prev">&lt;</div>
  <div id="next">&gt;</div>















  <img src="../../../assets/img/home/home_tranform1.png" height="100%" width="100%"/>
  <div id="product">
    <div id="productService"><h1>产品服务</h1></div>
      <div id="productE">
        <div id="productEnglish">
          Product Service
        </div>
      </div>
    <div id="productContext">
      <ul class="product-ul" >
        <li><router-link to=""><div class="li-div1"><div class="phone">手机APP设计开发</div><i class="iconfont iconappkaifa"></i><div class="lj1">了解详情</div></div></router-link></li>
        <li><router-link to=""><div class="li-div1"><div class="phone">小程序设计开发</div><i class="iconfont icon_huabanfuben"></i><div class="lj1">了解详情</div></div></router-link></li>
        <li><router-link to=""><div class="li-div1"><div class="phone">WEB网站设计开发</div><i class="iconfont iconwangzhan"></i><div class="lj1">了解详情</div></div></router-link></li>
        <li><router-link to=""><div class="li-div1"><div class="phone">PC客户端设计开发</div><i class="iconfont iconkehuduan"></i><div class="lj1">了解详情</div></div></router-link></li>
        <li><router-link to=""><div class="li-div1"><div class="phone">软件定制开发</div><i class="iconfont iconruanjiandingzhi"></i><div class="lj1">了解详情</div></div></router-link></li>
      </ul>
    </div>
  </div>
  <div id="new">
    <div class="newProduct0"><h1>最新产品</h1></div>
    <div class="newProduct1">
      <div class="newProduct2">
        New Product
      </div>
    </div>
    <div id="newPage">
      <ul>
        <li>
          <div class="li-div2">
            <div class="compute">
              <img src="../../../assets/img/home/home_excel.png" height="300" width="360"/>
              <div class="new-text">Excel小帮手-定制软件</div>
            </div>
          </div>
        </li>
        <li><div class="li-div2"><div class="compute"><img src="../../../assets/img/home/home_lib.png" height="300" width="360"/><div class="new-text">汤阴县图书馆-WEB网站</div></div></div></li>
        <li><div class="li-div2"><div class="compute"><img src="../../../assets/img/home/home_wechat.png" height="300" width="360"/><div class="new-text">斑点狗约课-小程序</div></div></div></li>
      </ul>
      <div id="div-img"><img src="../../../assets/img/home/home_back.png" height="48" width="48"/></div>
      <div id="div-text"><div>&nbsp;查看更多<i class="iconfont icongengduo" style="color: white; font-size: 23px; margin-left: 2px"></i></div></div>
    </div>
  </div>
  <div id="about">
    <div class="newProduct0" style="color: black"><h1>关于我们</h1></div>
    <div class="newProduct1" style="color: black">
      <div class="newProduct2" style="color: black; border-top: 1px solid black;" >
        About us
      </div>
    </div>
    <div id="aboutMe">
      <div id="box0"><div id="box1"><div id="box2"></div></div></div>
      <i class="iconfont iconfazhan" style="font-size: 183px; color: #0f1937; margin-top: 93px; margin-left: 309px"></i>
      <div class="about-div-1">
        <div class="about-circular"><div class="year">2019</div><div class="date">02-15</div></div><div class="a-a">斑点狗约课小程序上线</div>
      </div>
      <div class="line-line" style="margin-left: 740px; margin-top: -100px"></div>
      <div class="about-div-2">
        <div class="about-circular"><div class="year">2018</div><div class="date">11-30</div></div><div class="a-a">第一个项目WEB网站完成</div>
      </div>
      <div class="line-line" style="margin-left: 550px; margin-top: 85px"></div>
      <div class="about-div-3">
        <div class="about-circular"><div class="year">2018</div><div class="date">11-02</div></div><div class="a-a">公司成立</div>
      </div>
      <div class="div-right">
        <div class="div-riq">
          <div class="div-top">发展历程</div>
        </div>
          <div class="div-bottom">企业文化</div>
      </div>
    </div>
  </div>
  <div id="contact">
    <div class="newProduct0"><h1>联系我们</h1></div>
      <div class="newProduct1">
        <div class="newProduct2">
          Contact us
      </div>
      </div>
    <div id="contact-top">
      <div id="contact-left">
        <!--<div class="font-font"><i class="iconfont iconplace" style="color: white; font-size: 23px;"></i>&nbsp;&nbsp;地址:<input v-model="product_list.address"/></div>-->
        <!--<div class="font-font"><i class="iconfont iconshouji" style="color: white; font-size: 23px;"></i>&nbsp;&nbsp;电话:<input v-model="product_list.phone"/></div>-->
        <div class="font-font"><i class="iconfont iconyouxiang" style="color: white; font-size: 23px;"></i>&nbsp;&nbsp;邮箱:123278392@qq.com</div>
        <div class="font-font"><i class="iconfont iconweixingongzhonghao" style="color: white; font-size: 23px;"></i>&nbsp;&nbsp;微信公众号:安阳大玉网络科技有限公司</div>
        <div class="look-code">扫码关注</div>
        <div class="use-code">
          <!--<input @change="ichange"-->
                 <!--accept=".jpg,.gif,.png,.jpeg"-->
                 <!--type="file"/>-->
          <img src="../../../assets/img/home/home_contactQR.png" height="220" width="220"/>
        </div>
      </div>
      <div class="right-img"><img src="../../../assets/img/home/home_map.png" height="498" width="700"/></div>
    </div>
  </div>
</div>
</template>
<script>
  import bolosev from '../../../service/bllosev.js'
  import {baseURL} from '../common/globaldata'
  export default {



    name: 'home',
    data() {
      return {
        times: [],
        product_list: {
          id,
          phone,
          offNum,
          address
        },
      }
    },
    mounted() {

      bolosev.productList({}).then(res => {
        if (res.code == 0) {
        } else {
          this.$message('操作失败');
        }
      }),
        bolosev.serviceList({}).then(res => {
          if (res.code == 0) {
          } else {
            this.$message('操作失败');
          }
        }),
        bolosev.contactUs({}).then(res => {
          if (res.code == 0) {
            console.log('产品列表'+res.data+'杨丽'+this.product_list)
            this.product_list = res.data
            console.log(this.product_list)

          } else {
            this.$message('操作失败');
          }
        })
    },
    created(){

      if (this.isPhone())
      {
        this.$router.push('/phone/home')
        return;
      }

    },
    methods:{
      isPhone(){
        let ua = navigator.userAgent;

        let ipad = ua.match(/(iPad).*OS\s([\d_]+)/),

          isIphone =!ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),

          isAndroid = ua.match(/(Android)\s+([\d.]+)/),

          isMobile = isIphone || isAndroid;
        console.log('------->>isPhone',ua,isIphone,isAndroid,isMobile)
        return isMobile;
      },
      ichange(e) {
        let ipt = e.target
        let img = ipt.files[0]
        if (!img)
          return
        if (img.size > 5242880) {
          this.$message.error("上传图片不能超过5M");
          return
        }
        // ipt.value = ""
        let reader = new FileReader()
        let _this = this
        reader.onload = (e) => {
          let src = e.target.result
          _this.image = img
          _this.form.offNum = src
        }
        reader.readAsDataURL(img)
      },
    }
  }
</script>
<style scoped>
  .line-line{
    border-left: 3px solid #10103b;
    position:absolute;
    width: 117px;
    height: 117px;
    transform: rotate(45deg);
  }
#product{
  /*display: inline-block;*/
  /*font-size: 30px;*/
  /*height: 100vh;*/
  /*width: 100vw;*/
  /*!*max-width: 100%;*!*/
  /*max-height: 100vh;*/
  /*background-color: white;*/
  min-height: 744px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-height: 100vh;
  width: 100vw;
  font-size: 30px;
}
#productService{
  margin-top: 120px;
  margin-bottom: 0;
}
#productE{
  margin-top: 10px;
  margin-bottom: 150px;
  /*width: 1920px;*/
  text-align: center;
}
#productEnglish{
  padding: 8px;
  border-top: 1px solid black;
  display: inline;
  text-align: center;
  font-size: 1px;
margin-top: 100px;
}
  h1{
    text-align: center;
  }
  #productContext{
    width: 1200px;
    max-width: 100%;
    height: 330px;
    margin: 0 auto;
  }
  li{
    width: 218px;
    height: 330px;
    float:left;
    list-style:none; /* 将默认的列表符号去掉 */
    padding:0; /* 将默认的内边距去掉 */
    margin-left:20px; /* 将默认的外边距去掉 */
  }
  .li-div1{
    height: 100%;
    /*width: 220px;*/
    border: 1px #10103b dashed;
  }
  .li-div2{
    margin-top: 30px;
    height: 100%;
    width: 320px;
    border: 1px #10103b dashed;
  }
  .li-div2:first-child{
    margin-left: 20px;
  }
.phone{
  margin-top: 50px;
  font-size: 25px;
  text-align: center;
  margin-bottom: 65px;
  color: #10103b;
}
i{
  margin-left: 79px;
  font-size: 65px;
  text-align: center;
  color: #10103b;
}
  .lj1{
    /*margin-top: 65px;*/
    margin: 65px auto 39px;
    padding: 10px;
    /*margin-left: 50px;*/
    /*margin-bottom: 39px;*/
    text-align: center;
    font-size: 15px;
    width: 98px;
    border: 1px solid #10103b;
    color: #10103b;
  }
  .product-ul a{
    display: block;
    color: black;
    text-decoration:none;
  }
.product-ul a:hover{
  background-color: #fbb03b;
  color: red;
}
.product-ul a:hover div,.product-ul a:hover i{
  color: white;
}
  .product-ul a:hover>.li-div1>div:last-child{
    border-color: white;
  }

  #new{
    display: inline-block;
    font-size: 30px;
    width: 100vw;
    height: 100vh;
    /*max-width: 100%;*/
    max-height: 100vh;
    min-height: 744px;
    background-image: url("../../../assets/img/home/home_back.png");
  }
  .newProduct0{
    color: white;
    margin-top: 120px;
    margin-bottom: 0;
  }
  .newProduct1{
    margin-top: 10px;
    /*width: 1920px;*/
    text-align: center;
  }
  .newProduct2{
    color: white;
    padding: 8px;
    border-top: 1px solid white;
    display: inline;
    text-align: center;
    font-size: 1px;
    /*width: 500px;1*/
  }
  #newPage{
    width: 1200px;
    margin: 0 auto;
  }
  #newPage ul{
    height: 400px;
    margin: 0 auto;
  }
  #newPage ul li:first-child{
    /*margin-left: 400px;*/
    text-align: center;
  }
  #newPage ul > :first-child + li{
    margin-left: 168px;
  }
  #newPage ul li:last-child{
    margin-left: 186px;
  }
  .compute{
    /*width: 330px;*/
    margin: 0 auto;
    /*margin-top: 50px;*/
    font-size: 23px;
    text-align: center;
    /*margin-bottom: 65px;*/
    color: white;
  }
  .compute img{
    margin: 0 auto;
  }
  .new-text{
    margin-top: -45px;
    margin-left: 30px;
  }
  #div-img{
    margin-top: -20px;
    text-align:center;
  }
  #div-text{
    text-align: center;
    font-size: 23px;
    cursor: pointer;
    color: white;
    margin-top: 60px;
  }
  #div-text div{
    margin: 0 auto 180px;
    /*width: 200px;*/
    text-align: center;
  }
.iconfont {
  -webkit-app-region: no-drag;
  cursor: pointer;
  /*font-size: 23px;*/
  /*margin-left: 10px;*/
}

  #about{
    display: inline-block;
    font-size: 30px;
    height: 100vh;
    width: 100vw;
    min-height: 744px;
    /*max-width: 100%;*/
    max-height: 100vh;
    background-color: white;
  }
  #aboutMe{
    position:relative;
    margin: 62px auto 0;
    width: 1200px;
    height: 100vh;
  }
  #box0{
    width: 70px;
    height: 70px;
    border-top: 1px solid black;
    border-left: 1px solid black;
    /*transform: rotate(45deg);*/
  }
  #box1{
    margin-top: -1px;
    margin-left: -1px;
    width: 20px;
    height: 20px;
    border-top: 1px solid white;
    border-left: 1px solid white;
  }
  .iconfazhan{
    font-size: 108px;
  }
  /*.img{*/
    /*width: 30vw;1*/
    /*height: calc(30vw + 1%);*/
  /*}*/
  #box2{
    /*width: 100%;1*/
    /*background-image: url("");*/
    /*background-repeat: no-repeat;*/
    /*background-size: 1920px 300px;*/
    /*background-position: center;*/
    margin-top: -2px;
    margin-left: -2px;
    width: 10px;
    height: 10px;
    background-color: black;
  }
  .about-circular{
    display: inline-block;
    width: 90px;
    height: 90px;
    border-radius: 50px;
    border: 1px solid #10103b;
  }
  .about-div-1{
    position:absolute;
    display: inline-block;
    margin-left: 312px;
    margin-top: -34px;
    font-size: 16px;
    line-height: 92px;
  }
  .about-div-2{
    position:absolute;
    display: inline-block;
    margin-left: 123px;
    margin-top: 147px;
    font-size: 16px;
    line-height: 92px;
  }
  .about-div-3{
    position:absolute;
    display: inline-block;
    margin-left: -69px;
    margin-top: 330px;
    font-size: 16px;
    line-height: 92px;
  }
  .year{
    margin-top: 25px;
    font-size: 20px;
    text-align: center;
    line-height: 20px;
  }
  .date{
    margin: 0 auto;
    text-align: center;
    font-size: 20px;
    width: 60px;
    border-top: 1px solid black;
    line-height: 20px;
  }
  .a-a{
    margin-top: -105px;
    margin-left: 100px;
  }
  .div-line{
    /*width:100px;1*/
    /*height:100px;*/
    /*border:1px solid #333;*/
    background:linear-gradient(45deg,transparent 49.5%,
    deeppink 49.5%,
    deeppink 50.5%,
    transparent 50.5%);
    /*width:0px;1*/
    /*height:0px;*/
    /*background-color: red;*/
    /*border-top: 50px solid white;*/
    /*border-right: 50px solid green;*/
    /*border-bottom: 50px solid orange;*/
    /*border-left: 50px solid white;*/
  }
.div-right{
  /*padding: 10px;*/
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-size: 25px;
  /*position:relative;*/
  text-align: center;
  width: 400px;
  height: 48px;
  line-height: 48px;
  color: black;
  background-color: #fbb03b;
  margin-left: 750px;
  margin-top: 200px;
}
/*.div-right a:hover{*/
  /*color: white;*/
/*}*/
.div-riq{
  display: inline;
  /*margin: 0 auto;*/
  width: 50%;
  /*display: inline-block;*/
  line-height: 48px;
  /*margin-top: auto;*/
}
.div-top{
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  /*display: inline;*/
  font-size: 23px;
  width: 100%;
  margin: 0;
  /*margin-top: 0px;*/
  margin-top: 8px;
  height: 32px;
  line-height: 32px;
  /*display: inline-block;*/
  border-right: 1px solid black;
}
.div-bottom{
  display: flex;
  flex-direction: row;
  justify-content: center;
  /*display: inline;*/
  text-align: center;
  font-size: 23px;
  margin: 0;
  width: 50%;
  /*margin: 0 auto;*/
  /*width: 200px;*/
  /*margin-top: 0px;*/
  /*margin-leeft: 180px;*/
  /*display: inline-block;*/
  /*line-height: 48px;*/
  /*width: 200px;1*/
  /*text-align: center;*/
  /*padding: 8px;*/
}
#contact-top{
  /*position:relative;*/
  width: 1200px;
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
    /*width: 415px;*/
    height: 500px;
    /*margin-left: 370px;*/
    margin-top: 83px;
  }
  .font-font{
    margin-left: -70px;
    font-size: 18px;
    padding: 0 0 22px 0;
    color: white;
  }
  .look-code{
    margin-left: -818px;
    text-align: center;
    color: white;
    font-size: 24px;
    margin-top: 8px;
  }
  .use-code{
    text-align: center;
    margin-top: 30px;
    margin-left: -818px;
  }
  .right-img{
    /*position:absolute;*/
    margin-top: -500px;
    margin-left: 500px;
  }






  html {
    -ms-touch-action: none;  /* 阻止windows Phone 的默认触摸事件 */
  }
  body,
  div,
  p,
  ul,
  li {
    margin: 0;
    padding: 0;
  }
  ul {
    list-style: none;
  }
  body {
    width: 100%;
    *cursor: default;
    overflow: hidden;
    font: 16px/1.5 "Microsoft YaHei",Helvetica,STHeiti STXihei,Microsoft JhengHei,Arial;
  }
  #pageContain {
    overflow: hidden;
  }
  .page {
    display: none;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
  }
  .contain {
    width: 100%;
    height: 100%;
    display: none;
    position: relative;
    z-index: 0;
  }
  .current .contain,.slide .contain {
    display: block;
  }
  .current {
    display: block;
    z-index: 1;
  }
  .slide {
    display: block;
    z-index: 2;
  }
  .swipe {
    display: block;
    z-index: 3;
    transition-duration: 0ms !important;
    -webkit-transition-duration: 0ms !important;
  }
  .page1 {
    background: #37c1e3;
    /*background-image: url("PHomeTurn1.png");*/
  }
  .page2 {
    background: #009922;
    /*background-image: url("PHomeTurn2.png");*/
  }
  .page3 {
    background: #992211;
    /*background-image: url("PHomeTurn2.png");*/
  }
  .page4 {
    background: #ff00ff;
    /*background-image: url("PHomeTurn2.png");*/
  }
  .page5 {
    background: #00ff00;
  }
  .page6 {
    background: #22ffff;
  }
  #navBar {
    z-index: 3;
    position: absolute;
    font-size: 0px;
    line-height: 0;
    bottom: 10px;
    text-align: center;
    width: 200px;
    left: 50%;
    margin-left: -100px;
  }
  #navBar .active {
    background: #ccc;
  }
  #navBar li {
    background: transparent;
    border: 1px solid #ccc;
    display: inline-block;
    font-size: 0px;
    margin: 0 4px;
    *float: left;
    *zoom:1;
    cursor: pointer;
    transition: all .7s ease;
    border-radius: 50%;
    line-height: 10px;
    text-align: center;
    width: 10px;
    height: 10px;
  }
  #prev,#next {
    z-index: 4;
    text-align: center;
    line-height: 40px;
    position: absolute;
    width: 40px;
    height: 40px;
    top: 50%;
    cursor:pointer;
    margin-top: -20px;
  }
  #prev {
    left: 0
  }
  #next {
    right: 0
  }
  .nav {
    z-index: 5;
    position: fixed;
    _position:absolute;
    background: #fff;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    line-height: 60px;
  }
  .nav li {
    display: inline;
    float: right;
    margin: 0 12px;
  }







</style>
