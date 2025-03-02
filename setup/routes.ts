import { defineRoutesSetup } from '@slidev/types'

export default defineRoutesSetup((routes) => {
    return [
        ...routes,
        // {
        //     path: '/my-page',
        //     component: () => import('../pages/my-page.vue'),
        // },
        // {
        //     path: '/mytest/:no',
        //     component: () => import('../node_modules/@slidev/client/pages/play.vue'),
        // },
        // {
        //     // 404
        //     path: '/404',
        //     component: () => import('../pages/404.vue'),
        //     name: '404',
        //     meta: {
        //         title: '404',
        //         hiden: true,
        //     }
        // },
        // {
        //     //  任意路由：当上面都没有匹配到，则重定向到404
        //     path: '/:pathMatch(.*)*',
        //     redirect: '/404',
        //     name: 'Any',
        //     meta: {
        //         title: '任意路由',
        //         hiden: true,
        //     }
        // },
    ]
})