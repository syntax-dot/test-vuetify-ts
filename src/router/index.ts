// Composables
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Home'

export default createRouter({
  history: createWebHistory(),
  routes: [...HomeView]
})
