import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './views/HomeView.vue'
import LoginView from './views/LoginView.vue'
import BookView from './views/BookView.vue'
import WritingView from './views/WritingView.vue'
import RecommendView from './views/RecommendView.vue'


const routes = [
  { 
    path: '/', 
    name: 'home',
    component: HomeView 
  },
  { 
    path: '/login', 
    name: 'login',
    component: LoginView 
  },
  { 
    path: '/book', 
    name: 'book',
    component: BookView 
  },
  { 
    path: '/writing', 
    name: 'writing',
    component: WritingView 
  },
  { 
    path: '/recommend', 
    name: 'recommend',
    component: RecommendView 
  },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router