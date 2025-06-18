import { defineStore } from "pinia";



export const useProductStore = defineStore('product', {
   
    persist: {
       
                key: 'product', // La clave bajo la cual se almacenará tu estado en el storage
                storage: localStorage,
                // paths:[
                //     'currentSite'
                //     ]

        
    },
    state: () => {


        return {
            currentProduct:{},
            MenuVisibleHover:false,
            currentProductImage:'',
            visible:{
                dialogProductImges:false
            }
          
            
        }
    },

    getters: {
        
    
        
    },

   

    actions: {

    },


})
    

