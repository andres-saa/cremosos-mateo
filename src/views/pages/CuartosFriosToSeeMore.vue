<template>


    <div class="continer  mx-auto px-2 py-8" style="">



        <ProductImagesDialog></ProductImagesDialog>


        <h1 class="text-center mb-6 text-2xl md:text-5xl" >
            <b >
                PRODUCTOS RELACIONADOS
            </b>
        
        </h1>


        <div class="grid">

            <div class="col-12 md:col-6 lg:col-4 " v-for="product in products" style="">
                <TarjetaProducto :product="product" style="width: 100%;" >

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


</script>

