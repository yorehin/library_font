<template>
  <div>
    <div class="nav-right">
      <div class="div-top">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;今日事今日毕</div>
      <el-button type="text" @click="dialogVisible = true">添加</el-button>
      <el-dialog title="添加" :visible.sync="dialogVisible" width="20%" :before-close="handleClose">
        <el-form size="mini" ref="form" :model="time" label-width="80px">
          <el-form-item label-width="150px" label="事件名称" style=" margin-left: -70px">
            <el-input v-model="time.name" style="width: 83%;"></el-input>
          </el-form-item>
          <el-form-item label="事件时间">
            <el-col :span="11">
              <el-date-picker value-format="yyyy-MM-dd HH:mm:ss" type="date" placeholder="选择日期" v-model="time.addtime"></el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="事件类型">
            <el-select v-model="time.BigThing">
              <el-option label="大事件" value="1"></el-option>
              <el-option label="小事件" value="0"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="submitForm('formwe')">确 定</el-button>
        </span>
      </el-dialog>

      <el-dialog title="编辑" :visible.sync="dialogeditVisible" width="20%" :before-close="handleClose">
        <el-form size="mini" ref="form" :model="time" label-width="80px">
          <el-form-item label-width="150px" label="事件名称" style=" margin-left: -70px">
            <el-input v-model="time.name" style="width: 83%;"></el-input>
          </el-form-item>
          <el-form-item label="事件时间">
            <el-col :span="11">
              <el-date-picker value-format="yyyy-MM-dd HH:mm:ss" type="date" placeholder="选择日期" v-model="time.addtime"></el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="事件类型">
            <el-select v-model="time.BigThing">
              <el-option label="大事件" value="1"></el-option>
              <el-option label="小事件" value="0"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="submitForm('formwe')">确 定</el-button>
        </span>
      </el-dialog>


      <div class="kind">
        <div>事件类型
          <ul class="ul">
            <li class="li2"><router-link to="">手机APP</router-link></li>
            <li class="li2"><router-link to="">小程序</router-link></li>
            <li class="li2"><router-link to="">WEB网站</router-link></li>
            <li class="li2"><router-link to="">PC客户端</router-link></li>
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
        <tr v-for="fo in times">
          <td>{{fo.name}}</td>
          <td>{{fo.BigThing==1?('大事件'):('小事件')}}</td>
          <td>{{fo.addtime}}</td>
          <td>
            <div>
              <button @click="edit(fo)">编辑</button>
              <button @click="delTime(fo)">删除</button>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>


  </div>

</template>

<script>
  import $ from 'jquery'
  import bolosev from '../../service/bllosev'
  export default {

    name: 'history',
    data() {
      return {
        size: 1,
        time: {
          name: '',
          addtime: '',
          BigThing:'',
        },
        times:[],
        dialogVisible: false,
        dialogeditVisible: false
      };
    },
    mounted(){
      bolosev.time({}).then(res => {
        // console.log(res.code)
        if(res.code == 0){
          this.times= res.data;

        }else{
          this.$message('操作失败');
        }
      })
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      edit(fo){
        this.dialogeditVisible=true
        console.log('wqvb')
        this.time.id = fo.id;
        this.time.name = fo.name;
        this.time.BigThing = fo.BigThing;
        this.time.addtime =fo.addtime;
      },
      delTime(fo){
        bolosev.delTime(fo).then(res => {
          if (res.code==0)
          {
            // this.getList(it.navid)
            // this.$message({
            //   type: 'success',
            //   message: '删除成功!'
            // })
            this.$message('删除成功!');
          }
          else{
            console.log('有问题联系管理员')
          }
        })
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      submitForm(formName){
        // let fd = new FormData()
        // for (let par in this.time)
        // {
        //   if (par=='time')
        //     continue
        //   fd.append(par, this.time[par])
        //
        // }
        // if (file)
        // {
        //   fd.append('offNum', file, file.name);
        // }
        // else
        //   fd.append('offNum', this.form.offNum);

        // console.log(7598)
        // let fd = new FormData()
        // for (let par in this.form)
        // {
        //   fd.append(par, this.form[par])
        // }
        // let {addtime:addtime,name,BigThing:BigThing} = this.time
        bolosev.addTime(this.time).then(res => {
          if(res.code==0){
            this.$message('操作成功历程');
          }else{
            this.$message('操作失败');
          }
        })
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
