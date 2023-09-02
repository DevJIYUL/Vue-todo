<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <TodoHeader></TodoHeader>
        <TodoInput v-on:addTodo="addTodo"></TodoInput>
        <TodoList v-bind:propsdata="todoItems" @removeTodo="removeTodo"></TodoList>
        <TodoFooter v-on:removeAll="clearAll"></TodoFooter>
    </div>
</template>

<script>
import TodoFooter from './todo/TodoFooter.vue'
import TodoHeader from './todo/TodoHeader.vue'
import TodoInput from './todo/TodoInput.vue'
import TodoList from './todo/TodoList.vue'

export default {
    name : "Sweet-home",
    props: {
        userId: {
            type: Number,
            default: 0,
        },
        email: {
            type: String,
            default: "",
        },
        stric : {
            type : Number,
            default : 0,
        }
    },
    data() {
        return {
        user : {
            userId : '',
            email : '',
            stric : ''
        },
        todoItems:[]
        }
    },
    methods: {
        setAuth(){
            console.log("setauth");
            this.user.userId = this.$route.params.userId;
            this.user.email = this.$route.params.email;
            this.user.stric = this.$route.params.stric;
        },
        addTodo(todoItem){
            this.$http.post(`http://localhost:8000/todo`,{
                user :{
                    userId : this.user.userId
            },
            text : todoItem
        })
        .then(res =>{
            console.log(res);
            this.todoItems.push(res.data);
        })
        },
        removeTodo(todoItem,index){
            this.todoItems.splice(index,1);
            console.log(todoItem);
            this.$http.delete(`http://localhost:8000/todo/${todoItem.todoId}`)
            .then(res=>{
                console.log(res);
            }).catch(err=>{
                console.log(err);
            })
        },
        clearAll(){
            this.todoItems = []
        }
    },
    created() {
        // console.log("hi"+this.props.userId);
        this.setAuth();
        console.log(this.$route.params);
        this.$http.get(`http://localhost:8000/todo/${this.user.userId}`)
        .then((result)=>{
        console.log(result.data);
        if(result.data.length>0){
            for (var i = 0; i < result.data.length; i++) {
            this.todoItems.push(result.data[i]);
            
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
