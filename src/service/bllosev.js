/**
 * Created by Administrator on 2017/12/20.
 */
import axios from 'axios';
import {baseURL} from '../components/pc/common/globaldata';
import router from '../router'

// 验证登录拦截器
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          router.push('/Login')
          break;
      }
    }
    return Promise.reject(error.response.data)   // 返回接口返回的错误信息
  });

export default {
  // 登录
  login(params){
    return new Promise((resolve,reject)=>{
      axios.post(baseURL + 'adminLogin',params)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    })
  },
  // 登出
  logout(){
    return new Promise((resolve,reject)=>{
      axios.get(baseURL + 'adminLogout')
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    })
  },
  // 产品列表
  productList(){
    return new Promise((resolve,reject)=>{
      axios.get(baseURL + 'getProducts')
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    })
  },
  // 服务列表
  serviceList(){
    return new Promise((resolve,reject)=>{
      axios.get(baseURL + 'getServer')
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    })
  },
  //首页 关于我们
  aboutUs(params){
    return new Promise((resolve,reject)=>{
      axios.post(baseURL + 'time',params)
        .then((response) => {
          resolve(response.data);
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    })
  },
  // 首页联系我们
  contactUs(params){
    return new Promise((resolve,reject)=>{
      axios.post(baseURL + 'getComInfo',params)
        .then((response) => {
          resolve(response.data);
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    })
  },
  // 产品
  selectProduct(params){
    return new Promise((resolve,reject)=>{
      axios.post(baseURL + 'allProducts',params)
        .then((response) => {
          resolve(response.data);
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    })
  },
  // 保存产品
  saveProduct(){
    return new Promise((resolve,reject)=>{
      axios.get(baseURL + 'saveProduct')
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    })
  },
  // 删除产品
  delProduct(){
    return new Promise((resolve,reject)=>{
      axios.get(baseURL + 'delProduct')
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    })
  },
  // 服务
  selectService(){
    return new Promise((resolve,reject)=>{
      axios.get(baseURL + 'getServer')
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    })
  },
  // 保存服务
  saveService(){
    return new Promise((resolve,reject)=>{
      axios.get(baseURL + 'saveService')
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    })
  },
  // 删除服务
  delService(){
    return new Promise((resolve,reject)=>{
      axios.get(baseURL + 'delService')
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    })
  },
  // 关于我们
  selectCom(){
    return new Promise((resolve,reject)=>{
      axios.get(baseURL + 'getComInfo')
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    })
  },
  // 保存关于我们
  saveComInfo(){
    return new Promise((resolve,reject)=>{
      axios.get(baseURL + 'saveComInfo')
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    })
  },
















  // verifyCaptcha(params){
  //   return new Promise((resolve,reject)=>{
  //     axios.post(baseURL + 'verifyCaptcha',params)
  //       .then((response) => {
  //         resolve(response.data);
  //       })
  //       .catch((error) => {
  //         reject(error);
  //       });
  //   })
  // },
  // create_mes(params){
  //   return new Promise((resolve,reject)=>{
  //     axios.post(baseURL + 'create_mes',params)
  //       .then((response) => {
  //         resolve(response.data);
  //       })
  //       .catch((error) => {
  //         reject(error);
  //       });
  //   })
  // },
  // updateSort(params){
  //   return new Promise((resolve,reject)=>{
  //     axios.post(baseURL + 'updateSort',params)
  //       .then((response) => {
  //         resolve(response.data);
  //       })
  //       .catch((error) => {
  //         reject(error);
  //       });
  //   })
  // },
  // getCNav(id){
  //   return new Promise((resolve,reject)=>{
  //     axios.get(baseURL + 'getCNav?id='+id)
  //       .then((response) => {
  //         resolve(response.data);
  //       })
  //       .catch((error) => {
  //         reject(error);
  //       });
  //   })
  // },
  // delNav(id){
  //   return new Promise((resolve,reject)=>{
  //     axios.post(baseURL + 'del_nav',{id})
  //       .then((response) => {
  //         resolve(response.data);
  //       })
  //       .catch((error) => {
  //         reject(error);
  //       });
  //   })
  // },
  // getAll(){
  //   return new Promise((resolve,reject)=>{
  //     axios.get(baseURL + 'getAll')
  //       .then((response) => {
  //         resolve(response.data);
  //       })
  //       .catch((error) => {
  //         reject(error);
  //       });
  //   })
  // },
  // getArt(id){
  //   return new Promise((resolve,reject)=>{
  //     axios.get(baseURL + 'getArt?id='+id)
  //       .then((response) => {
  //         resolve(response.data);
  //       })
  //       .catch((error) => {
  //         reject(error);
  //       });
  //   })
  // },
  // getArtDetail(id){
  //   return new Promise((resolve,reject)=>{
  //     axios.get(baseURL + 'article/'+id)
  //       .then((response) => {
  //         resolve(response.data);
  //       })
  //       .catch((error) => {
  //         reject(error);
  //       });
  //   })
  // },
  // saveArt(params){
  //   return new Promise((resolve,reject)=>{
  //     axios.post(baseURL + 'save_art',params)
  //       .then((response) => {
  //         resolve(response.data);
  //       })
  //       .catch((error) => {
  //         reject(error);
  //       });
  //   })
  // },
  // delArt(id){
  //   return new Promise((resolve,reject)=>{
  //     axios.post(baseURL + 'del_art',{id})
  //       .then((response) => {
  //         resolve(response.data);
  //       })
  //       .catch((error) => {
  //         reject(error);
  //       });
  //   })
  // },
  // //  notice
  // saveNotice(params){
  //   return new Promise((resolve,reject)=>{
  //     axios.post(baseURL + 'notice',params)
  //       .then((response) => {
  //         resolve(response.data);
  //       })
  //       .catch((error) => {
  //         reject(error);
  //       });
  //   })
  // },
  // getNotices(){
  //   return new Promise((resolve,reject)=>{
  //     axios.get(baseURL + 'getnotice')
  //       .then((response) => {
  //         resolve(response.data);
  //       })
  //       .catch((error) => {
  //         reject(error);
  //       });
  //   })
  // },
  // getCommonNav(){
  //   return new Promise((resolve,reject)=>{
  //     axios.get(baseURL + 'getcommonnav')
  //       .then((response) => {
  //         resolve(response.data);
  //       })
  //       .catch((error) => {
  //         reject(error);
  //       });
  //   })
  // },
  // getFloors(){
  //   return new Promise((resolve,reject)=>{
  //     axios.get(baseURL + 'floor')
  //       .then((response) => {
  //         resolve(response.data);
  //       })
  //       .catch((error) => {
  //         reject(error);
  //       });
  //   })
  // },
  // getInfo(){
  //   return new Promise((resolve,reject)=>{
  //     axios.get(baseURL + 'getinfo')
  //       .then((response) => {
  //         resolve(response.data);
  //       })
  //       .catch((error) => {
  //         reject(error);
  //       });
  //   })
  // },
  // indexPage(){
  //   return new Promise((resolve,reject)=>{
  //     axios.get(baseURL + 'indexPage')
  //       .then((response) => {
  //         resolve(response.data);
  //       })
  //       .catch((error) => {
  //         reject(error);
  //       });
  //   })
  // },
  // getNoticeDetail(id){
  //   return new Promise((resolve,reject)=>{
  //     axios.get(baseURL + 'notice/'+id)
  //       .then((response) => {
  //         resolve(response.data);
  //       })
  //       .catch((error) => {
  //         reject(error);
  //       });
  //   })
  // },
  // hideNotice(params){
  //   return new Promise((resolve,reject)=>{
  //     axios.post(baseURL + 'hidenotice',params)
  //       .then((response) => {
  //         resolve(response.data);
  //       })
  //       .catch((error) => {
  //         reject(error);
  //       });
  //   })
  // },
  // delNotice(id){
  //   return new Promise((resolve,reject)=>{
  //     axios.post(baseURL + 'del_notice',{id})
  //       .then((response) => {
  //         resolve(response.data);
  //       })
  //       .catch((error) => {
  //         reject(error);
  //       });
  //   })
  // },
  // uploadImg(params){
  //   return new Promise((resolve,reject)=>{
  //     axios.post(baseURL + 'upload',params)
  //       .then((response) => {
  //         resolve(response.data);
  //       })
  //       .catch((error) => {
  //         reject(error);
  //       });
  //   })
  // }
}
