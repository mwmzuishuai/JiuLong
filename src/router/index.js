import { createMemoryHistory, createRouter } from 'vue-router'
const router = createRouter({
    history: createMemoryHistory(),
    routes: [{
        path: '/', component: () => import('../views/home.vue'),
        children: [{
            path: '', component: () => import('../components/onetitle.vue')
        }, {
            path: '/com', component: () => import('../components/conment.vue')
        }]
    },
    {
        path: '/login', component: () => import('../views/login.vue')
    }
    ]
})
export default router