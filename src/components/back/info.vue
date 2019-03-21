<template>
  <div>

    <div class="nav-right">
      <div class="div-top">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;今日事今日毕</div>
      <div class="div-add"><button>添加</button></div>
      <table>
        <tr>
          <th>公司信息</th>
          <th>信息内容</th>
          <th>操作</th>
        </tr>
        <tbody>
        <tr>
          <td>1</td>
          <td>1</td>
          <td>1</td>
        </tr>
        </tbody>
      </table>
    </div>
    <el-button type="text" @click="dialogVisible = true">添加</el-button>
    <el-dialog title="添加" :visible.sync="dialogVisible" width="20%" :before-close="handleClose">
      <el-form size="mini" ref="form" :model="form" label-width="80px">
        <el-form-item label-width="150px" label="事件名称" style=" margin-left: -70px">
          <el-input v-model="form.name" style="width: 83%;"></el-input>
        </el-form-item>

        <div class="fileinput-button" ><input type="file" ref="importFile1"/>----------------</div>
        <!--@click="importExcel_1"-->



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
    <!--<el-form-item label="文章标题" prop="title">-->
      <!--<el-input v-model="article.title"></el-input>-->
    <!--</el-form-item>-->

    <!--<el-form-item label="文章封面" prop="cover">-->
      <!--<img class="headerImg" id="headerImg" @error="setDefaultImg"-->
           <!--:src="article.cover" />-->
      <!--<input @change="ichange" class="uploadFile"-->
             <!--accept=".jpg,.gif,.png,.jpeg"-->
             <!--type="file"/>-->
    <!--</el-form-item>-->

    <!--<el-form-item label="文章内容" prop="content">-->
      <!--<div id="editor">-->
        <!--<p> <b>在此编辑内容</b></p>-->
      <!--</div>-->
    <!--</el-form-item>-->

    <!--<el-form-item>-->
      <!--<el-button type="primary" @click="submitForm('articleForm')">保存</el-button>-->
      <!--<el-button @click="resetForm('articleForm')">重置</el-button>-->
    <!--</el-form-item>-->


  </div>

</template>

<script>
  export default {
    name: 'info',


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
      onSubmit () {
        console.log('submit!');
      },
      handleClose (done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {
          });
      },
    }
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
