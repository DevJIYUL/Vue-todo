<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" placeholder="오늘 취뽀를 위해 해야할일" v-on:keyup.enter="addTodo" >
        <span class="addContainer" v-on:click="addTodo">
            <!-- <button v-on:click="addTodo" class="addBtn">추가</button> -->
            <i class="addBtn fas fa-plus" aria-hidden="true"></i>
        </span>
        <modal v-if="showModal" @close="showModal = false">
            <h3 slot="header">Warn</h3>
            <span slot="footer" @click="showModal = false">
                할 일을 입력하세요
                <i class="closeModalBtn fas fa-times" aria-hidden="true"></i>
            </span>
        </modal>
    </div>
</template>

<script>
import Modal from './common/Modal.vue'
export default {
    props:['propsdata'],
    data() {
        return {
            newTodoItem : '',
            showModal : false
        }
    },
    methods: {
        addTodo(){
            if(this.newTodoItem !== ""){
                var value = this.newTodoItem && this.newTodoItem.trim() ;
                this.$emit('addTodo',value);
                this.clearInput();
            }else{
                this.showModal = !this.showModal;
            }
        },
        clearInput(){
            this.newTodoItem = '';
        }
    },
    components:{
        Modal : Modal
    }
}
</script>
<style scoped>
    input:focus{
        outline: none;
    }
    .inputBox{
        background: white;
        height: 50px;
        line-height: 50px;
        border-radius: 5px;
    }
    .inputBox input{
        border-style: none;
        font-size: 0.9rem;
    }
    .addContainer {
        float: right;
        background: linear-gradient(to right,#6478fb,#8763fb);
        display: block;
        width: 5rem;
        height: 50px;
        border-radius: 0 5px 5px 0;
    }
    .addBtn{
        border: none;
        background: linear-gradient(to right,#6478fb,#8763fb);
        color: white;
        vertical-align: middle;
    }
</style>