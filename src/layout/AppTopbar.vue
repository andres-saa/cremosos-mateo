<script setup>
import { ref,nextTick, computed, onMounted, onBeforeUnmount } from 'vue';
import { useLayout } from '@/layout/composables/layout';
import { RouterLink, useRouter,useRoute } from 'vue-router';
import router from '@/router/index.js'
import { useProductStore } from '../store/product';
const { layoutConfig, onMenuToggle } = useLayout();



const store = useProductStore()

const outsideClickListener = ref(null);
const topbarMenuActive = ref(false);
const route = useRoute();

onMounted(() => {
    bindOutsideClickListener();
});

onBeforeUnmount(() => {
    unbindOutsideClickListener();
});


const scrollToElement = async(selector) => {

    console.log(route)
    if (route.path !== '/nosotros') {
        router.push('/nosotros')
        await nextTick()
        setTimeout(() => {
            const element = document.querySelector(selector);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            } else {
                console.error('Elemento no encontrado:', selector);
            }
        }, 1000);
    } else {

        const element = document.querySelector(selector);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            } else {
                console.error('Elemento no encontrado:', selector);
            }

    }
   

};

const logoUrl = computed(() => {
    return '/images/logo.png';
});

const onTopBarMenuButton = () => {
    topbarMenuActive.value = !topbarMenuActive.value;
};
const onSettingsClick = () => {
    topbarMenuActive.value = false;
    route.push('/documentation');
};
const topbarMenuClasses = computed(() => {
    return {
        'layout-topbar-menu-mobile-active': topbarMenuActive.value
    };
});

const bindOutsideClickListener = () => {
    if (!outsideClickListener.value) {
        outsideClickListener.value = (event) => {
            if (isOutsideClicked(event)) {
                topbarMenuActive.value = false;
                currentHover.value = {}
            }
        };
        document.addEventListener('click', outsideClickListener.value);
    }
};
const unbindOutsideClickListener = () => {
    if (outsideClickListener.value) {
        document.removeEventListener('click', outsideClickListener);
        outsideClickListener.value = null;
        currentHover.value = {}
    }
};
const isOutsideClicked = (event) => {
    if (!topbarMenuActive.value) return;

    const sidebarEl = document.querySelector('.layout-topbar-menu');
    const topbarEl = document.querySelector('.layout-topbar-menu-button');

    return !(sidebarEl.isSameNode(event.target) || sidebarEl.contains(event.target) || topbarEl.isSameNode(event.target) || topbarEl.contains(event.target));
};







const navButtons = [
    {
        name:'🍓🥥Nuestros Helados',
        to:'/helados',
        items:[
            {
                name:'🍓🥥 Por unidades',
                to:'/helados'
            },
            {
                name:'🍓🥥Por mayor',
                to:'/helados-mayor'
            }
        ]
    },
    //    {
    //     name:'Domicilios',
    //     to:'/cuartos-frios',
    //     // items:[
    //     //     {
    //     //         name:'Cuartos frios',
    //     //         to:'/cuartos-frios'
    //     //     },
    //     //     {
    //     //         name:'Paneles para cuartos frios',
    //     //         to:'/paneles'
    //     //     }
            
           
    //     // ]
    // },

    // {
    //     name:'Proyectos',
    //     to:'/'
    // },

    // {
    //     name:'Solicitar cotizacion',
    //     to:'/'
    // },
    {
        name:'Nosotros',
        to:'/nosotros',
        items:[
            {
                name:'Quienes somos?',
                to:'/nosotros',
                section:'#historia'
            },
            {
                name:'Nuestra Mision',
                to:'/nosotros',
                section:'#mision'
            },
            {
                name:'Nuestra Vision',
                section:'#vision',
                to:'/vision'
            },
            {
                name:'Nuestros Valores ',
                section:'#valores',
                to:'/valores'
            },
           
        ]
    },

    // {
    //     name:'Contacto',
    //     to:'/'
    // },

 
]






