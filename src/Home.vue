<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="app">
        <h1>로그인</h1>
        <Login v-on:logIn="login"></Login>
        <!-- <LogInBtn></LogInBtn> -->
    </div>
</template>

<script>
// import LogInBtn from './components/home/LoginBtn.vue'
import Login from './components/home/Login.vue'

export default {
    data() {
        return {

        }
    },
    methods: {
        login(id,password){
            console.log("홈에 도착");
            console.log(id+" "+password);
            this.$http.post(`http://localhost:8000/login`,{
                userId : id,
                password : password
            })
            .then(res =>{
                console.log(res);
                this.$router.push('todo');
            })
        }
    },
    created() {
        
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
        // 'LogInBtn' : LogInBtn,
        'Login' : Login,
    }
}
</script>

<style>
    body{
        text-align: center;
        background-color: #e1e4f9;
    }
    .app {
        margin: auto;
        width: 700px;
        background-color: white;
        border-style: none;
        font-size: 0.9rem;
        line-height: 50px;
        border-radius: 5px;
    }
    /* input{
        border-style: groove;
        width: 200px;
    }
    button{
        border-style: groove;
    }
    .shadow{
        box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
    } */
</style>
