<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="inputBox">
        <span>
            <input class="idInput" type="text" v-model="id" placeholder="아이디를 입력하세요">
        </span>
        <span>
            <input class="passwordInput" type="text" v-model="password" placeholder="패스워드를 입력하세요">
        </span>
        <span class="loginContainer" v-on:click="logIn">
            <span>
                <!-- <i class="addBtn fas fa-plus" aria-hidden="true"></i> -->
                <p>로그인</p>
            </span>
        </span>
    </div>
</template>

<script>

export default {
    props:['propsdata'],
    data() {
        return {
            id : '',
            password : '',
            showModal : false
        }
    },
    methods: {
        logIn(){
            if(this.id !== "" && this.id !== ""){
                console.log("로그인 가즈아");
                this.$emit("logIn",this.id,this.password);
                
            }
        },
        clearId(){
            this.id = '';
        },
        clearPassword(){
            this.password = '';
        }
    },

}
</script>
<style scoped>
    .loginContainer {
        margin: auto;
        /* float: right; */
        background: linear-gradient(to right,#fb64b2,#fb6384);
        display: block;
        width: 10rem;
        height: 50px;
        border-radius: 5px 5px 5px 5px;
    }
    input:focus{
        outline: none;
        text-align: left;
    }
    .inputBox{
        background-color: white;
        height: 200px; 
        line-height: 50px;
        border-radius: 5px;
    }
    .idInput{
        /* border-style: solid; */
        width: 500px;
        font-size: 0.9rem;
        border-radius: 5px;
        line-height: 50px;
        /* border-width: 2px 2px 0px 2px; */
        border-bottom-width: 0px;
        border-color: gray;
    }
    .passwordInput{
        /* border-style: solid; */
        width: 500px;
        font-size: 0.9rem;
        border-radius: 5px;
        line-height: 50px;
    }
    /* .span{

    } */
    .closeModalBtn{
        border-style: dashed;
    }
</style>