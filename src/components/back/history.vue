<template>
  <div>

    <div class="nav-right">
      <div class="div-top">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;今日事今日毕</div>
      <el-button type="text" @click="dialogVisible = true">添加</el-button>
      <el-dialog title="添加" :visible.sync="dialogVisible" width="20%" :before-close="handleClose">
        <el-form size="mini" ref="form" :model="form" label-width="80px">
          <el-form-item label-width="150px" label="事件名称" style=" margin-left: -70px">
            <el-input v-model="form.name" style="width: 83%;"></el-input>
          </el-form-item>
          <el-form-item label="事件时间">
            <el-col :span="11">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.date1"></el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="事件类型">
            <el-select v-model="form.region">
              <el-option label="大事件" value="big"></el-option>
              <el-option label="小事件" value="little"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
      <div class="kind">
        <div>事件类型
          <ul class="ul">
            <li class="li2"><router-link to="">手机APP</router-link></li>
            <li class="li2"><router-link to="">小程序</router-link></li>
            <li class="li2"><router-link to="">WEB网站</router-link></li>
            <li class="li2"><router-link to="Service/service-pc">PC客户端</router-link></li>
            <li class="li2"><router-link to="">软件定制</router-link></li>
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
        <tr v-for="">
          <td>{{}}1</td>
          <td>{{}}1</td>
          <td>{{}}1</td>
          <td>{{}}1</td>
        </tr>
        </tbody>
      </table>
    </div>


  </div>

</template>

<script>
  export default {

    name: 'history',
    data() {
      return {
        size: 1,
        form: {
          name: '',
          date1: '',
        },
        dialogVisible: false
      };
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
  };

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
  button{
    border-radius: 5px;
    width: 60px;
    height: 30px;
    padding: 5px;
    font-size: 12px;
    color: #fff;
    background-color: #01b2af;
    border: 0;
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
    width: 100%;
    line-height: 55px;
    text-align: center;
  }
  th{
    background-color: #e5f7f7;
  }
  tr{
    border-bottom: #e5e5e5 1px solid;
  }






</style>
