<template>
    <div>

      <div class="nav-right">
        <div class="div-top">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;今日事今日毕</div>
        <el-button type="text" @click="dialogVisible = true">添加</el-button>
        <el-dialog title="添加" :visible.sync="dialogVisible" width="70%" :before-close="handleClose">
          <el-form size="mini" ref="form" :model="form" label-width="80px">
            <el-form-item label-width="150px" label="产品名称" style="margin-left: -50px">
              <el-input v-model="form.name" style="width: 100px"></el-input>
            </el-form-item>
            <el-form-item label="产品时间">
              <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
              </el-col>
            </el-form-item>

            <el-form-item label="列表图片" prop="cover">
              <input @change="ichange"
                     accept=".jpg,.gif,.png,.jpeg"
                     type="file"/>
              <img :src="form.cover" width="20%"/>
            </el-form-item>

            <el-form-item label="首页图片" prop="cover">
              <el-switch v-model="value3" inactive-text="显示">
              </el-switch>
              <input @change="ichange"
                     accept=".jpg,.gif,.png,.jpeg"
                     type="file"/>
              <img :src="form.cover" width="20%"/>

            </el-form-item>
            <el-form-item label="详情图片" prop="cover">
              <input @change="ichange"
                     accept=".jpg,.gif,.png,.jpeg"
                     type="file"/>
              <img :src="form.cover" width="20%"/>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="onSubmit">立即创建</el-button>
              <el-button>取消</el-button>
            </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
          </span>
        </el-dialog>
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
            <td>{{form.name}}</td>
            <td>{{form.cover}}</td>
            <td>{{form.date1}}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>

<script>
  export default {

    name: 'product',
    data() {
      return {
        value3:true,
        size: 1,
        form: {
          name: '',
          cover: '',
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
      },
      saveArticle(){
        let banner = this.form
        let file = this.image
        let fd = new FormData()
        if (file)
        {
          fd.append('image', file, file.name);
          banner.cover = '1'
        }
        for (let par in banner)
        {
          fd.append(par, banner[par])
        }
        bolosev.saveArt(fd).then(res=>{
          if (res.code==0){
            this.showDialog = false
            this.getList(this.cNavId)
            this.$message.success("保存成功")
          }
          else
          {
            this.$message.error("保存失败")
          }
        })
      },
      ichange(e) {
        let ipt = e.target
        let img = ipt.files[0]
        if (!img)
          return
        if (img.size > 5242880) {
          this.$message.error("上传图片不能超过5M");
          return
        }
        ipt.value = ""
        let reader = new FileReader()
        let _this = this
        reader.onload = (e) => {
          let src = e.target.result
          _this.image = img
          _this.form.cover = src
        }
        reader.readAsDataURL(img)
      },
      ichang1(e) {
        let ipt = e.target
        let img = ipt.files[0]
        if (!img)
          return
        if (img.size > 5242880) {
          this.$message.error("上传图片不能超过5M");
          return
        }
        ipt.value = ""
        let reader = new FileReader()
        let _this = this
        reader.onload = (e) => {
          let src = e.target.result
          _this.image = img
          _this.form.cover = src
        }
        reader.readAsDataURL(img)
      },
      ichang2(e) {
        let ipt = e.target
        let img = ipt.files[0]
        if (!img)
          return
        if (img.size > 5242880) {
          this.$message.error("上传图片不能超过5M");
          return
        }
        ipt.value = ""
        let reader = new FileReader()
        let _this = this
        reader.onload = (e) => {
          let src = e.target.result
          _this.image = img
          _this.form.cover = src
        }
        reader.readAsDataURL(img)
      },
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
