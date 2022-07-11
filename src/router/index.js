import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const Login = () => import('@/views/Login')
const Home = () => import('@/views/Home')
const Layout = () => import('@/views/Layout')
const My = () => import('@/views/My')
const News = () => import('@/views/News')
const Search = () => import('@/views/Search')
const City = () => import('@/views/City')
const Favorate = () => import('@/views/Favorate/index.vue')
const Myrent = () => import('@/views/Myrent/index.vue')
const Details = () => import('@/views/Details')
const Gorent = () => import('@/views/Gorent')
const routes = [
  { path: '/login', component: Login },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      { path: 'home', component: Home },
      { path: 'news', component: News },
      { path: 'my', component: My, name: 'my' },
      { path: 'search', component: Search }
    ]
  },
  { path: '/city', component: City, name: 'city' },
  { path: '/favorate', component: Favorate },
  { path: '/myrent', component: Myrent },
  { path: '/details/:houseCode', component: Details, name: 'details' },
  { path: '/gorent', component: Gorent }
]

const router = new VueRouter({
  routes
})

export default router
