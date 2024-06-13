import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import BookView from '@/views/BookView.vue'
import EditorView from '@/views/EditorView.vue'
import RecommendView1 from '@/views/RecommendView1.vue'
import RecommendView2 from '@/views/RecommendView2.vue'
import RecommendView3 from '@/views/RecommendView3.vue'
import RecommendView4 from '@/views/RecommendView4.vue'
import ExplainView from '@/views/ExplainView.vue'

const routes = [
  { 
    path: '/', 
    name: 'home',
    component: HomeView,
  },
  { 
    path: '/login', 
    name: 'login',
    component: LoginView,
  },
  { 
    path: '/book', 
    name: 'book',
    component: BookView,
  },
  { 
    path: '/editor', 
    name: 'editor',
    component: EditorView,
  },
  { 
    path: '/recommend1', 
    name: 'recommend1',
    component: RecommendView1,
  },
  { 
    path: '/recommend2', 
    name: 'recommend2',
    component: RecommendView2,
  },
  { 
    path: '/recommend3', 
    name: 'recommend3',
    component: RecommendView3,
  },
  { 
    path: '/recommend4', 
    name: 'recommend4',
    component: RecommendView4,
  },
  {
    path: '/explain',
    name: 'explain',
    component: ExplainView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router