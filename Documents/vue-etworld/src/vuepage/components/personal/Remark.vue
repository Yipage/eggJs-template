<template>
    <div class="bg">
        <remarksuccess v-if="isShow"></remarksuccess>
        <img class="img" src="../../../assets/img/ill_1.png" alt=""/>
        <p class="title">评分</p>
        <i class="xing liang"></i>
        <i class="xing liang"></i>
        <i class="xing liang"></i>
        <i class="xing liang"></i>
        <i class="xing"></i>
        <div style="clear: both"></div>
        <textarea class="minute" placeholder="快来给于你商品的评价吧！"></textarea>
        <p class="button" @click="onPing()">发布评价</p>
    </div>
</template>

<script>
    import {setTitle} from '../../../assets/js/setTittle'
    import remarksuccess from './RemarkSuccess.vue'

    export default {
        data() {
            return {
                isShow: false
            }
        },
        components: {
            remarksuccess
        },
        methods: {
            onPing() {
                this.isShow = true
            }
        },
        mounted() {
            setTitle("订单评价")
        }
    }
</script>

<style scoped>
    .bg {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ffffff;
    }

    .img {
        width: 1.79rem;
        height: 1.79rem;
        background: rgba(255, 255, 255, 1);
        border-radius: 0.10rem;
        border: 0.01rem solid rgba(233, 233, 233, 1);
        margin: 0.31rem 0.33rem 0.37rem 0.28rem;
        float: left;
    }

    .title {
        width: auto;
        height: 0.37rem;
        font-size: 0.26rem;
        font-family: PingFangSC-Regular;
        color: rgba(51, 51, 51, 1);
        line-height: 0.37rem;
        margin: 0.6rem 0 0.4rem 0;
    }

    .xing {
        width: 0.22rem;
        height: 0.22rem;
        display: block;
        background: url("../../../assets/img/ic_star_formal.png") no-repeat;
        background-size: 100%;
        float: left;
        margin-bottom: 0.3rem;
        margin-right: 0.05rem;
    }

    .liang {
        width: 0.22rem;
        height: 0.22rem;
        display: block;
        background: url("../../../assets/img/liang.png") no-repeat;
        background-size: 100%;
        float: left;
        margin-bottom: 0.3rem;
        margin-right: 0.05rem;
    }

    .minute {
        width: 6.3rem;
        height: 1.39rem;
        display: block;
        text-align: left;
        border: none;
        margin: 0 auto;
        padding: 0.3rem;
        resize: none;
        background-color: rgba(245, 245, 245, 1);
    }

    .button {
        width: 6.75rem;
        height: 0.90rem;
        background: rgba(57, 177, 254, 1);
        border-radius: 0.10rem;
        font-size: 0.32rem;
        font-family: PingFangSC-Regular;
        color: rgba(255, 255, 255, 1);
        line-height: 0.90rem;
        text-align: center;
        box-shadow: 0 0.20rem 0.58rem rgba(62, 149, 205, 0.3);
        margin: auto;
        position: fixed;
        bottom: 0.4rem;
        left: 0;
        right: 0;
    }

</style>