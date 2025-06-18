import { createRouter, createWebHistory } from 'vue-router';
import AppLayout from '@/layout/AppLayout.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: AppLayout,
            children: [
                
                        {
                            path: '/nosotros',
                            name: 'nosotros',
                            component: () => import('@/views/pages/nosotros.vue')
                        },


                        {
                            path: '/',
                            name: 'main',
                            component: () => import('@/views/pages/Helados.vue'),
                            redirect:'/helados'
                        },

                        {
                            path: '/helados/',
                            name: 'helados',
                            component: () => import('@/views/pages/Helados.vue')
                        },
                           {
                            path: '/helados-mayor/',
                            name: 'helados-mayor',
                            component: () => import('@/views/pages/HeladosMayor.vue')
                        },
                        {
                            path: '/paneles/',
                            name: 'paneles',
                            component: () => import('@/views/pages/paneles.vue')
                        },

                        
                        {
                            path: '/producto/:product_name',
                            name: 'producto',
                            component: () => import('@/views/pages/producto.vue'),
                            children:[
                                 {
                                    path: '/producto/:product_name',
                                    name: 'producto-helados',
                                    component: () => import('@/views/pages/Helados.vue')
                                },
                            ]
                        }
                    ]
                    
                },

                
            
            
            
            ]
        }
    
);

export default router;
