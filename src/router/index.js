import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import BookView from '@/views/BookView.vue'
import EditorView from '@/views/EditorView.vue'
import Recommend1View from '@/views/Recommend1View.vue'
import Recommend2View from '@/views/Recommend2View.vue'
import Recommend3View from '@/views/Recommend3View.vue'
import Recommend4View from '@/views/Recommend4View.vue'
import Recommend5View from '@/views/Recommend5View.vue'
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
    component: Recommend1View,
  },
  { 
    path: '/recommend2', 
    name: 'recommend2',
    component: Recommend2View,
  },
  { 
    path: '/recommend3', 
    name: 'recommend3',
    component: Recommend3View,
  },
  { 
    path: '/recommend4', 
    name: 'recommend4',
    component: Recommend4View,
  },
  { 
    path: '/recommend5', 
    name: 'recommend5',
    component: Recommend5View,
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