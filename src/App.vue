<template>
  <section>
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
          <li><router-link to="">产品服务</router-link></li>
          <li><router-link to="">最新产品</router-link></li>
          <li><router-link to="">关于我们</router-link></li>
          <li><router-link to="">联系我们</router-link></li>
          <li><router-link to="">切换</router-link></li>
        </ul>
      </section>
    </nav>
    <router-view></router-view>
  </section>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
  nav{
    background-color:rgba(0,0,0,0.2);
    position:fixed;
    height: 64px;
    width: 100vw;
  }
  .mynav{
    margin: 0 auto;
    width: 1440px;
    height: 64px;
  }
  img{
    float: left;
    margin-left: 130px;
    padding: 18px;
  }
  ul{
    float: left;
    /*position:absolute;*/
    margin-left: 532px;
  }
  li{
    line-height: 64px;
    text-align: center;
    font-size: 14px;
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

  a:hover{
    color: #fbb03b;
    border-top: 5px #fbb03b solid;
  }
</style>
