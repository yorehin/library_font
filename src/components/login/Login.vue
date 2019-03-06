<template>
  <section class="loginPage" >
    <div id="login-back" class='login'>
      <div class='login_title'>
        <span>管理员登录</span>
      </div>
      <div class='login_fields'>
        <div class='login_fields__user'>
          <div class='icon'>
            <img src='../../assets/img/user_icon_copy.png'>
          </div>
          <input v-model="username" placeholder='用户名' type='text'/>
          <div class='validation'>
            <img src='../../assets/img/tick.png'>
          </div>
        </div>
        <div class='login_fields__password'>
          <div class='icon'>
            <img src='../../assets/img/lock_icon_copy.png'>
          </div>
          <input v-model="password" placeholder='密码' type='password'>
          <div class='validation'>
            <img src='../../assets/img/tick.png'>
          </div>
        </div>
        <div class='login_fields__submit'>
          <input id="submitAdmin" type='submit' value='登录'>
          <div class='forgot'>
            <a href='#'>忘记密码</a>
          </div>
        </div>
      </div>
      <div id="success-div" class='success'>
        <h2>登录成功</h2>
        <p>欢迎登录后台</p>
      </div>
      <div id="fail-div" class='login-fail'>
        <h2>登录失败</h2>
        <p>用户名密码有误</p>
        <a class="reload" href="javascript:;" onclick="location.reload()">重新登录</a>
      </div>
      <div class='disclaimer'>
        <p>只允许图书馆管理员登录.</p>
      </div>
    </div>
  </section>
</template>

<script>
  import "./Login.scss"
  import $ from 'jquery'
  import bolosev from '../../service/bolosev'

  export default {
    name: 'Login',
    data() {
      return {
        username: '',
        password: ''
      }
    },
    mounted() {
      $('#submitAdmin').click(()=>{
        console.log('---------',this.username,this.password)
        if (this.username&&this.password){
          $('#login-back').addClass('test')
          setTimeout(function(){
            $('#login-back').addClass('testtwo')
          },300);
          setTimeout(function(){
            $(".authent").show().animate({right:-320},{easing : 'easeOutQuint' ,duration: 600, queue: false });
            $(".authent").animate({opacity: 1},{duration: 200, queue: false }).addClass('visible');
          },500);
          bolosev.login({password:this.password,email:this.username}).then(res=>{
            $(".authent").show().animate({right:90},{easing : 'easeOutQuint' ,duration: 600, queue: false });
            $(".authent").animate({opacity: 0},{duration: 200, queue: false }).addClass('visible');
            $('#login-back').removeClass('testtwo')
            $('#login-back').removeClass('test')
            $('#login-back div').fadeOut(123);
            if (res.code==0)
            {
              $('#success-div').fadeIn();
              setTimeout(()=>{
                this.$router.push('/Back/Nav')
              },1000)
            }
            else
            {
              $('#fail-div').fadeIn();
            }
          })
        }
        else
        {
          this.$notify({
            title: '提示',
            message: '请填写用户名密码',
            type: 'warning',
            offset: 100
          });
        }

      });

      $('input[type="text"],input[type="password"]').focus(function(){
        $(this).prev().animate({'opacity':'1'},200)
      });
      $('input[type="text"],input[type="password"]').blur(function(){
        $(this).prev().animate({'opacity':'.5'},200)
      });

      $('input[type="text"],input[type="password"]').keyup(function(){
        if(!$(this).val() == ''){
          $(this).next().animate({'opacity':'1','right' : '30'},200)
        } else {
          $(this).next().animate({'opacity':'0','right' : '20'},200)
        }
      });
    },
    methods: {

    },
    beforeDestroy() {
      console.log('--------------离开之前销毁定时器')
    },
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/css/sass-base";

</style>
