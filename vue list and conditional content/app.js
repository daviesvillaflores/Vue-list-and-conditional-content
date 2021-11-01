const app = Vue. createApp({
 data(){
  return {
   task: [],
   enteredTask:'',
    hideShow:true,
    
  };
 },
 methods:{
  addtask(){
  this.task.push(this.enteredTask);
  }
 }
});
app.mount ('#list');