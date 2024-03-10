import AppView from '../views/AppView.vue'
import { createRouter } from "vue-router";
import { createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/app',
            name: "home",
            component: AppView,
            children: [
                {
                    path: 'dataSource',
                    name: 'dataSource',
                    component: () => import('../views/DataSourceView.vue')
                },
                {
                    path: 'layout',
                    name: 'layout',
                    component: () => import('../views/PageLayoutView.vue')
                },
                {
                    path: 'actions',
                    name: 'actions',
                    component: () => import('../views/ActionsView.vue')
                }
            ]
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/AboutView.vue')
        }
    ]
})

export default router