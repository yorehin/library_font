<template>
  <div @click="showNav=false" >
    <nav>
      <a href="/phone/home"><i id="icon1" class="iconfont iconshouye" style="color: white; font-size: 20px;"></i></a>
      <i id="icon2" :class="{icongengduo2:!showNav,iconguanbi:showNav}"
         @click.stop="showNav = !showNav"
         class="iconfont " style="color: white; font-size: 20px;"></i>
      <section v-if="showNav" class="phoneNav" >
        <ul>
          <header>
            <img class="navlogo" src="../assets/img/home/logoDay.png" />
          </header>
          <li v-for="it in navs" class="pNavLi" >
            <header>
              <router-link tag="label" :to="it.path">{{it.title}}</router-link>
              <i v-if="it.children" class="iconfont" @click.stop="it.isOpen = !it.isOpen" :class="{iconzhankai:!it.isOpen,iconzhedie:it.isOpen}" ></i>
            </header>
            <ul v-if="it.isOpen" >
              <li class="pNavLi-c" v-for="itt in it.children" >
                <router-link tag="header" :to="itt.path">
                  <label>{{itt.title}}</label>
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </nav>
    <router-view></router-view>
    <footer class="phoneFooter">
      <router-link to="wechat" >
        <i class="iconfont iconweixingongzhonghao" style="font-size: 25px"></i>
        <div style="margin-top: 3px">微信公众号</div>
      </router-link>
      <a href="http://line.dayu1.net/cust" target="_blank">
        <i class="iconfont iconliaotianjilu" style="font-size: 20px"></i>
        <div style="margin-top: 6px">在线咨询</div>
      </a>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'mobile',
    data(){
      return {
        showNav: false,
        navs:[
          {title:'首页',path:'/'},
          {title:'产品服务',children:[
              {title:'手机APP设计开发',path:"/phone/service?code=app"},
              {title:'小程序设计开发',path:"/phone/service?code=wechat"},
              {title:'WEB网站设计开发',path:"/phone/service?code=WEB"},
              {title:'PC客户端设计开发',path:"/phone/service?code=PC"},
              {title:'软件定制开发',path:"/phone/service?code="}
            ],
            path:'/phone/service',
            isOpen: false
          },
          {title:'最新产品',
            // children:[
            //   {title:'手机App',path:"/phone/product?code=app"},
            //   {title:'手机App',path:"/phone/product?code=app"},
            //   {title:'手机App',path:"/phone/product?code=app"}
            // ],
            path:'/phone/product',
            isOpen: false
          },
          {title:'关于我们',children:[
              {title:'发展历程',path:"/phone/aboutus?code=app"},
              {title:'企业发展',path:"/phone/aboutus?code=app"},
            ],
            path:'/phone/aboutus',
            isOpen: false
          },
          {title:'联系我们', path:'/phone/contractus'},
        ]
      }
    }
  }
</script>

<style scoped>

  .phoneNav{
    background: #10103b;
    position: absolute;
    top: 44px;
    right: 0;
    width: 250px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    font-size: 18px;
    color: #fff;
  }
  .navlogo{
    width: 42px;
  }
  .phoneNav>ul{
    width: 225px;
  }
  .phoneNav>ul>header{
    height: 48px;
    line-height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .pNavLi{
    border-top: 2px solid #1d1d4e;
  }
  .pNavLi>header{
    height: 48px;
    line-height: 48px;
    display: flex;
    flex-direction: row;
  }
  .pNavLi>header>label{
    flex: 1;
    margin-left: 10px;
  }
  .pNavLi>header>i{
    width: 20px;
    margin-right: 12px;
  }
  .pNavLi-c{
    border-top: 2px solid #1d1d4e;
  }
  .pNavLi-c>header{
    height: 48px;
    line-height: 48px;
    display: flex;
    flex-direction: row;
  }
  .pNavLi-c>header>label{
    margin-left: 40px;
  }
  footer.phoneFooter{
    bottom: 0;
    position:fixed;
    width: 100%;
    background-color: #0e0e35;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 60px;
    box-shadow: 0 -1px 0 rgba(0,0,0,.06);
  }
  .phoneFooter>a{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60px;
    text-decoration: none;
    font-size: 12px;
    color: #fff;
  }
  .phoneFooter>a:last-child{
    margin-left: 100px;
  }
  .phoneFooter>a.router-link-active{
    color: #fbb03b;
  }

  /*footer div div a{*/
    /*text-decoration:none;*/
    /*color: white;*/
    /*!*color(white);*!*/
  /*}*/
  /*footer div div a:hover{*/
    /*color: #4caf50;*/
  /*}*/

  /*!*footer div div a:visited{*!*/
    /*!*color: #ef3b3a;*!*/
  /*!*}*!*/
  /*footer div div a:active{*/
    /*color: yellow;*/
  /*}*/
  .margin-margin{
    height: 49px;
    width: 70px;
    text-align: center;
    color: white;
  }
  .font-font{
    display: flex;
    justify-content: flex-start;
    text-align: center;
    margin: 0 auto;
    width: 50%;
    height: 49px;
    /*margin-left: -70px;*/
    font-size: 10px;
    /*padding: 0 0 22px 0;*/
    color: white;
  }
  /*footer{*/
    /*display: flex;*/
    /*justify-content: flex-start;*/
    /*!*float: left;*!*/
    /*!*display: inline;*!*/
    /*bottom: 0;*/
    /*position:fixed;*/
    /*width: 100%;*/
    /*background-color: #0e0e35;*/
  /*}*/
nav{
  position:fixed;
  height: 44px;
  width: 100%;
  color: white;
  background-color:rgba(0,0,0,0.2);
}
  #icon1{
    float: left;
    margin-left: 10px;
    line-height: 44px;
  }
  #icon2{
    float: right;
    margin-right: 10px;
    line-height: 44px;
  }
</style>