const screenWidth = ref(window.innerWidth);
const isSmallScreen = computed(() => screenWidth.value < 992);

const updateScreenWidth = () => {
    screenWidth.value = window.innerWidth;
};

onMounted(() => {
    window.addEventListener('resize', updateScreenWidth);
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', updateScreenWidth);
});





const currentHover = ref({})

const setCurrentHover = (data) =>{

    if(!data?.items){
        store.MenuVisibleHover = false
        return
    }
    store.MenuVisibleHover = true
    currentHover.value = data

}




</script>

<template>

    <div class="layout-topbar xl:px-8 py-0" style="background-color: #7a0079;">
      
        <div class="layout-topbar-logo">
            <router-link to="/"  style="display: flex;align-items: center;z-index: 999;">
            <img :src="logoUrl" alt="logo" />
            <h6 class="text-white"> <b>Helados Cremosos Mateo</b> </h6>
            </router-link>
        </div>
      

        <button class="p-link layout-menu-button layout-topbar-button p-3" v-if="isSmallScreen" @click="onMenuToggle()">
            <i class="pi pi-bars text-white"></i>
        </button>


        <div class="p-link layout-topbar-menu-button layout-topbar-button">

        </div>

        <div v-if="!isSmallScreen" class="layout-topbar-menu p-0" :class="topbarMenuClasses" style="width: 100%; display: flex;position: absolute; justify-content: center;">

    

     
            <div  @mouseenter="store.MenuVisibleHover = false" text class="m-0" style="height: 100%;width: 100%; background-color: transparent   ;"></div>


            <div style="position: relative; width: max-content;display: flex; justify-content: center;flex-direction: column; align-items: center;" v-for=" button in navButtons" >

                <RouterLink :to="button.to">
                <Button :icon="button.items? 'pi pi-angle-down' : ''" iconPos="right" class="text-white " text style="height: 100%;min-width: max-content;" :label="button.name" @mouseenter="setCurrentHover(button)" ></Button>
                </RouterLink>


                <div class="animation shadow-2 mx-3 py-3"   @mouseleave="() => store.MenuVisibleHover = false" @mouseenter="setCurrentHover(button)" v-if="currentHover.name == button.name && store.MenuVisibleHover" style="background-color:white; width:min-content;cursor: pointer; position: absolute;top: 115%; border-radius; overflow: hidden;">
                    <ul class="p-0  m-0">
                        <li class="p-0 m-0" v-for="section in button.items" style="list-style: none">
                          
                                <Button v-if="section.section" @click="scrollToElement(`${section.section}`)" class="text-left sub-menu py-2 px-5 " text severity=""  :label="section.name" style="width:100%; color: var(--text-color); min-width: max-content;"></Button>



                                <RouterLink v-else :to="section.to">
                                    <Button  @click="scrollToElement(`${section.section}`)" class="text-left sub-menu  px-5 py-2 " text severity=""  :label="section.name" style="width:100%;min-width: ; color: var(--text-color); min-width: max-content;">

                                    </Button>
                                </RouterLink>
                               

     
     
                            
                        </li>
                    </ul>
                    
                </div>
            </div>

            
            <div  @mouseenter="store.MenuVisibleHover = false" text class="m-0" style="height: 100%;width: 100%; background-color: transparent   ;"></div>
        </div>


 
        

     


        
    </div>
</template>

<style lang="scss" scoped>



@keyframes anim {

    0%{
        opacity: 0;
        transform: translateX(5rem);

    }
    100%{
        opacity: 1;
    }
    
}


button{
    border-radius: 0
}

button:hover{
    background-color:rgba(14, 164, 233, 0.3);;
    // box-shadow: 0 .2rem white;
}

.animation{
    animation: anim ease .3s;
}

// .sub-menu:hover{
//     background-color: rgba(0, 1, 22, 0.141);
// }


</style>
