<template>


    <div class="continer  mx-auto px-2 pb-8" style="max-width: 1200px; margin-top: 8rem;">



        <ProductImagesDialog></ProductImagesDialog>


        <h1 :style="`color: #7a0079;`" class="text-center mt-6 text-4xl md:text-7xl" >
            <b >
               🍓Helados Cremosos🥥
            </b>
        
        </h1>

        <div style="display: flex;width: 100%;justify-content: center;gap: 1rem;" class="my-4" >


<!-- Unidad -->
<RouterLink to="/helados" custom v-slot="{ navigate, isActive }" >
  <Button
    label="Unidad"
    :text="!isActive" 
    @click="navigate"
    style="border: none;" :style="isActive? 'color:white; background-color: rgb(122, 0, 121);' : 'color:rgb(122, 0, 121); background-color: transparent;'"
  />
</RouterLink>

<!-- Por mayor -->
<RouterLink to="/helados-mayor" custom v-slot="{ navigate, isActive }">
  <Button
    label="Por mayor"
    :text="!isActive"
    @click="navigate"
      style="border: none;" :style="isActive? 'color:white; background-color: rgb(122, 0, 121);' : 'color:rgb(122, 0, 121); background-color: transparent;'"

  />
</RouterLink>

        </div>


        <div class="grid p-0">

            <div class="col-12 md:col-6 lg:col-4 " v-for="product in products" style="">
                <TarjetaProducto :product="product" >

                </TarjetaProducto>

            </div>
           
        </div>

    </div>
</template>


<script setup>
import { ref } from 'vue';
import TarjetaProducto from '../../components/TarjetaProducto.vue';
import ProductImagesDialog from './ProductImagesDialog.vue';
import { useRoute } from 'vue-router';


const route = useRoute()

const visible = ref(true    )


import {products} from '../../service/cuartosFrios'
import { RouterLink } from 'vue-router';


</script>

