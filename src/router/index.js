import { createMemoryHistory, createRouter } from 'vue-router'
const router = createRouter({
    history: createMemoryHistory(),
    routes: [{
        path: '/', component: () => import('../views/home.vue'),
        children: [{
            path: '', component: () => import('../views/topo.vue')
        }, {
            path: '/com', component: () => import('../components/conment.vue')
        },
            // {
            // path: '/com2', component: () => import('../components/conment.vue')
            // }
        ]
    },
    {
        path: '/login', component: () => import('../views/login.vue')
    }
    ]
})
export default router