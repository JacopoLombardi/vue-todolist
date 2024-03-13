
const {createApp} = Vue;


createApp({

   // variabili
   data(){
      return{
         toDoArray:[
            {
               text: '1° task',
               done: false
            },
            {
               text: '2° task',
               done: false
            },
            {
               text: '3° task',
               done: false
            },
            {
               text: '4° task',
               done: false
            },
         ],


      };
   },
   


   // funzioni
   methods:{

      canceled(indice){
        this.toDoArray.splice(indice, 1);
      },


   },



   monted(){


   }

}).mount('#app');