import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import('../views/Category.vue')
  },
  {
    path: '/message',
    name: 'Message',
    component: () => import('../views/Message.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/coupon',
    name: 'Coupon',
    component: () => import('../views/Coupon.vue')
  },
  {
    path: '/address',
    name: 'Address',
    component: () => import('../views/Address.vue')
  },
  {
    path: '/favorite',
    name: 'Favorite',
    component: () => import('../views/Favorite.vue')
  },
  {
    path: '/help',
    name: 'Help',
    component: () => import('../views/Help.vue')
  },
  {
    path: '/help/shopping-flow',
    name: 'HelpShoppingFlow',
    component: () => import('../views/help/ShoppingFlow.vue')
  },
  {
    path: '/help/payment-method',
    name: 'HelpPaymentMethod',
    component: () => import('../views/help/PaymentMethod.vue')
  },
  {
    path: '/help/delivery-info',
    name: 'HelpDeliveryInfo',
    component: () => import('../views/help/DeliveryInfo.vue')
  },
  {
    path: '/help/return-policy',
    name: 'HelpReturnPolicy',
    component: () => import('../views/help/ReturnPolicy.vue')
  },
  {
    path: '/setting',
    name: 'Setting',
    component: () => import('../views/Setting.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
