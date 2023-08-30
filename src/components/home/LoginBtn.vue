<template>
    <div class="loginContainer" v-on:click="logIn">
        <!-- <button v-on:click="addTodo" class="addBtn">추가</button> -->
        <span>
            <!-- <i class="addBtn fas fa-plus" aria-hidden="true"></i> -->
            <p>로그인</p>
        </span>
    </div>
</template>
<script>
export default {
    methods : {
        logIn(){
            console.log("로그인 가즈아");
        }
    }
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
    .addBtn{
        border: none;
        background: linear-gradient(to right,#fb64b2,#fb6384);
        color: white;
        vertical-align: middle;
    }
</style>