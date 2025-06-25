<template>
  
<div>
  <div class="grid mx-auto pt-3 px-3" style="margin-top:6rem;max-width: 1024px;border-radius: 1rem;background-color: #ffffff90;"> 
    <!-- nombre ─ móvil -->

    
    <div class="col-12 md:col-6 px-2 md:px-5 title-movile">
      <h2><b>{{ store.currentProduct.name }}</b></h2>
    </div>

    <!-- zona visual principal -->
    <div class="col-12 md:col-6 px-2 md:px-2">
      <!-- imagen -->
      <img v-if="!isVideo(store.currentProductImage)"
           class="image"
           :src="store.currentProductImage"
           style="width: 100%;aspect-ratio: 4 / 4;object-fit: contain;border-radius:.5rem;border-radius:1rem;" alt="">

      <!-- video (YouTube) -->
      <iframe v-else
              class="image"
              :src="getEmbedUrl(store.currentProductImage)"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              style="width: 100%;aspect-ratio: 4 / 4;object-fit: contain;border-radius:.5rem;"></iframe>

      <!-- miniaturas -->
      <div style="display: flex;gap: 1rem;width: 100%;overflow-x: auto;height: max-content;"
           class="py-4 miniaturas px-1">
        <!-- imágenes -->
        <img v-for="i in store.currentProduct?.images"
             :key="i"
             class="miniatura"
             :class="store.currentProductImage === i ? 'selected' : ''"
             :src="i"
             @click="setImageToShow(i)"
             style="height: 100%;width: 5rem; aspect-ratio: 4 / 4; object-fit: cover;border-radius: .3rem;" alt="">

        <!-- videos (miniaturas de YouTube) -->
        <img v-for="v in store.currentProduct?.videos"
             :key="v"
             class="miniatura"
             :class="store.currentProductImage === v ? 'selected' : ''"
             :src="getYoutubeThumbnail(v)"
             @click="setImageToShow(v)"
             style="height: 100%;width: 5rem; aspect-ratio: 4 / 4; object-fit: cover;border-radius: .3rem;" alt="Miniatura de video">
      </div>
    </div> 

    <!-- resto de tu layout (datos del producto) -->
    <div class="col-12 md:col-6 px-2 md:px-5 ">
      <h2>
        <b class="title-pc">{{ store.currentProduct?.name }}</b>
        <!-- … todo tu bloque de <h5> intacto … -->
      </h2>
         <h4>
       {{ store.currentProduct.descipcion }}
      </h4>



      

       <h2>
        <b class="title-pc">Precio</b>
        <!-- … todo tu bloque de <h5> intacto … -->
      </h2>
         <h4>
          <b>
       {{ formatoPesosColombianos(store.currentProduct.price ) }}

          </b>
      </h4>


          
        <a :href="whatsappUrl">    <Button icon="pi pi-whatsapp" class="my-2" label="Preguntar Por el producto" style="width: 100%;padding: .5rem; max-width: max-content;">

        </Button> </a>

    </div>


  </div>

   

<RouterView />
</div>
      
  
</template>

<script setup>
import { ref, watch, computed, onBeforeMount } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import { useProductStore } from '../../store/product'
import { products } from '../../service/cuartosFrios'
import { formatoPesosColombianos } from '../../service/formatoPesos'
import Helados from './Helados.vue'

const route = useRoute()
const store = useProductStore()

onBeforeMount(() => {
  store.currentProduct = products.find(p => p.name == route.params.product_name)
  store.currentProductImage = store.currentProduct.images?.[0] ??
                              store.currentProduct.videos?.[0] ?? ''
})



const productUrl = encodeURI(`https://cremososmateo.com${route.fullPath}/`)

const currntText = ref(`Hola,vi en su pagina web el producto  ${productUrl}  *${route.params.product_name}*  por un precio de  *$${store.currentProduct.price }*  me gustaria obtener mas informacion`)



const whatsappUrl = computed(() => {
  const baseUrl = 'https://api.whatsapp.com/send';
  const urlParams = new URLSearchParams({
    phone: '573173917996',
    text: currntText.value
  });
  return `${baseUrl}?${urlParams.toString()}`;
});






const setImageToShow = media => { store.currentProductImage = media }

/* ------------- helpers (solo lógica, no cambia estilos) ------------- */
const YT_ID_RE = /(?:youtube\.com\/(?:watch\?.*v=|embed\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/
const getYoutubeId = url => url?.match(YT_ID_RE)?.[1] ?? null
const isVideo = url => !!getYoutubeId(url)
const getEmbedUrl = url => {
  const id = getYoutubeId(url)
  return id ? `https://www.youtube.com/embed/${id}` : ''
}
const getYoutubeThumbnail = url => {
  const id = getYoutubeId(url)
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : ''
}

/* animación original */
watch(
  () => store.currentProductImage,
  () => {
    const image = document.querySelector('.image')
    if (!image) return
    image.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 200, easing: 'ease-out' })
  }
)
</script>

<!-- tu <style scoped> permanece idéntico -->


<style scoped>


.container-image{
    background-image: url('/images/background.png');
    background-position: 0 0; /* Posiciona el fondo en la esquina superior izquierda */
    background-repeat: repeat; /* Repite la imagen */
    background-size: 10%; /* Ajusta el tamaño de fondo para incluir el gap */
    
}
.miniatura{

filter: brightness(.5);
transition:  transform .3s ease    ;
object-fit: cover;

}

.miniatura:hover{

 
    filter: brightness(1);
    outline: 3px solid #10b981;
    z-index: 200;

}


.selected{

    /* transform: rotate(3deg) translateY(-1rem); */
    filter: brightness(1);
    outline: 3px solid #10b981;

}

@media (width < 765px) {
    
    .title-pc{
        display: none
    }
}


@media (width > 765px) {
    
    .title-movile{
        display: none
    }
}


</style>