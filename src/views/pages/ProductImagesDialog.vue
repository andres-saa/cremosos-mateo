<template>
  <div class="dialog-container px-4"  v-if="false" style="position: fixed;width: 100vw; height: 100vh; left: 0;top: 0;z-index: 20;display: flex;align-items: center;padding-top: 5rem; justify-content: center;gap: 1rem; align-items: center; background-color:rgba(0,0,0,0.8); transition: all .3s ease;">

    <div class="p-0 dialog" style="display: flex;width: 100%;flex-direction: column;align-items: center; max-height: min-content; justify-content: center;  max-width: 900px;">
      <div class="container-image p-0" style="position: relative;border-radius: .5rem;">
        
        <!-- imagen -->
        <img v-if="!isVideo(productStore.currentProductImage)"
             class="image m-0 p-0"
             :src="productStore.currentProductImage"
             style="width: 100%;max-height: 60vh; border-radius: .5rem; ; object-fit: cover;aspect-ratio: 1 / 1;"
             alt="">
        
        <!-- video -->
        <iframe v-else
                class="image m-0 p-0"
                :src="getEmbedUrl(productStore.currentProductImage)"
                title="video"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                style="width: 100% ; max-width: 50rem; height: 100vh; max-height: 60vh; border-radius: .5rem; ; object-fit: cover;aspect-ratio: 1 / 1;"></iframe>
        
        <Button class="close" style="position: absolute;right: -1rem; top:-1rem" @click="productStore.visible.dialogProductImges  = false" rounded severity="danger" icon="pi pi-times"></Button>
      </div>

      <div style="display: flex;gap: 1rem;width: 100%;overflow-x: auto;height: max-content;" class="py-4 miniaturas px-1">
        <!-- miniaturas imagen -->
        <img class="miniatura"
             :class="productStore.currentProductImage == i ? 'selected' : ''"
             style="height: 100%;width: 5rem; aspect-ratio: 1 / 1; object-fit: cover;border-radius: .3rem;"
             v-for="i in productStore.currentProduct?.images"
             @click="setImageToShow(i)"
             :src="i"
             alt="">
        
        <!-- miniaturas video -->
        <img v-for="v in productStore.currentProduct?.videos"
             :key="v"
             :class="productStore.currentProductImage == v ? 'selected' : ''"
             class="miniatura"
             :src="getYoutubeThumbnail(v)"
             alt="Miniatura de video"
             style="height: 100%; width: 5rem; aspect-ratio: 1 / 1; object-fit: cover; border-radius: .3rem;"
             @click="setImageToShow(v)" />



                  <a :href="whatsappUrl">    <Button icon="pi pi-plus" class="my-2"  style="aspect-ratio: 1 / 1;height: 5rem;width: 5rem; padding: .5rem;">

        </Button> </a>
      </div>
    </div>

  </div>
</template>

<script setup>
import { watch } from 'vue'
import { useProductStore } from '../../store/product'

const productStore = useProductStore()

/* ──────────── helpers ──────────── */
const YT_ID_RE = /(?:youtube\.com\/(?:watch\?.*v=|embed\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/

const getYoutubeId = url => {
  const m = url?.match(YT_ID_RE)
  return m ? m[1] : null
}

const isVideo = url => !!getYoutubeId(url)

const getEmbedUrl = url => {
  const id = getYoutubeId(url)
  return id ? `https://www.youtube.com/embed/${id}` : ''
}

const getYoutubeThumbnail = url => {
  const id = getYoutubeId(url)
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : ''
}

/* ──────────── acciones ──────────── */
const setImageToShow = media => {
  productStore.currentProductImage = media
}

/* ───────── animación intacta ───────── */
watch(
  () => productStore.currentProductImage,
  () => {
    const preview = document.querySelector('.image')
    const close   = document.querySelector('.close')

    if (!preview) return

    const keyframes = [
      { transform: 'translateY(-5rem)', opacity: 0 },
      { transform: 'translateY(0)', opacity: 1 }
    ]
    const options = { duration: 200, easing: 'ease-out' }

    preview.animate(keyframes, options)
    close?.animate(keyframes, options)
  },
  { deep: true }
)
</script>


<style scoped>


iframe{
    border-radius: .5rem;
}

.container-image{
background-color: rgb(255, 255, 255);
       box-shadow: 0 .2rem .8rem  v-bind(color);

    
}
.miniatura{

filter: brightness(.5);
transition:  transform .3s ease    ;
background-color: white;

}

.miniatura:hover{

    transform: rotate(3deg) translateY(-1rem);
    filter: brightness(1);
    outline: 3px solid rgb(122, 0, 121);;
    z-index: 200;

}


.selected{

    /* transform: rotate(3deg) translateY(-1rem); */
    filter: brightness(1);
    outline: 3px solid rgb(122, 0, 121);

}


@keyframes dialog {

    0%{
        transform: translateY(10rem);
        opacity: 0;
    }
    100%{
        transform: translateY(0);
        opacity: 1;
    }
    
}

@keyframes dialog-container {

0%{

    opacity: 0;
}
100%{
    opacity: 1;

}

}

.dialog{

    animation: dialog .2s ;

}

.dialog-container{
    animation:  dialog-container .2s;
}

.fade-in{
    animation: dialog .2s ;
}


.miniaturas{
    justify-content: center;
}

@media (width < 765px ) {

    .miniaturas{
        justify-content: start;
    }
}

</style>