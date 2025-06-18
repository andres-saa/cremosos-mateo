<script setup>
import { useProductStore } from '@/store/product'
const store = useProductStore()





</script>

<template>

    <div :style="`background-color: ${store.currentProduct.background_color || 'rgba(122, 0, 122, 0.103)'}`" >


        <img :src="store.currentProduct?.images?.[0]" alt="" style="position: fixed;width: 100vw;height: 100%;object-fit: cover;opacity: .3;filter: blur(4px);">
            <router-view />

    </div>

  



    <a href="https://wa.link/87obeg" class="float-wsp " style="position: fixed;"> 
        <Button style="width: min-content;height: min-content;" icon="fa-brands fa-whatsapp md:text-4xl  text-2xl p-0 m-0 " rounded class="whatsapp-btn p-2 shadow-3">

        </Button>
    </a>
</template>

<style scoped>


.float-wsp{
        right: 4rem;bottom: 4rem;
        
    }

@media (width < 600px) {

    .float-wsp{
        right: 2rem;bottom: 2rem;
    }
    
   
    
}

</style>
