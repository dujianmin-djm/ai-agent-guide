import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style.css'

import HomeView from './views/HomeView.vue'
import SetupView from './views/SetupView.vue'
import ResourcesView from './views/ResourcesView.vue'
import VendorsView from './views/VendorsView.vue'
import RecommendView from './views/RecommendView.vue'
import DeveloperNotesView from './views/DeveloperNotesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView, meta: { title: '首页' } },
    { path: '/setup', component: SetupView, meta: { title: '苍穹标品开发' } },
    { path: '/resources', component: ResourcesView, meta: { title: '资源下载' } },
    { path: '/vendors', component: VendorsView, meta: { title: 'AI 厂商全景' } },
    { path: '/recommend', component: RecommendView, meta: { title: '场景化模型推荐' } },
    { path: '/developer-notes', component: DeveloperNotesView, meta: { title: '开发者手记' } },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0, behavior: 'smooth' }
  },
})

createApp(App).use(router).mount('#app')
