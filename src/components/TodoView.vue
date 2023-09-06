<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <TodoHeader></TodoHeader>
        <CalenderView v-on:datePick="datePick"></CalenderView>
        <TodoInput v-on:addTodo="addTodo"></TodoInput>
        <TodoList v-bind:propsdata="todoItems" @removeTodo="removeTodo"></TodoList>
        <br>
        <TodoFooter v-on:removeAll="clearAll"></TodoFooter>
    </div>
</template>

<script>
import TodoFooter from './todo/TodoFooter.vue'
import TodoHeader from './todo/TodoHeader.vue'
import TodoInput from './todo/TodoInput.vue'
import TodoList from './todo/TodoList.vue'
import CalenderView from './todo/CalenderView.vue'

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
        date : '',
        toDay : '',
        user : {
            userId : '',
            email : '',
            stric : ''
        },
        todoItems:[]
        }
    },
    methods: {
        datePick(date){
            this.clearAll();
            this.showList(this.user.userId,date);
        },
        setAuth(){
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
                // this.todoItems.push(res.data);
                this.clearAll();
                this.showList(this.user.userId,this.toDay)    
            })
            
        },
        removeTodo(todoItem,index){
            this.todoItems.splice(index,1);
            this.$http.delete(`http://localhost:8000/todo/${todoItem.todoId}`)
            .then(()=>{
            }).catch(()=>{
            })
        },
        clearAll(){
            this.todoItems = []
        },
        showList(userId,pickDay){
            this.$http.get(`http://localhost:8000/todo/${userId}/${pickDay}`)
            .then((result)=>{
            if(result.data.length>0){
                for (var i = 0; i < result.data.length; i++) {
                this.todoItems.push(result.data[i]);
                
                }
        }
        })
        }
    },
    created() {
        // console.log("hi"+this.props.userId);
        this.setAuth();
        var today = new Date();

        var year = today.getFullYear();
        var month = ('0' + (today.getMonth() + 1)).slice(-2);
        var day = ('0' + today.getDate()).slice(-2);

        this.toDay = year + '-' + month  + '-' + day;
        this.showList(this.user.userId,this.toDay);
        
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
        'CalenderView' : CalenderView,
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
