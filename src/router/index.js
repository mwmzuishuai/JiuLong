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
        {
            path: '/rs', component: () => import('../views/remoteSignal.vue')
        },
        {
            path: '/ammeter', component: () => import('../views/ammeter/ammeter.vue')
        },
        {
            path: '/data', component: () => import('../views/dataLine.vue')
        }
        ]
    },
    {
        path: '/login', component: () => import('../views/login.vue')
    }
    ]
})
export default router