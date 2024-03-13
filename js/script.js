
const {createApp} = Vue;


createApp({

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



   methods:{

      


   },



   monted(){


   }

}).mount('#app');