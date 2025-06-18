<template>


    <div class="continer  mx-auto px-2 pb-8" style="max-width: 1200px; margin-top: 8rem;">



        <ProductImagesDialog></ProductImagesDialog>


        <h1 :style="`color: #7a0079;`" class="text-center mt-6 text-6xl md:text-7xl" >
            <b >
               🍓Helados Cremosos🥥
            </b>
        
        </h1>

        <div style="display: flex;width: 100%;justify-content: center;gap: 1rem;" class="my-4">


        <RouterLink to='cuartos-frios'>

   <Button label="Unidad">

        </Button>

        </RouterLink >


        <RouterLink to='paneles'>

          <Button label="Por mayor">
            
        </Button>

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


const visible = ref(true    )


import {products} from '../../service/cuartosFrios'
import { RouterLink } from 'vue-router';


</script>

