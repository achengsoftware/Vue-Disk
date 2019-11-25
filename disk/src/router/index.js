import vue from 'vue'
import vueRouter from 'vue-router'

vue.use(vueRouter);

const Main = () => import ('../components/Home.vue')
const Login = () => import('../components/Login.vue')

const routes = [
  {
    path:'/',
    redirect:{
      name:'Main'
    }
  },
  {
   path: '/Main',
   name:'Main',
   component: Main 
  },
  { 
   path: '/Login',
   name:'Login',
   component: Login
  }
]

export default new vueRouter({
  routes,
  mode:'history'
});