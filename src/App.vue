<template>
  <section class="section">
    <nav>
      <!--<div id="app">-->
      <!--<img src="assets/img/logo.png">-->
      <!--<router-view/>-->
      <section class="mynav" >
        <!--导航-->
        <img src="./assets/img/home/logoDay.png" height="30" width="80"/>
        <!--<div id="div-ul">-->
        <ul>
          <li><router-link to="">网站首页</router-link></li>
          <li id="li1"><router-link to="">产品服务
            <!--<ul>-->
              <!--<li><a>1</a></li>-->
              <!--<li><a>2</a></li>-->
              <!--<li><a>3</a></li>-->
              <!--<li><a>4</a></li>-->
              <!--<li><a>5</a></li>-->
            <!--</ul>-->
          </router-link></li>
          <li><router-link to="">最新产品</router-link></li>
          <li><router-link to="">关于我们</router-link></li>
          <li><router-link to="">联系我们</router-link></li>
          <li><router-link to="">切换 &nbsp;<i class="iconfont iconqiehuan"></i></router-link></li>
        </ul>
      </section>
    </nav>
    <router-view></router-view>
    <footer>
      <div id="down"><div class="down-div">&copy;2018  安阳大玉网络科技股份有限公司  版权所有  </div><div class="down-div2"><a id="down-a">豫ICP备17037574号</a></div></div>
    </footer>
  </section>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
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
    width: 1200px;
    max-width: 100%;
  }
  img{
    float: left;
    /*margin-left: 130px;*/
    padding: 18px;
  }
  ul{
    float: right;
    /*position:absolute;*/
    /*margin-left: 532px;*/
  }
  li{
    line-height: 64px;
    text-align: center;
    font-size: 12px;
    /*width: 80px;*/
    margin-left: 10px;
    float:left;
    /*color: #0d0d2f;*/
    list-style:none;
    width: 80px;
    height: 64px;
  }
  a{
    display: block;
    color: white;
    text-decoration:none;
  }

  /*#li1 > ul {*/
    /*position: absolute;*/
    /*display: none;*/
  /*}*/
  /*#li1 > ul > li {*/
    /*float: none;*/
  /*}*/
  /*.mynav > ul > li:hover ul {*/
    /*display: block;*/
  /*}*/

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
  /*.kwehk{*/
    /*position: absolute;*/
    /*left: 0; top:50px;*/
    /*width: 100%; background-color: #005580;*/
    /*line-height: 33px;*/
    /*display: none;*/
  /*}*/
</style>
