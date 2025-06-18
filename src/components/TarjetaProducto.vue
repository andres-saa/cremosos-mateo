<template>

  <div class=" px-0 pt-0 container" style="border-radius: 1rem;position: relative;padding-bottom: 9rem;">

            <routerLink :to="`/producto/${props.product.name}`">

    <div>
      <div  style="border-radius: .3rem; overflow: hidden; position:relative;">
        <!-- imagen principal -->
        <img class="imagen"
             :src="props.product?.images?.[0]"
             alt=""
             style="width: 100%; cursor: pointer;aspect-ratio: 1 / 1; object-fit: cover;"
             @click="setImageToShow(props.product, props.product?.images[0])" />

        <!-- miniaturas -->
        <div class="p-2 miniaturas md:justify-content-center"
             style="display: flex;gap: 1rem; position: absolute;background-color: rgba(255, 255, 255, .9) .2);bottom: 0;left: 0;width: 100%;">
          
          <!-- imágenes -->
          <img v-for="i in props.product.images?.slice(0,)"
               :key="i"
               @click="setImageToShow(props.product, i)"
               :class="i == props.product.images?.[0] ? 'selected' : ''"
               class="imagen"
               :src="i"
               alt=""
               style="width: 3rem;cursor: pointer;border-radius: .5rem;background-color: white;" />

          <!-- videos (miniaturas de YouTube) -->
          <img v-for="v in props.product.videos ?? []"
               :key="v"
               @click="setImageToShow(props.product, v)"
               class="imagen"
               :src="getYoutubeThumbnail(v)"
               alt="Miniatura de video"
               style="width: 3rem;cursor: pointer;border-radius: .5rem;background-color: white;" />

        </div>
      </div>

      <div class="px-4 pt-3">
      <h4 class="text-3xl md:text-4xl" :style="`color: ${product.text_color}`">
        <b>{{ props.product.name }}</b>
      </h4>

      <h6 style="font-weight: 400;">{{ props.product.descipcion }}</h6>
      </div>

    </div>

         </routerLink>
    <div style="position: absolute;bottom: 0;width: 100%;left: 0;padding: 1.5rem;">
      <h4 class="text-right text-3xl md:text-4xl" style="color: #7a0079;" :style="`color: ${product.text_color}`">
        <b>{{ formatoPesosColombianos(props.product.price) }}</b>
      </h4>


      <div style="display: flex;gap: 1rem;width: 100%;justify-content: end;">

          <routerLink :to="`/producto/${props.product.name}`">
  <Button icon="pi pi-info-circle" severity="info" class="my-2"
                label="Mas informacion"
                style="width: 100%;background-color: #7a0079;border-radius: .5rem; font-weight: bold;border: none;padding: .8rem; max-width: max-content;">
        </Button>
        </routerLink>
                
        <a :href="props.product.videos?.[0]">   
          
          <Button icon="pi pi-youtube" severity="info" class="my-2" label="Antojate"

                style="width: 100%;background-color: #c4302b;font-weight: bold; border-radius: .5rem; font-weight: bold;border: none;padding: .8rem; max-width: max-content;">
        </Button>
      
      </a>
              
      </div>
      
   
    </div>
  </div>


</template>

<script setup>
import { ref, computed } from 'vue'
import { useProductStore } from '../store/product'
import { formatoPesosColombianos } from '../service/formatoPesos'

/* helpers para YouTube */
const YT_ID_RE =
  /(?:youtube\.com\/(?:watch\?.*v=|embed\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/

/* 1️⃣  Evitamos optional-chaining + ?.[]  */
const getYoutubeId = url => {
  const match = url ? url.match(YT_ID_RE) : null
  return match ? match[1] : null
}

const getYoutubeThumbnail = url => {
  const id = getYoutubeId(url)
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : ''
}
const productStore = useProductStore()

const setImageToShow = (product, image) => {
  productStore.currentProduct = product
  productStore.currentProductImage = image
  productStore.visible.dialogProductImges = true
}

/* props */
const props = defineProps({
  product: { type: Object, required: true }
})

/* WhatsApp */
const currntText = ref(`Hola,vi en su pagina web el producto *${props.product.name}*  me gustaria obtener mas informacion`)
const whatsappUrl = computed(() => {
  const baseUrl = 'https://api.whatsapp.com/send'
  const urlParams = new URLSearchParams({ phone: '573104080918', text: currntText.value })
  return `${baseUrl}?${urlParams.toString()}`
})
</script>

<!-- estilos sin cambios -->
<style scoped>
/* … todo tu <style> original … */
</style>


<style scoped>

img{
    transition: transform ease .3s;
    border-radius: .3rem;
}

.miniaturas{
    transform: translateY(4rem);
    transition: all .3s ease;
    /* backdrop-filter: blur(5px); */
    opacity: 0;

}

.container{
    transition: all ease .3s;
    background-color: white;
    /* box-shadow: 0 1px 1rem rgba(255, 0, 242, 0.178); */
    width: 100%;
    height: 100%;

}

.container:hover {
    /* box-shadow: 0 1px 1rem rgba(255, 0, 242, 0.514); */
    transform:  translateY( -.5rem);
    /* outline: 5px solid #10b981; */

}


.imagen{

    transition: transform ease .3s;
    border-radius: 0rem;overflow: hidden   ;

}

.container:hover > div > div > .imagen {
    

    /* transform:  scale(1.1) ; */
    /* box-shadow: 0 1px 1rem rgba(0, 0, 0, 0.246); */
    /* filter: brightness(1.1); */
    
}

.container:hover  .miniaturas{
    transform: translateY(0rem);
    opacity: 1;
    z-index: 100;
   
}


.miniaturas > img:hover{
    transform: rotate(1deg) translateY(-.2rem);

    filter: brightness(1.5);
    outline: 2px solid rgb(122, 0, 121);
}

.selected{
    /* transform:  translateY(-.2rem); */
    filter: brightness(1.5);
    outline: 2px solid rgb(122, 0, 121);

}

</style>