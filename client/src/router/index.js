import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutUs from '../views/AboutUs.vue'
import MainPage from '../views/MainPage.vue'
import LoginPage from '../views/LoginPage.vue'
import SignUpPage from '../views/SignUpPage.vue'
import EmailConfirmation from '../views/EmailConfirmation.vue'
import UserMain from '../views/UserMain.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: '/',
        name:'main-page',
        component: MainPage
      },
      {
        path: 'about-us',
        component:AboutUs
      }
    ]
  },
  {
    path:'/login',
    name:'login',
    component: LoginPage
  },
  {
    path:'/sign-up',
    name:'sign-up',
    component: SignUpPage
  },
  {
    path:'/email-confirmation/:username',
    name:'email-confirmation',
    component: EmailConfirmation,
    props:true
  },
  {
    path:'/user/:username',
    name:'user-main',
    component: UserMain
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
