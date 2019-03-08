<template>
<div>
  <img src="../../assets/img/home/轮播图1.png" height="924" width="1920"/>
  <div id="product">
    <div id="productService"><h1>产品服务</h1></div>
      <div id="productE">
        <div id="productEnglish">
          Product Service
        </div>
      </div>
    <div id="productContext">
      <ul>
        <li><router-link to=""><div class="li-div1"><div class="phone">手机APP设计开发</div><i class="iconfont iconappkaifa"></i><div class="lj1">了解详情</div></div></router-link></li>
        <li><router-link to=""><div class="li-div1"><div class="phone">小程序设计开发</div><i class="iconfont icon_huabanfuben"></i><div class="lj1">了解详情</div></div></router-link></li>
        <li><router-link to=""><div class="li-div1"><div class="phone">WEB网站设计开发</div><i class="iconfont iconwangzhan"></i><div class="lj1">了解详情</div></div></router-link></li>
        <li><router-link to=""><div class="li-div1"><div class="phone">PC客户端设计开发</div><i class="iconfont iconkehuduan"></i><div class="lj1">了解详情</div></div></router-link></li>
        <li><router-link to=""><div class="li-div1"><div class="phone">软件定制开发</div><i class="iconfont iconruanjiandingzhi"></i><div class="lj1">了解详情</div></div></router-link></li>
      </ul>
    </div>
  </div>
  <div id="new">

    <div id="newProduct0"><h1>最新产品</h1></div>
    <div id="newProduct1">
      <div id="newProduct2">
        New Product
      </div>
    </div>
    <div id="productContext">
      <ul>
        <li><router-link to=""><div class="li-div1"><div class="phone">手机APP设计开发</div><i class="iconfont iconappkaifa"></i><div class="lj1">了解详情</div></div></router-link></li>
        <li><router-link to=""><div class="li-div1"><div class="phone">小程序设计开发</div><i class="iconfont icon_huabanfuben"></i><div class="lj1">了解详情</div></div></router-link></li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
</script>

<style scoped>
#product{
  height: 924px;
  width: 1920px;
  font-size: 30px;
/*border-bottom: 1px red solid;*/
}
#productService{
  margin-top: 120px;
  margin-bottom: 0px;
}
#productE{
  margin-top: 10px;
  width: 1920px;
  text-align: center;
}
#productEnglish{
  padding: 8px;
  border-top: 1px solid black;
  display: inline;
  text-align: center;
  font-size: 1px;
  width: 100px;
}
  h1{
    text-align: center;
  }
  #productContext{
    width: 100%;
    height: 330px;
    margin-top: 150px;
  }
  li:first-child{
    margin-left: 360px;
  }
  li{
    height: 330px;
    float:left;
    list-style:none; /* 将默认的列表符号去掉 */
    padding:0; /* 将默认的内边距去掉 */
    margin-left:20px; /* 将默认的外边距去掉 */
  }
  .li-div1{
    height: 100%;
    width: 220px;
    border: 1px #10103b dashed;
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
    margin-top: 65px;
    padding: 10px;
    margin-left: 50px;
    margin-bottom: 39px;
    text-align: center;
    font-size: 15px;
    width: 100px;
    border: 1px solid #10103b;
    color: #10103b;
  }
a{
  display: block;
  color: black;
  text-decoration:none;
}
a:hover{
  background-color: #fbb03b;
  color: #fff;
}











  #new{
    display: inline-block;
    font-size: 30px;
    height: 924px;
    width: 1920px;
    background-image: url("../../assets/img/home/首页-最新产品背景图.png");
  }
#newProduct0{
  color: white;
  margin-top: 175px;/*这个多出来55px本来量的是12px*/
  margin-bottom: 0px;
}
#newProduct1{
  margin-top: 10px;
  width: 1920px;
  text-align: center;
}
#newProduct2{
  color: white;
  padding: 8px;
  border-top: 1px solid white;
  display: inline;
  text-align: center;
  font-size: 1px;
  width: 100px;
}
</style>
