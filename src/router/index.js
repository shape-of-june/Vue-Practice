import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import BookView from '@/views/BookView.vue'
import EditorView from '@/views/EditorView.vue'
import RecommendView from '@/views/RecommendView.vue'
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
    // props: route => ({ query: route.query.q }) // Is this necessary?
  },
  { 
    path: '/editor', 
    name: 'editor',
    component: EditorView,
  },
  { 
    path: '/recommend', 
    name: 'recommend',
    component: RecommendView,
  },
  {
    path: '/explain',
    name: 'explain',
    component: ExplainView,
  },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router