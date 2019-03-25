<template>
  <div class="login-page">&nbsp;
    <div class="class-img">
      <img src="../../assets/back/login_fu.png" height="400px"/>
    </div>
    <div class="form">
    <form class="login-form"  onsubmit="return false;">
      <div class="dayu">大玉</div>
      <div class="input-class">
        <div class="userName">帐号：<input v-model="username" type="text"/></div>
        <div class="userName">密码：<input v-model="password" type="password"/></div>
        <button id="login-button" >登录</button>
      </div>
      <div class="forget">忘记密码</div>
    </form>
      <!--<div id="success-div" class='success'>-->
        <!--<h2>登录成功</h2>-->
        <!--<p>欢迎登录后台</p>-->
      <!--</div>-->
      <!--<div id="fail-div" class='login-fail'>-->
        <!--<h2>登录失败</h2>-->
        <!--<p>用户名密码有误</p>-->
        <!--<a class="reload" href="javascript:;" onclick="location.reload()">重新登录</a>-->
      <!--</div>-->
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  import bolosev from '../../service/bllosev'

  export default {
    name: 'Login',
    data() {
      return {
        username: '',
        password: ''
      }
    },
    mounted() {
      $("#login-button").click((event)=> {
        bolosev.login({password: this.password, username: this.username}).then(res => {
          if (res.code == 0) {
            $('#success-div').fadeIn();
            setTimeout(() => {
              this.$router.push('/back/products')
            }, 1000)
          } else {
            $('#fail-div').fadeIn();
          }
        })
      })
      // $("#login-button").click(function (event) {
      //   bolosev.login({password: this.password, email: this.username}).then(res => {
      //     if (res.code == 0) {
      //       alert(1)
      //       $('#success-div').fadeIn();
      //       setTimeout(() => {
      //         this.$router.push('/Back/Nav')
      //       }, 1000)
      //     } else {
      //       alert(2)
      //       $('#fail-div').fadeIn();
      //     }
      //   })
      // })
    },
    methods:{
      toLogin(){
      }
    }
  }
</script>
<style scoped>
  .forget{
    color: #00c1ae;
    margin-top: 30px;
    font-size: 6px;
  }
  #login-button{
    padding: 10px;
    font-size: 8px;
    margin-top: 30px;
    width: 50%;
    color: white;
    border: 0;
    border-radius:25px;
    -moz-border-radius:25px; /* Old Firefox */
    background-color: #01b2af;
  }
  .userName{
    margin: 20px;
    /*padding: 30px;*/
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: nowrap;
    color: #00c1ae;
    text-align: center;
    width: 50%;
    border-bottom: 1px #00c1ae solid;
    font-size: 5px;
    margin-top: 10px;
  }
  .dayu{
    margin-bottom: 30px;
    margin-top: 40px;
    color: #01b2af;
    font-size: 15px;
  }
.input-class{
  display: flex;
  flex-direction: column;
  align-items: center;
}
  .login-page {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-image: url("../../assets/back/login_back.png");
    width: 100vw;
    height: 100vh;
    margin: auto;
    text-align: center;
  }
  .class-img{
    /*height: 100vh;*/
    /*margin-top: 100px;*/
    /*text-align: center;*/
  }
  .form {
    margin-bottom: 2px;
    background-color: white;
    width: 349px;
    height: 400px;
    position: relative;
    z-index: 1;
    max-width: 360px;
    text-align: center;
    /*box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);*/
  }
  .form input {
    /*font-family: "Roboto", sans-serif;*/
    /*outline: 0;*/
    /*background: #f2f2f2;*/
    /*width: 100%;*/
    margin-bottom: 1px;
    border: 0;
    width: 80%;
    padding: 0;
    /*box-sizing: border-box;*/
    /*font-size: 14px;*/
  }
  /*.form button {*/
    /*font-family: "Roboto", sans-serif;*/
    /*text-transform: uppercase;*/
    /*outline: 0;*/
    /*background: #4CAF50;*/
    /*width: 100%;*/
    /*border: 0;*/
    /*padding: 15px;*/
    /*color: #FFFFFF;*/
    /*font-size: 14px;*/
    /*!*-webkit-transition: all 0.3 ease;*!*/
    /*!*transition: all 0.3 ease;*!*/
    /*cursor: pointer;*/
  /*}*/
  /*.form button:hover,.form button:active,.form button:focus {*/
    /*background: #43A047;*/
  /*}*/
  /*.form .message {*/
    /*margin: 15px 0 0;*/
    /*color: #b3b3b3;*/
    /*font-size: 12px;*/
  /*}*/
  /*.form .message a {*/
    /*color: #4CAF50;*/
    /*text-decoration: none;*/
  /*}*/
  /*.form .register-form {*/
    /*display: none;*/
  /*}*/
  /*.container {*/
    /*position: relative;*/
    /*z-index: 1;*/
    /*max-width: 300px;*/
    /*margin: 0 auto;*/
  /*}*/
  /*.container:before, .container:after {*/
    /*content: "";*/
    /*display: block;*/
    /*clear: both;*/
  /*}*/
  /*.container .info {*/
    /*margin: 50px auto;*/
    /*text-align: center;*/
  /*}*/
  /*.container .info h1 {*/
    /*margin: 0 0 15px;*/
    /*padding: 0;*/
    /*font-size: 36px;*/
    /*font-weight: 300;*/
    /*color: #1a1a1a;*/
  /*}*/
  /*.container .info span {*/
    /*color: #4d4d4d;*/
    /*font-size: 12px;*/
  /*}*/
  /*.container .info span a {*/
    /*color: #000000;*/
    /*text-decoration: none;*/
  /*}*/
  /*.container .info span .fa {*/
    /*color: #EF3B3A;*/
  /*}*/
  /*!*header {*!*/
    /*!*background: #76b852; !* fallback for old browsers *!*!*/
    /*!*background: -webkit-linear-gradient(right, #76b852, #8DC26F);*!*/
    /*!*background: -moz-linear-gradient(right, #76b852, #8DC26F);*!*/
    /*!*background: -o-linear-gradient(right, #76b852, #8DC26F);*!*/
    /*!*background: linear-gradient(to left, #76b852, #8DC26F);*!*/
    /*!*font-family: "Roboto", sans-serif;*!*/
    /*!*-webkit-font-smoothing: antialiased;*!*/
    /*!*-moz-osx-font-smoothing: grayscale;*!*/
  /*!*}*!*/
</style>
