<template>
  <div>
      <el-form size="mini" ref="formwe" :model="form" label-width="80px">
        <el-form-item prop="offNum">
          <img :src="form.offNum" width="20%"/>
          <input @change="ichange"
                 accept=".jpg,.gif,.png,.jpeg"
                 type="file"/>
        </el-form-item>
        <el-form-item label-width="150px" label="地址" style="margin-left: -50px" prop="name">
          <el-input v-model="form.address" style="width: 100px" ref="address">{{}}</el-input>
        </el-form-item>
        <el-form-item label-width="150px" label="电话" style="margin-left: -50px" prop="age">
          <el-input v-model="form.phone" style="width: 100px" res="phone">{{}}</el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm('formwe')">确 定</el-button>
        <el-button @click="resetForm('formwe')">重置</el-button>
      </span>
  </div>
</template>
<script>
  import $ from 'jquery'
  import bolosev from '../../service/bllosev'
  export default {
    data() {
      return {
        phone:'',
        address:'',
        size: 1,
        form: {
          phone: 'info',
          address: '',
          offNum: '',
        },
        dialogVisible: false
      };
    },
    mounted(){
      bolosev.selectCom({}).then(res => {
        console.log(res.code)
        if(res.code == 0){
          this.form= res.data;
        }else{
          alert("操作失败")
        }
      })
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
      resetForm(formName){
        this.$refs[formName].resetFields();
      },
      submitForm(formName){
        let file = this.image
        let fd = new FormData()
        for (let par in this.form)
        {
          if (par=='offNum')
            continue
          fd.append(par, this.form[par])
        }
        if (file)
        {
          fd.append('offNum', file, file.name);
        }
        else
          fd.append('offNum', this.form.offNum);

        bolosev.saveComInfo(fd).then(res => {
          if(res.code==0){
            alert("操作成功")
          }else{
            alert("操作失败")
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
        // ipt.value = ""
        let reader = new FileReader()
        let _this = this
        reader.onload = (e) => {
          let src = e.target.result
          _this.image = img
          _this.form.offNum = src
        }
        reader.readAsDataURL(img)
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





  .upload_warp_img_div_del {
    position: absolute;
    top: 6px;
    width: 16px;
    right: 4px;
  }

  .upload_warp_img_div_top {
    position: absolute;
    top: 0;
    width: 100%;
    height: 30px;
    background-color: rgba(0, 0, 0, 0.4);
    line-height: 30px;
    text-align: left;
    color: #fff;
    font-size: 12px;
    text-indent: 4px;
  }

  .upload_warp_img_div_text {
    white-space: nowrap;
    width: 80%;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .upload_warp_img_div img {
    max-width: 100%;
    max-height: 100%;
    vertical-align: middle;
  }

  .upload_warp_img_div {
    position: relative;
    height: 100px;
    width: 120px;
    border: 1px solid #ccc;
    margin: 0px 5px 5px 0px;
    float: left;
    line-height: 100px;
    display: table-cell;
    text-align: center;
    background-color: #eee;
    cursor: pointer;
  }

  .upload_warp_img {
    border-top: 1px solid #D2D2D2;
    padding: 5px 0 0 5px;
    overflow: hidden
  }

  .upload_warp_text {
    text-align: left;
    margin-bottom: 5px;
    padding-top: 5px;
    text-indent: 14px;
    border-top: 1px solid #ccc;
    font-size: 14px;
  }

  .upload_warp_right {
    float: left;
    width: 57%;
    margin-left: 2%;
    height: 100%;
    border: 1px dashed #999;
    border-radius: 4px;
    line-height: 130px;
    color: #999;
  }

  .upload_warp_left button {

    margin: 8px 5px 0px 5px;
    cursor:pointer;


  }

  .upload_warp_left {
    float: left;

  }

  .upload_warp {
    margin: 5px;

  }

  .upload {
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
    background-color: #fff;
    width: 770px;
    box-shadow: 0px 1px 0px #ccc;
    border-radius: 4px;
  }

  .hello {
    width: 770px;
    text-align: center;
  }













</style>
