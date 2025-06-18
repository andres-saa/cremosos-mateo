<template>


    <div class="continer shadow-1 mx-auto  md:py-6 d-none " style="max-width: 1200px;margin-top: 5rem; background-color: white;">





        <h1 class="text-center  py-6">
            <b>
                NOSOTROS
            </b>

        </h1>


        <div class=" md:px-6 ">

            <div class="col-12 pt-2" v-for="section in sections" :id="section.id">


                <div class="grid" v-if="section.hor == 'img-der'" style="align-items: center;">
                    <div class="col-12 md:col-6">
                        <h3>
                            <b>
                                {{ section.name }}
                            </b>

                        </h3>

                        <h6 style="text-align: justify;" v-html="section.text">
 
                        </h6>
                    </div>

                    <div class="col-12 md:col-6">
                        <iframe width="100%" height="315" :src="section.videoLink" title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>



                <div class="grid my-2 hiden " v-else="section.hor == 'img-der'" style="align-items: center;">

                    <div class="col-12 md:col-6">
                        <iframe width="100%" height="315" :src="section.videoLink" title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>


                    <div class="col-12 md:col-6">
                        <h3>
                            <b>
                                {{ section.name }}
                            </b>

                        </h3>
                        <h6 style="text-align: justify;" v-html="section.text">
 
</h6>
                    </div>

                </div>


                <div class="grid replace" v-if="section.hor == 'img-izq'">
                    <div class="col-12 md:col-6">
                        <h3>
                            <b>
                                {{ section.name }}
                            </b>

                        </h3>

                        <h6 style="text-align: justify;" v-html="section.text">
 
</h6>
                    </div>

                    <div class="col-12 md:col-6">
                        <iframe width="100%" height="315" :src="section.videoLink" title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>













            </div>

















        </div>
    </div>
</template>


<script setup>
import { ref } from 'vue';



const sections = [

    {
        name: 'QUIENES SOMOS?',
        img: 'https://academia.crandi.com/wp-content/uploads/2020/07/Mision2-1024x661.jpg',
        text: 'ING MASTER es símbolo de perseverancia una empresa caleña que lleva en el mercado más de 15 años de experiencia en refrigeración; fabricando de cuartos fríos y venta de panel con un alto equipo especializado en estos  servicios.',
        hor: 'img-izq',
        videoLink: 'https://www.youtube.com/embed/TqRjQswjWCs?si=hvOXtWdd28_hfxfE',
        id: 'historia'
    },
    {
        name: 'Mision',
        img: 'https://academia.crandi.com/wp-content/uploads/2020/07/Mision2-1024x661.jpg',
        text: 'Brindamos la mejor tecnología en el campo de la refrigeración, permitiéndonos así, ser líderes a nivel nacional y ofrecer la mejor calidad y el mejor precio.',
        hor: 'img-der',
        videoLink: 'https://www.youtube.com/embed/TqRjQswjWCs?si=hvOXtWdd28_hfxfE',
        id: 'mision'
    },



    {
        name: 'Vision',
        img: 'https://academia.crandi.com/wp-content/uploads/2020/07/Mision2-1024x661.jpg',
        text: 'Posicionarnos como líderes a nivel nacional en el mercado, trabajando siempre de la mano con los mejores proveedores e impulsar la sostenibilidad con nuestro producto y servicio.',
        hor: 'img-izq',
        videoLink: 'https://www.youtube.com/embed/TqRjQswjWCs?si=hvOXtWdd28_hfxfE',
        id: 'vision'
    },

    {
        name: 'Nuestros valores',
        img: 'https://academia.crandi.com/wp-content/uploads/2020/07/Mision2-1024x661.jpg',
        text: `<div class="valor">
                <strong>Respeto:</strong>
                <p>En ING MASTER, valoramos el respeto al escuchar y apreciar la diversidad de opiniones, fomentando relaciones sólidas con clientes, proveedores y colaboradores.</p>
            </div>

            <br>
            <div class="valor">
                <strong>Responsabilidad:</strong>
                <p>Nos comprometemos a cumplir con nuestras obligaciones y a entregar proyectos con precisión y en el tiempo acordado, garantizando calidad y profesionalismo.</p>
            </div>

            <br> 

            <div class="valor">
                <strong>Calidad:</strong>   
                <p>Ofrecemos productos y servicios de alta calidad en refrigeración industrial, con controles rigurosos y un enfoque en la excelencia e innovación.</p>
            </div>

            <br>

            <div class="valor">
                <strong>Honestidad:</strong>
                <p>Operamos con transparencia y claridad, construyendo confianza mediante prácticas justas e integridad en todas nuestras interacciones.</p>
            </div>

            <br>
            <div class="valor">
                <strong>Pasión:</strong>
                <p>Nuestra pasión por la refrigeración industrial nos impulsa a ofrecer un servicio excepcional y a buscar constantemente nuevas formas de mejorar.</p>
            </div>
` ,
        hor: 'img-der',

        videoLink: 'https://www.youtube.com/embed/TqRjQswjWCs?si=hvOXtWdd28_hfxfE',
        id: 'valores'
    }
]



</script>

<style>
iframe {
    border-radius: .5rem;
}


@media (width < 765px) {
    .hiden {

        display: none;
    }


}


@media (width > 765px) {
    .replace {

        display: none;
    }


}
</style>