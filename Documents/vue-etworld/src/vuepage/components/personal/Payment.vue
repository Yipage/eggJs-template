<template>
    <div class="bg">
        <div class="main">
            <p class="title">付款详情</p>
            <p class="type">付款方式</p>
            <div class="right">
                <p class="pay_type" @click="onType()">微信支付</p>
                <img src="../../../assets/img/ic_wechat.png" alt=""/>
            </div>
            <div style="clear: both"></div>
            <p class="type2">需付款</p>
            <p class="type3">39.00元</p>

            <i class="close" @click="onClose()"></i>
            <p class="button">确认支付</p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {
            onClose() {
                this.$parent.isShow = false
            },
            onType() {
                this.$parent.isType = true
                this.$parent.isShow = false
            }
        }
    }
</script>

<style scoped>
    .bg {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(18, 18, 18, 0.6);
    }

    .main {
        width: 6.40rem;
        height: 6.87rem;
        background: rgba(255, 255, 255, 1);
        border-radius: 0.20rem;
        margin: 3rem auto;
        position: relative;
    }

    .main .title {
        width: auto;
        height: 0.42rem;
        font-size: 0.30rem;
        font-family: PingFangSC-Medium;
        color: rgba(51, 51, 51, 1);
        line-height: 0.42rem;
        text-align: center;
        padding-top: 0.72rem;
    }

    .main .type {
        width: auto;
        height: 0.37rem;
        font-size: 0.26rem;
        font-family: PingFangSC-Regular;
        color: rgba(153, 153, 153, 1);
        line-height: 0.37rem;
        float: left;
        margin: 0.46rem 0 0 0.56rem;
    }

    .main .right {
        float: right;
        margin: 0.46rem 0.56rem 0 0;
    }

    .main .right img {
        width: 0.65rem;
        height: 0.65rem;
        display: block;
        float: right;
        margin-top: -0.2rem;
        margin-right: 0.1rem;
        border-radius: 0.04rem;
    }

    .main .right .pay_type {
        width: auto;
        height: 0.33rem;
        font-size: 0.24rem;
        font-family: PingFangSC-Medium;
        color: rgba(102, 102, 102, 1);
        line-height: 0.33rem;
        float: right;
        padding-right: 0.4rem;
        position: relative;
    }

    .main .right .pay_type::before {
        content: '';
        position: absolute;
        width: 0.2rem;
        height: 0.2rem;
        background: url("../../../assets/img/ic_enter2.png") no-repeat;
        background-size: 100%;
        top: 0.05rem;
        right: 0;
    }

    .main .type2 {
        width: auto;
        height: 0.37rem;
        font-size: 0.26rem;
        font-family: PingFangSC-Regular;
        color: rgba(51, 51, 51, 1);
        line-height: 0.37rem;
        float: left;
        margin: 0.46rem 0 0 0.56rem;
    }

    .main .type3 {
        width: auto;
        height: 0.37rem;
        font-size: 0.36rem;
        font-family: PingFangSC-Medium;
        color: rgba(51, 51, 51, 1);
        line-height: 0.37rem;
        float: right;
        margin: 0.46rem 0.56rem 0 0;
    }

    .close {
        width: 0.23rem;
        height: 0.23rem;
        background: url("../../../assets/img/login_del.png") no-repeat;
        background-size: 100%;
        position: absolute;
        top: 0.3rem;
        right: 0.3rem;
    }

    .button {
        width: 5.55rem;
        height: 0.74rem;
        background: rgba(57, 177, 254, 1);
        border-radius: 0.10rem;
        box-shadow: 0 0.2rem 0.58rem rgba(62, 149, 205, 0.3);
        margin: 0 auto;
        font-size: 0.28rem;
        font-family: PingFangSC-Regular;
        color: rgba(255, 255, 255, 1);
        line-height: 0.74rem;
        text-align: center;
        position: absolute;
        bottom: 0.9rem;
        left: 0;
        right: 0;
    }

</style>