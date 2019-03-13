import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home/Home'
import Service from '../components/service/ServiceP'
import AboutUs from '../components/aboutUs/AboutUs'
import ContactUs from '../components/contactUs/ContactUs'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/service',
      name: 'Service',
      component: Service
    },
    {
      path: '/aboutUs',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/contactUs',
      name: 'ContactUs',
      component: ContactUs
    }
  ]
})
// import Vue from 'vue'
// import Router from 'vue-router'
// Vue.use(Router)
//
// // 入口
// // const Index = r => require.ensure([], () => r(require('../components/Index')), 'Index')
//
// // 首页
// const Index = r => require.ensure([], () => r(require('../components/Index')), 'Index')
// const Home = r => require.ensure([], () => r(require('../components/home/Home')), 'Home')
// // 其他页
// const Others = r => require.ensure([], () => r(require('../components/others/Others')), 'Others')
// // 其他列表页
// const OtherList = r => require.ensure([], () => r(require('../components/others/list/OtherList')), 'OtherList')
// // 其他详情页
// const OtherDetail = r => require.ensure([], () => r(require('../components/others/detail/OtherDetail')), 'OtherDetail')
// // 留言页
// const Message = r => require.ensure([], () => r(require('../components/others/message/Message')), 'Message')
// // 位置
// const Position = r => require.ensure([], () => r(require('../components/others/position/Position')), 'Position')
// // 楼层分布
// const Distribute = r => require.ensure([], () => r(require('../components/others/distribute/Distribute')), 'Distribute')
//
// // 公告页
// const Notice = r => require.ensure([], () => r(require('../components/notice/Notice')), 'Notice')
// // 本馆概况
// const Info = r => require.ensure([], () => r(require('../components/info/Info')), 'Info')
// // 登录
// const Login = r => require.ensure([], () => r(require('../components/login/Login')), 'Login')
//
// // 后台
// const  Back  = r => require.ensure([], () => r(require('../components/back/Back')), 'Back')
// // 导航管理
// const Nav = r => require.ensure([], () => r(require('../components/back/Nav/Nav')), 'Nav')
// // 文章管理
// const Article = r => require.ensure([], () => r(require('../components/back/Article/Article')), 'Article')
//
// // 楼层管理
// const Floor  = r => require.ensure([], () => r(require('../components/back/Floor/Floor')), 'Floor')
// // 用户信息
// const UserMessage = r => require.ensure([], () => r(require('../components/back/UserMessage/UserMessage')), 'UserMessage')
//
// export default new Router({
//   mode: 'history',
//   routes: [
//     {
//       path: '/',
//       name: 'Index',
//       component: Index,
//       props: true,
//       redirect: '/',
//       children: [
//         {
//           path: '/',
//           name: 'Home',
//           component: Home
//         },
//         {
//           path: '/Others/:id/:name',
//           name: 'Others',
//           component: Others,
//           props: true,
//           children: [
//             {
//               path: 'OtherList/:navId/:navName',
//               name: 'OtherList',
//               props: true,
//               component: OtherList
//             },
//             {
//               path: 'OtherDetail/:navId/:navName/:articleId/:articleName',
//               name: 'OtherDetail',
//               props: true,
//               component: OtherDetail
//             },
//             {
//               path: 'Message/:navId/:messageName',
//               name: 'Message',
//               props: true,
//               component: Message
//             },
//             {
//               path: 'Distribute/:navId/:distributeName',
//               name: 'Distribute',
//               props: true,
//               component: Distribute
//             },
//             {
//               path: 'Position/:navId/:positionName',
//               name: 'Position',
//               props: true,
//               component: Position
//             },
//           ]
//         },
//         {
//           path: '/Notice',
//           name: 'Notice',
//           component: Notice
//         },
//         {
//           path: '/Info',
//           name: 'Info',
//           component: Info
//         },
//       ]
//     },
//     {
//       path: '/login',
//       name: 'Login',
//       component: Login
//     },
//     {
//       path: '/Back',
//       name: 'Back',
//       component: Back,
//       children: [
//         {
//           path: 'Article',
//           name: 'Article',
//           props: true,
//           component: Article
//         },
//         {
//           path: 'Floor',
//           name: 'Floor',
//           props: true,
//           component: Floor
//         },
//         {
//           path: 'Nav',
//           name: 'Nav',
//           props: true,
//           component: Nav
//         },
//         {
//           path: 'UserMessage',
//           name: 'UserMessage',
//           props: true,
//           component: UserMessage
//         },
//       ]
//     }
//   ]
// })
