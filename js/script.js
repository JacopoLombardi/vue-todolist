
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

         newObject:{
            text: '',
            done: false
         },

         newTask: '',

      };
   },



   // funzioni
   methods:{

      addTask(newTask){
         this.newObject.text = newTask;
         this.toDoArray.unshift(this.newObject)
         
      },


      canceled(indice){
        this.toDoArray.splice(indice, 1);
      },


   },



   monted(){


   }

}).mount('#app');