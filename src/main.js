import Vue from 'vue'
import App from './components/App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store/store.js'
import VueRouter from "vue-router";
import axios from 'axios';

import Home from "./components/home/home.vue";
import Writings from "./components/writings/writings.vue";
import Reading from "./components/reading/reading.vue";
import UserCenter from "./components/user/userCenter.vue";
import TopicDetails from "./components/topic/topicDetails.vue";
import CommonList from "./components/commonList/commonList.vue";

Vue.use(VueRouter);
Vue.use(ElementUI);

axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// axios.defaults.baseURL = 'http://localhost:8080/ArticleHub';
Vue.prototype.$axios = axios

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/writings',
      component: Writings
    },
    {
      path: '/reading',
      component: Reading
    },
    {
      path: '/user',
      component: UserCenter
    },
    {
      path: '/topic',
      component: TopicDetails
    },
    {
      path: '/topics',
      component: CommonList
    },
    {
      path: '/authors',
      component: CommonList
    },
    {
      path: '/search',
      component: CommonList
    }
  ]
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
