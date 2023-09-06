<!-- eslint-disable vue/valid-template-root -->
<template>
    <div>
        <DatePicker v-model="date" @change="datePick" type="date" placeholder="날짜 선택하기"></DatePicker>
    </div>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
export default {
    data() {
        return {
            date :'',
            month : ['','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
        };
    },
    methods:{
        datePick(){
            this.dateFormat(this.date);
            console.log(this.date);
            this.$emit('datePick',this.date);
        },
        dateFormat(pickDay){
            var year = pickDay.getFullYear();
            var month = ('0' + (pickDay.getMonth() + 1)).slice(-2);
            var day = ('0' + pickDay.getDate()).slice(-2);

            this.date = year + '-' + month  + '-' + day;
        }
    },
    created(){
        var today = new Date();
        console.log(today);
        this.dateFormat(today);
        // var year = today.getFullYear();
        // var month = ('0' + (today.getMonth() + 1)).slice(-2);
        // var day = ('0' + today.getDate()).slice(-2);

        // var dateString = year + '-' + month  + '-' + day;
        // this.date = dateString;
    },
    components: { DatePicker },
}
</script>

<style>
    .calender{
        margin: auto;
        height: 500px;
    }
</style>