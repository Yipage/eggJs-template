<template>
    <div class="bg">
        <p class="detail">零钱明细</p>
        <img class="img" src="../../../assets/img/ic_mymoney3.png" alt=""/>
        <p class="text">余额</p>
        <p class="price">￥<span class="num">888.8</span></p>
        <p class="button">充值</p>
        <p class="pw">设置钱包支付密码</p>
    </div>
</template>

<script>
    import {setTitle} from "../../../assets/js/setTittle"

    export default {
        data() {
            return {}
        },
        mounted() {
            setTitle("我的钱包")
        }
    }
</script>

<style scoped>

    .detail {
        width: 6.5rem;
        height: 0.33rem;
        font-size: 0.24rem;
        font-family: PingFangSC-Medium;
        color: rgba(51, 51, 51, 1);
        line-height: 0.33rem;
        margin: 0 auto;
        text-align: right;
        padding-top: 0.43rem;
    }

    .img {
        width: 2.00rem;
        height: 2.00rem;
        display: block;
        margin: 0.42rem auto;
    }

    .text {
        width: auto;
        height: 0.42rem;
        font-size: 0.30rem;
        font-family: PingFangSC-Regular;
        color: rgba(20, 20, 20, 1);
        line-height: 0.42rem;
        text-align: center;
    }

    .price {
        width: auto;
        height: 0.98rem;
        font-size: 0.44rem;
        font-family: PingFangSC-Medium;
        color: rgba(20, 20, 20, 1);
        line-height: 0.62rem;
        text-align: center;
        margin-top: 0.2rem;
    }

    .price .num {
        font-size: 0.7rem;
    }

    .button {
        width: 6.75rem;
        height: 0.90rem;
        background: rgba(57, 177, 254, 1);
        border-radius: 0.10rem;
        box-shadow: 0 0.2rem 0.58rem rgba(62, 149, 205, 0.3);
        font-size: 0.32rem;
        font-family: PingFangSC-Regular;
        color: rgba(255, 255, 255, 1);
        line-height: 0.90rem;
        text-align: center;
        margin: 0.56rem auto;
    }

    .pw {
        width: auto;
        height: 0.33rem;
        font-size: 0.24rem;
        font-family: PingFangSC-Medium;
        color: rgba(153, 153, 153, 1);
        line-height: 0.33rem;
        text-align: center;
        position: absolute;
        margin: auto;
        left: 0;
        right: 0;
        bottom: 1.4rem;
    }
</style>