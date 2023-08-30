<template>
  <div id="app">
    <!-- <LogIn></LogIn> -->
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodo="addTodo"></TodoInput>
    <TodoList v-bind:propsdata="todoItems" @removeTodo="removeTodo"></TodoList>
    <TodoFooter v-on:removeAll="clearAll"></TodoFooter>
  </div>
</template>

<script>
import TodoFooter from './components/todo/TodoFooter.vue'
import TodoHeader from './components/todo/TodoHeader.vue'
import TodoInput from './components/todo/TodoInput.vue'
import TodoList from './components/todo/TodoList.vue'
export default {
  data() {
    return {
      todoItems:[]
    }
  },
  methods: {
    addTodo(todoItem){
      this.todoItems.push(todoItem);
      this.$http.post(`http://localhost:8000/todo`,{
        user :{
          userId : 1
        },
        text : todoItem
      })
      .then(res =>{
        console.log(res);
      })
    },
    removeTodo(todoItem,index){
      // localStorage.removeItem(todoItem);
      this.todoItems.splice(index,1);
    },
    clearAll(){
      // localStorage.clear();
      this.todoItems = []
    }
  },
  created() {
    this.$http.get(`http://localhost:8000/todo/1`)
    .then((result)=>{
      console.log(result.data);
      if(result.data.length>0){
        for (var i = 0; i < result.data.length; i++) {
          this.todoItems.push(result.data[i].text);
          
        }
      }
    })
  },
  metaInfo :{
    title : 'TodoList',
    meta :[
      {charset : 'utf-8'},
      {name : 'viewport',content :'width=device-width, initial-scale=1.0'}
    ]
  },
  components : {
    // 'LogIn' : LogIn,
    'TodoHeader' : TodoHeader,
    'TodoInput' : TodoInput,
    'TodoList' : TodoList,
    'TodoFooter' : TodoFooter,
  }
}
</script>

<style>
  body{
    text-align: center;
    background-color: #e1e4f9;
  }
  input{
    border-style: groove;
    width: 200px;
  }
  button{
    border-style: groove;
  }
  .shadow{
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  }
</style>
