import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../views/HomePage.vue';
import FaqPage from '../views/FaqPage.vue';
import BuyNFT from '../views/BuyNFT.vue';
import AboutPage from '../views/AboutPage.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/faq',
    name: 'faq',
    component: FaqPage
  },
  {
    path: '/buy-nft',
    name: 'home',
    component: BuyNFT
  },
  {
    path: '/about',
    name: 'home',
    component: AboutPage
  },
  
]

const router = new VueRouter({
  routes
})

export default router
