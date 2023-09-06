<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div id="app">
        <!-- <router-link :to="{name : `TodoView`}">투두 서비슬 이동</router-link> -->
        <Login v-show="!logined" v-on:logIn="login"></Login>
        <modal v-if="showModal" @close="showModal = false">
            <h3 slot="header">Warn</h3>
            <span slot="footer" @click="showModal = false">
                정보가 틀립니다.
                <i class="closeModalBtn fas fa-times" aria-hidden="true"></i>
            </span>
        </modal>
        <router-view v-show="logined"></router-view>
    </div>
</template>

<script>
import Login from './components/home/Login.vue';
import Modal from './components/common/Modal.vue'


export default {
    name :"app",
    data() {
        return {
            showModal : false,
            logined : false,
            user : {
                userId : '',
                email : '',
                stric : ''
            }
        }
    },
    methods: {
        login(id,password){
            this.$http.post(`http://localhost:8000/login`,{
                userId : id,
                password : password
            })
            .then(res =>{
                if(res.status == 200){
                    this.user.userId = res.data.userId;
                    this.user.email = res.data.email;
                    this.user.stric = res.data.stric;
                    this.changePage()
                }else{
                    this.showModal = !this.showModal;
                }
            })
        },
        changePage(){
            this.logined = !this.logined;
            this.$router.push({
                // path:"/todo",
                name : "TodoView",
                params : {
                    userId : this.user.userId,
                    email : this.user.email,
                    stric : this.user.stric
                }
            });
            // .catch(err=>{console.log(err)});
        }
    },
    created() {
        this.logined = false;

        this.$router.push({path:"/"});
    },
    metaInfo :{
        title : 'TodoList',
        meta :[
        {charset : 'utf-8'},
        {name : 'viewport',content :'width=device-width, initial-scale=1.0'}
        ]
    },
    components : {
        Modal : Modal,
        Login : Login,
    }
}
</script>

<style>
    body{
        text-align: center;
        background-color: #e1e4f9;
    }
    #app {
      
        margin: auto;
        width: 700px;
        background-color: #e1e4f9;
        border-style: none;
        font-size: 0.9rem;
        line-height: 50px;
        border-radius: 5px;
    }
</style>