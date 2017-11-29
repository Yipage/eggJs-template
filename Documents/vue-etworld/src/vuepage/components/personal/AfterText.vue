<template>
    <div class="bg">
        <div class="main">
            <p class="title">产品售后服务</p>
            <p class="line">未发货的商品可以进行退款</p>
            <p class="line">收到货物在七天之内包退</p>
            <p class="line">使用在7天以上，15天一下包换</p>
            <p class="line">产品使用15天以上，保修期为一年</p>

            <p class="button" @click="onClose()">我知道了</p>
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
                this.$parent.isText = false
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
        background-color: rgba(18, 18, 18, 0.6);
        z-index: 100;
    }

    .main {
        width: 4.63rem;
        height: 4.63rem;
        background: rgba(255, 255, 255, 1);
        border-radius: 0.20rem;
        margin: 3rem auto;
        position: relative;
    }

    .title {
        width: auto;
        height: 0.40rem;
        font-size: 0.28rem;
        font-family: PingFangSC-Medium;
        color: rgba(51, 51, 51, 1);
        line-height: 0.40rem;
        text-align: center;
        padding-top: 0.44rem;
        padding-bottom: 0.36rem;
        position: relative;
    }

    .title::after {
        content: '';
        width: 0.34rem;
        height: 0.02rem;
        background-color: rgba(151, 151, 151, 1);
        position: absolute;
        top: 0.62rem;
        left: 1rem;
    }

    .title::before {
        content: '';
        width: 0.34rem;
        height: 0.02rem;
        background-color: rgba(151, 151, 151, 1);
        position: absolute;
        top: 0.62rem;
        right: 1rem;
    }

    .line {
        width: auto;
        font-size: 0.24rem;
        font-family: PingFangSC-Regular;
        color: rgba(51, 51, 51, 1);
        line-height: 0.48rem;
        text-align: center;
    }

    .button {
        width: 1.30rem;
        height: 0.54rem;
        background: rgba(57, 177, 254, 1);
        border-radius: 0.10rem;
        box-shadow: 0 0.2rem 0.58rem rgba(62, 149, 205, 0.3);
        font-size: 0.24rem;
        font-family: PingFangSC-Regular;
        color: rgba(255, 255, 255, 1);
        text-align: center;
        line-height: 0.54rem;
        position: absolute;
        bottom: 0.53rem;
        margin: auto;
        left: 0;
        right: 0;
    }

</style>