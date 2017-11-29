<template>
    <div class="bg">
        <div class="main">
            <img class="img" src="../../../assets/img/ill_11.png"/>
            <p class="text">您的评价已提交</p>
            <p class="button" @click="onHome()">返回首页</p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {
            onHome() {
                this.$router.push({path: '/'})
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
        margin: 2.8rem auto;
        position: relative;
    }

    .img {
        width: 1.8rem;
        display: block;
        margin: 0 auto;
        padding-top: 0.5rem;
    }

    .text {
        width: auto;
        height: 0.40rem;
        font-size: 0.28rem;
        font-family: PingFangSC-Regular;
        color: rgba(51, 51, 51, 1);
        line-height: 0.40rem;
        text-align: center;
        padding-top: 0.4rem;
    }

    .button {
        width: 1.30rem;
        height: 0.54rem;
        background: rgba(57, 177, 254, 1);
        border-radius: 0.10rem;
        font-size: 0.24rem;
        font-family: PingFangSC-Regular;
        color: rgba(255, 255, 255, 1);
        line-height: 0.54rem;
        text-align: center;
        margin: auto;
        box-shadow: 0 0.20rem 0.54rem rgba(62, 149, 205, 0.3);
        position: absolute;
        bottom: 0.4rem;
        left: 0;
        right: 0;
    }
</style>