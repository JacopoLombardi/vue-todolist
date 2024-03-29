
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
            {
               text: '5° task',
               done: false
            },
         ],

         newTask: '',

         messageError: '',
         messageEmptyList: '',
      };
   },



   // funzioni
   methods:{

      // aggiungo una nuova task
      addTask(){
         this.messageError = '';
         
         if(this.newTask.length > 3){
         this.toDoArray.unshift({
            text: this.newTask,
            done: false
         });
         }else{
            this.messageError = 'Errore!! Task troppo corta';
         };
         this.newTask = '';
      },



      // cacello la task
      canceled(indice){
         if(this.toDoArray[indice].done === true)
            this.toDoArray.splice(indice, 1);
      },



      // se la lista è vuota stampa un messaggio
      toDoListEmpty(){
         if(this.toDoArray.length === 0){
            return messageEmptyList = 'Hai terminato tutti i compiti';
         };
      }
   },



   monted(){
   }


}).mount('#app');