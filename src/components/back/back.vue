<template>
    <div id="father">
      <div class="nav-left">
        <ul>
          <li>大玉</li>
          <li><router-link to="products">最新产品</router-link></li>
          <li><router-link to="history">发展历程</router-link></li>
          <li><router-link to="info">公司信息</router-link></li>
          <li><div @click="logout">退出</div></li>
        </ul>
      </div>
      <router-view></router-view>
    </div>
</template>

<script>
  import bolosev from '../../service/bllosev'
  export default {
    name: 'back',
    methods:{
      logout(){
        bolosev.logout().then(res=>{
          if (res.code==0)
          {
            this.$router.push('/adminLogin')
          }
        })
      }
    }
  }
</script>

<style scoped>









  #father{
    display: flex;
    flex-direction: row;
  }
  a{
    height: 56px;
    text-decoration:none;
    display: block;
    color: #01b2af;
  }
  a:hover{
    background-color: #D9EBEB;
    border-left: 5px #01b2af solid;
  }
  li{
    height: 66px;
    line-height: 66px;
    text-align: center;
    margin: 0 auto;
    color: #01b2af;
  }
  .nav-left{
    font-size: 12px;
    width: 130px;
    height: 100vh;
    background-color: #f2f2f2;
  }
</style>
