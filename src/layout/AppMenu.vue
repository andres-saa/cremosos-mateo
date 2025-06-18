<script setup>
import { ref } from 'vue';

import AppMenuItem from './AppMenuItem.vue';

const model = ref([
    {
        label: 'Productos y servicios',
        items: [{ label: 'Cuartos frios', icon: 'pi pi-fw pi-home', to: '/cuartos-frios' },
        { label: 'Salas de procesos', icon: 'pi pi-fw pi-home', to: '/' },
        { label: 'Tunel de congelacion', icon: 'pi pi-fw pi-home', to: '/' },
        { label: 'Generadora de hielo', icon: 'pi pi-fw pi-home', to: '/' },
        { label: 'Generadora de hielo', icon: 'pi pi-fw pi-home', to: '/' },
        { label: 'Planta de produccion', icon: 'pi pi-fw pi-home', to: '/' }
    
    ]
    },

    {
        label: 'Proyectos',
        items: [{ label: 'Casos de exito', icon: 'pi pi-fw pi-home', to: '/' }]
    },


    {
        label: 'Cotizaciones',
        items: [{ label: 'solicitar cotizacion', icon: 'pi pi-fw pi-home', to: '/' }]
    },

    {
        label: 'Informacion de la empresa',
        items: [{ label: 'Nosotros', icon: 'pi pi-fw pi-home', to: '/nosotros' }]
    },
    
]);
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
        
    </ul>
</template>

<style lang="scss" scoped></style>
