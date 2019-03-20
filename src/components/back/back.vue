<template>
    <div id="father">
      <div class="nav-left">
        <ul>
          <li>大玉</li>
          <li><router-link to="">最新产品</router-link></li>
          <li><router-link to="">发展历程</router-link></li>
          <li><router-link to="">公司信息</router-link></li>
        </ul>
      </div>
      <div class="nav-right">
        <div class="div-top">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;今日事今日毕</div>
        <div class="div-add"><button>添加</button></div>
        <div class="kind">
          <div>产品类别
            <ul class="ul">
              <li class="li2"><router-link to="">手机APP</router-link></li>
              <li class="li2"><router-link to="">小程序</router-link></li>
              <li class="li2"><router-link to="">WEB网站</router-link></li>
              <li class="li2"><router-link to="Service/service-pc">PC客户端</router-link></li>
              <li class="li2"><router-link to="">软件定制</router-link></li>
            </ul>
          </div>
          <div>时间序列
            <ul class="ul">
              <li class="li2"><router-link to="">正序</router-link></li>
              <li class="li2"><router-link to="">倒序</router-link></li>
            </ul>
          </div>
        </div>

        <table>
          <tr>
            <th>名称</th>
            <th>产品类别</th>
            <th>时间</th>
            <th>操作</th>
          </tr>
          <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  <!--<router-view></router-view>-->
</template>

<script>
  export default {
    name: 'back'
  }
</script>

<style scoped>
  .ul{
    display: none;
  }
  .kind a{
    display: block;
    color: black;
    background-color: #43a047;
  }
  .kind a:hover{
    display:block;
    color: deeppink;
    background-color: #4caf50;
  }
  .kind{
    display: flex;
    flex-direction: row;
  }
  .div-add{
    height: 66px;
    line-height: 66px;
    padding-left: 20px;
  }
  .nav-right{
    font-size: 12px;
  }
  .div-top{
    height: 56px;
    line-height: 56px;
    width: 90vw;
    color: white;
    background-color: black;
  }
  table{
    border: 1px solid red;
  }














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
