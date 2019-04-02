<template>
  <!--<div id="hed"></div>-->
  <div>
    <!--轮播图-->
    <!--<template>-->
      <!--<el-carousel indicator-position="outside">-->
        <!--<el-carousel-item v-for="item in 4" :key="item">-->
          <!--<h3>{{ item }}</h3>-->
        <!--</el-carousel-item>-->
      <!--</el-carousel>-->
    <!--</template>-->
    <div id="li1"></div>
    <img src="../../assets/mobile/home/PHomeTurn1.png" height="204" width="100%"/>
    <div>
      <div class="newProduct0" style="color: #10103b;">产品服务</div>
      <div class="newProduct1">
        <div class="newProduct2">
        Product Service
        </div>
      </div>

      <template>
        <el-carousel indicator-position="outside" class="mycar" style="height: 150px;">
          <el-carousel-item  class="div-flex" v-for="item in 5" :key="item">
            <router-link tag="div" :to="names[item-1].path" class="font-1">
              <div class="font-2">{{names[item-1].title}}</div>
              <div class="font-3"><i class="iconfont" :class="{[names[item-1].icon]:true}"></i></div>
              <div class="comprehend">了解详情</div>
            </router-link>
            <router-link tag="div" :to="names[item].path" class="font-4">
              <div class="font-2">{{names[item].title}}</div>
              <div class="font-3"><i class="iconfont" :class="{[names[item].icon]:true}" ></i></div>
              <div class="comprehend">了解详情</div>
            </router-link>
          </el-carousel-item>
        </el-carousel>
      </template>
    </div>
    <div class="testBack" >
      <!--<img src="" height="100%" width="100%"/>-->
      <div class="newProduct0" style="color: white; padding-top: 16px">最新产品</div>
      <div class="newProduct1" style="color: white;">
        <div class="newProduct2" style="color: white; border-top: 1px solid white;">
          New Product
        </div>
      </div>
      <div style="text-align: center; margin-top: -10px;"><img src="../../assets/mobile/home/PHomeExcel.png" height="150" width="180"/></div>
      <div class="getName">Excel小帮手-软件定制</div>
      <router-link tag="div" to="/phone/product" class="product-comprehend" style="margin-top: 11px; color: white">了解详情</router-link>
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

        <div v-show="!history_and_culture">
          <i class="iconfont iconfazhan" style="font-size: 27px; color: #0f1937; margin-top: -20px; margin-left: 45px"></i>
          <div class="about-div-1">
            <div class="about-circular"><div class="year">2019</div><div class="date">02-15</div></div><div class="a-a">斑点狗约课小程序上线</div>
          </div>
          <div class="line-line" style="margin-left: 141px; margin-top: -3px" ></div>
          <div class="about-div-2">
            <div class="about-circular"><div class="year">2018</div><div class="date">11-30</div></div><div class="a-a">第一个项目WEB网站完成</div>
          </div>
          <div class="line-line" style="margin-left: 59px; margin-top: 77px" ></div>
          <div class="about-div-3">
            <div class="about-circular"><div class="year">2018</div><div class="date">11-02</div></div><div class="a-a">公司成立</div>
          </div>
        </div>
        <div style="display: flex; flex-direction: row" v-show="history_and_culture">
          <i class="iconfont iconwenhua" style="font-size: 28px; color: #0f1937; margin-left: 30px"></i>
          <div class="div-culture">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们是一个对工作充满激情和责任的团队，坚持以扎实的技术，给力的效率，可信的质量、实惠的价格、完善的售后满足客户需求，为中国信息化建设献出自己的力量。</div>
        </div>
        <!--<div class="div-line">fdsfd</div>-->
        <div class="div-right">
          <div class="div-riq">
            <div class="div-top" @click="history_and_culture=false">发展历程</div>
          </div>
          <div class="div-bottom" @click="history_and_culture=true">企业文化</div>
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
          <div class="font-font"><i class="iconfont iconplace" style="color: white; font-size: 12px;"></i>&nbsp;&nbsp;地址:<input v-model="contact_list.address"/></div>
          <div class="font-font"><i class="iconfont iconshouji" style="color: white; font-size: 12px;"></i>&nbsp;&nbsp;电话:<input v-model="contact_list.phone"/></div>
          <div class="font-font"><i class="iconfont iconyouxiang" style="color: white; font-size: 12px;"></i>&nbsp;&nbsp;邮箱:123278392@qq.com</div>
          <div class="font-font"><i class="iconfont iconweixingongzhonghao" style="color: white; font-size: 12px;"></i>&nbsp;&nbsp;微信公众号:安阳大玉网络科技有限公司</div>
          <div class="use-code"><img src="../../assets/img/home/home_contactQR.png" height="109" width="109"/></div>
          <div class="look-code">扫码关注</div>
        </div>
        <div class="right-img"><img src="../../assets/img/home/home_map.png" height="250" width="350"/></div>
      </div>

    </div>
    <div>
    <div id="down"><div class="down-div">&copy;2018  安阳大玉网络科技股份有限公司  版权所有  </div><div class="down-div2"><a id="down-a" href="http://www.miitbeian.gov.cn">豫ICP备17037574号</a></div></div>
    </div>

  </div>

