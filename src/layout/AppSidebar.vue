<script setup lang="ts">

import { useLayout } from './composables/layout';



const {onMenuToggle} = useLayout()

const navButtons = [
  { 
    name: '🍓🥥Nuestros Helados',
    to: '/helados',
    items: [
      { name: '🍓🥥 Por unidades', to: '/helados' },
      { name: '🍓🥥 Por mayor',   to: '/helados-mayor' }
    ]
  },
  // {
  //   name: 'Domicilios',
  //   to: '/cuartos-frios',
  //   items: [
  //     { name: 'Cuartos fríos',              to: '/cuartos-frios' },
  //     { name: 'Paneles para cuartos fríos', to: '/paneles' }
  //   ]
  // },
  {
    name: 'Nosotros',
    to: '/nosotros',
    items: [
      { name: '¿Quiénes somos?',  to: '/nosotros#historia' },
      { name: 'Nuestra Misión',   to: '/nosotros#mision'  },
      { name: 'Nuestra Visión',   to: '/vision#vision'    },
      { name: 'Nuestros Valores', to: '/valores#valores'  }
    ]
  },
  // { name: 'Contacto', to: '/' }
]
</script>

<template>
  <!-- NAV -->
  <nav class="flex flex-wrap gap-2 my-2 " style="width: 100%;align-items: center;justify-content: center;">
    <div
      v-for="btn in navButtons"
      :key="btn.name"
      class="relative group"
    >
      <!-- Botón principal -->
      <RouterLink style="width: 100%;height: 3rem;"
       
        :to="btn.to"
      >

      <Button   @click="onMenuToggle" :label="btn.name " style="background-color: #7a0079;border: none; height: 3rem;">
        
      </Button>

      </RouterLink>


     
    </div>
  </nav>

  <!-- CONTENIDO -->

  <iframe 
    src="https://www.instagram.com/reel/DKSBHOdAbpu/embed"
    style="width:100%;height:100vh;"
    scrolling="no"
    frameborder="0"
    allowfullscreen
    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
  </iframe>


</template>

<style scoped>
/* Si usas Tailwind no necesitas nada extra; esto es opcional */
nav a { font-weight: 600; }
</style>
