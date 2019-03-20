<template>
  <div>
    <nav>
      <i id="icon1" class="iconfont iconshouye" style="color: white; font-size: 14px;"></i>
      <i id="icon2" class="iconfont icongengduo2" style="color: white; font-size: 14px;"></i>
    </nav>
    <router-view></router-view>
    <footer>
      <div class="font-font">
        <div class="margin-margin" style="margin-left: 100px">
          <a href="">
            <div style="margin-top: 5px"><i class="iconfont iconweixingongzhonghao" style="color: white; font-size: 23px;"></i></div>
            <div style="margin-top: 3px">微信公众号</div>
          </a>
        </div>
      </div>
      <div class="font-font">
        <div class="margin-margin" style="margin-left: 30.5px">
          <a href="">
            <div style="margin-top: 5px"><i class="iconfont iconliaotianjilu" style="color: white; font-size: 20px;"></i></div>
            <div style="margin-top: 6px">在线咨询</div>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'mobile'
  }
</script>

<style scoped>
  footer div div a{
    text-decoration:none;
    color: white;
    /*color(white);*/
  }
  footer div div a:hover{
    color: #4caf50;
  }

  /*footer div div a:visited{*/
    /*color: #ef3b3a;*/
  /*}*/
  footer div div a:active{
    color: yellow;
  }
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
  footer{
    display: flex;
    justify-content: flex-start;
    /*float: left;*/
    /*display: inline;*/
    bottom: 0;
    position:fixed;
    width: 100%;
    background-color: #0e0e35;
  }
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