</template>

<script>
  import bolosev from '../../service/bllosev.js'
  export default {
    name: 'home',
    mounted(){
      bolosev.contactUs({}).then(res => {
        if (res.code == 0) {
          this.contact_list = res.data
        } else {
          this.$message('操作失败');
        }
      }),
      bolosev.productList({}).then(res => {
        if (res.code == 0) {
          console.log(res.data)
          this.product_list = res.data
        } else {
          this.$message('操作失败');
        }
      })
    },
    data () {
      return{
        history_and_culture:true,
        names:[{title:'手机APP设计开发',icon:'iconappkaifa',path:'service?code=myApp'},
          {title:'小程序开发设计',icon:'icon_huabanfuben',path:'service/?code=wechat'},
          {title:'WEB网站设计开发',icon:'iconwangzhan',path:'service/?code=myWeb'},
          {title:'PC客户端设计开发',icon:'iconkehuduan',path:'service/?code=myPc'},
          {title:'定制软件设计与开发',icon:'iconruanjiandingzhi',path:'service/?code=myCustom'},
          {title:'手机APP设计开发',icon:'iconappkaifa',path:'service/?code=myApp'}
        ],
        // names:['手机APP设计开发','小程序开发设计','WEB网站设计开发','PC客户端设计开发','定制软件设计与开发'],
        contact_list: {
          id:'',
          email:'',
          public_number:'',
          phone:'',
          offNum:'',
          address:''
        },
        product_list: {
          id:'',
          cover:'',
          pic:'',
          name:'',
          active:'',
          address:''
        },
      }
    }
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
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: 12px;
    text-align: center;
    height: 24px;
    color: black;
    background-color: #fbb03b;
    width: 145px;
    position: absolute;
    right: 10px;
    bottom: 55px;
  }
  .div-riq{
    margin: auto;
    display: inline;
    /*margin: 0 auto;*/
    width: 50%;
    height: 10px;
    /*display: inline-block;*/
    line-height: 28px;
    border-right: 1px black solid;
    /*margin-top: auto;*/
  }
  .div-top{
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    /*display: inline;*/
    font-size: 12px;
    width: 100%;
    height: 100%;
    margin: -1px 0 0 0;
    /*margin-top: 0px;*/
    line-height: 100%;
    /*display: inline-block;*/
  }
  .div-bottom{
    width: 50%;
    height: 100%;
    line-height: 24px;
    display: flex;
    flex-direction: row;
    justify-content: center;
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
  .font-font>input{
    background-color: #10103b;
    /*background: white;*/
    border: 0;
    color: white;
    font-size: 12px;
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
    margin-top: -26px;
    color: white;
  }
  .testBack{
    height: 250px;
    background:url('../../assets/mobile/home/homeProductBck.png');
    background-size: 375px 250px;
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
    margin: 12px auto 0;
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
  /*.div-flex{*/
    /*display: flex;*/
    /*flex-direction: row;*/
    /*height: 100%;*/
  /*}*/
  .font-1{
    border: 1px #10103b dashed;
    width: 174px;
    height: 131px;
    margin: 10px;
  }
  .font-4{
    border: 1px #10103b dashed;
    width: 174px;
    height: 131px;
    margin: -143px 10px 10px 192px;
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
  .div-culture{
    width: 243px;
    line-height: 20px;
    font-size: 12px;
    margin-top: 11px;
    margin-right: 43px;
  }
  .product-comprehend{
    margin: 18px auto 0;
    text-align: center;
    border: white 1px solid;
    width: 65px;
    height: 23px;
    font-size: 12px;
    line-height: 23px;
  }
</style>
