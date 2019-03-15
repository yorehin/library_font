<template>
  <header>
  <div class="login-page">
    <div class="form">
      <form class="login-form"  onsubmit="return false;">
        <input v-model="username" type="text" placeholder="username"/>
        <input v-model="password" type="password" placeholder="password"/>
        <button id="login-button" >login</button>
      </form>
      <div id="success-div" class='success'>
        <h2>登录成功</h2>
        <p>欢迎登录后台</p>
      </div>
      <div id="fail-div" class='login-fail'>
        <h2>登录失败</h2>
        <p>用户名密码有误</p>
        <a class="reload" href="javascript:;" onclick="location.reload()">重新登录</a>
      </div>
    </div>
  </div>
  </header>
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
      alert(0)
      $("#login-button").click((event)=> {
        bolosev.login({password: this.password, username: this.username}).then(res => {
          if (res.code == 0) {
            alert(this.password)
            $('#success-div').fadeIn();
            setTimeout(() => {
              this.$router.push('/Back/Nav')
            }, 1000)
          } else {
            alert(2)
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
        alert(1)
      }
    }
  }
</script>
<style scoped>
  @import url(https://fonts.googleapis.com/css?family=Roboto:300);

  .login-page {
    width: 360px;
    padding: 8% 0 0;
    margin: auto;
  }
  .form {
    position: relative;
    z-index: 1;
    background: #FFFFFF;
    max-width: 360px;
    margin: 0 auto 100px;
    padding: 45px;
    text-align: center;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  }
  .form input {
    font-family: "Roboto", sans-serif;
    outline: 0;
    background: #f2f2f2;
    width: 100%;
    border: 0;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
  }
  .form button {
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    outline: 0;
    background: #4CAF50;
    width: 100%;
    border: 0;
    padding: 15px;
    color: #FFFFFF;
    font-size: 14px;
    /*-webkit-transition: all 0.3 ease;*/
    /*transition: all 0.3 ease;*/
    cursor: pointer;
  }
  .form button:hover,.form button:active,.form button:focus {
    background: #43A047;
  }
  .form .message {
    margin: 15px 0 0;
    color: #b3b3b3;
    font-size: 12px;
  }
  .form .message a {
    color: #4CAF50;
    text-decoration: none;
  }
  .form .register-form {
    display: none;
  }
  .container {
    position: relative;
    z-index: 1;
    max-width: 300px;
    margin: 0 auto;
  }
  .container:before, .container:after {
    content: "";
    display: block;
    clear: both;
  }
  .container .info {
    margin: 50px auto;
    text-align: center;
  }
  .container .info h1 {
    margin: 0 0 15px;
    padding: 0;
    font-size: 36px;
    font-weight: 300;
    color: #1a1a1a;
  }
  .container .info span {
    color: #4d4d4d;
    font-size: 12px;
  }
  .container .info span a {
    color: #000000;
    text-decoration: none;
  }
  .container .info span .fa {
    color: #EF3B3A;
  }
  header {
    background: #76b852; /* fallback for old browsers */
    background: -webkit-linear-gradient(right, #76b852, #8DC26F);
    background: -moz-linear-gradient(right, #76b852, #8DC26F);
    background: -o-linear-gradient(right, #76b852, #8DC26F);
    background: linear-gradient(to left, #76b852, #8DC26F);
    font-family: "Roboto", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
