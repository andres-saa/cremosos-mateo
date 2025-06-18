<script setup>
import { computed, watch, ref } from 'vue';
import AppTopbar from './AppTopbar.vue';
import AppFooter from './AppFooter.vue';
import AppSidebar from './AppSidebar.vue';
import AppConfig from './AppConfig.vue';
import { useLayout } from '@/layout/composables/layout';
import {useRoute} from 'vue-router'
import { useProductStore } from '../store/product';

const store = useProductStore()
const { layoutConfig, layoutState, isSidebarActive } = useLayout();

const outsideClickListener = ref(null);

const route = useRoute()

watch(isSidebarActive, (newVal) => {
    if (newVal) {
        bindOutsideClickListener();
    } else {
        unbindOutsideClickListener();
    }
});


// Observa cambios en la ruta y realiza scroll al inicio si es necesario
watch(() => route.path, () => {
    scrollToTop();
    // alert('ho')
},{deep:true});

// Función para realizar scroll al inicio de la página
const scrollToTop = () => {
    
        window.scrollTo({ top: 0, behavior: 'smooth' });
    
};



const containerClass = computed(() => {
    return {
        'layout-theme-light': layoutConfig.darkTheme.value === 'light',
        'layout-theme-dark': layoutConfig.darkTheme.value === 'dark',
        'layout-overlay': layoutConfig.menuMode.value === 'overlay',
        'layout-static': layoutConfig.menuMode.value === 'static',
        'layout-static-inactive': layoutState.staticMenuDesktopInactive.value && layoutConfig.menuMode.value === 'static',
        'layout-overlay-active': layoutState.overlayMenuActive.value,
        'layout-mobile-active': layoutState.staticMenuMobileActive.value,
        'p-ripple-disabled': layoutConfig.ripple.value === false
    };
});
const bindOutsideClickListener = () => {
    if (!outsideClickListener.value) {
        outsideClickListener.value = (event) => {
            if (isOutsideClicked(event)) {
                layoutState.overlayMenuActive.value = false;
                layoutState.staticMenuMobileActive.value = false;
                layoutState.menuHoverActive.value = false;
            }
        };
        document.addEventListener('click', outsideClickListener.value);
    }
};
const unbindOutsideClickListener = () => {
    if (outsideClickListener.value) {
        document.removeEventListener('click', outsideClickListener);
        outsideClickListener.value = null;
    }
};
const isOutsideClicked = (event) => {
    const sidebarEl = document.querySelector('.layout-sidebar');
    const topbarEl = document.querySelector('.layout-menu-button');

    return !(sidebarEl.isSameNode(event.target) || sidebarEl.contains(event.target) || topbarEl.isSameNode(event.target) || topbarEl.contains(event.target));
};
</script>

<template>
    <div class="layout-wrapper" :class="containerClass" style="">


       <div @mouseenter="store.MenuVisibleHover = false" style="width: 100%;position: fixed;top: 0 ;gap: 0rem;padding: 0; padding-right:.1rem; left:0; height: 2rem;  z-index: 997; background-color: white ; display: flex; align-items: center;justify-content:end;">

        
            <a href=""> <Button text style="color: red" class=" p-" icon="fa-brands fa-youtube  text-4xl">   </Button></a>
           
           <a  href="https://www.facebook.com/profile.php?id=61576762012590"> <Button  style="color: blue;" text  icon="fa-brands fa-facebook text-2xl">   </Button></a>
           <a  href="https://www.instagram.com/cremosos_mateo/"><Button  style="color:magenta;" text  icon="fa-brands fa-instagram  text-3xl">   </Button></a>
          

       </div>



        <app-topbar></app-topbar>

        <div class="layout-sidebar">
            <app-sidebar></app-sidebar>
        </div>
        <div class="layout-main-container p-0 px-2">
            <div class="layout-main " style="position: relative;content:paint;">
  
                                
                            
            <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
                <component :is="Component" class="p-0" />
            </transition>
            </router-view>
                


            </div>
            <!-- <app-footer></app-footer> -->
        </div>
          <!-- <app-config></app-config> -->
        <div class="layout-mask"></div>
    </div>
    <Toast />
</template>

<style lang="scss" scoped>




.fade-enter-active, .fade-leave-active {
    transition: opacity 0.2s ease, transform 0.3s ease;
}


.fade-enter, .fade-leave-to { /* .fade-leave-active en versiones anteriores de Vue */
    opacity: 0;
    transform: translateY(5rem);
}


</style>
