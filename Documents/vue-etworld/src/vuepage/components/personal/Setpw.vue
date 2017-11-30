<template>
    <div class="bg">
        <p class="title">您是否记得微信名 <span class="pre">心动时刻</span></p>
        <p class="title2">当前使用的支付密码？</p>
        <p class="forget" @click="onForget()">不记得</p>
        <p class="remember" @click="onRemember()">记得</p>
    </div>
</template>

<script>
    import {setTitle} from "../../../assets/js/setTittle"

    export default {
        data() {
            return {}
        },
        methods: {
            onForget() {
                this.$router.push({path: '/setmobile'})
            },
            onRemember() {
                this.$router.push({path: '/remember'})
            }
        },
        mounted() {
            setTitle("设置支付密码")
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
        background-color: #ffffff;
    }

    .title {
        width: auto;
        height: 0.45rem;
        font-size: 0.30rem;
        font-family: PingFangSC-Regular;
        color: rgba(102, 102, 102, 1);
        line-height: 0.42rem;
        text-align: center;
        margin-top: 1.15rem;
        margin-bottom: 0.2rem;
    }

    .title .pre {
        font-family: PingFangSC-Medium;
        font-size: 0.32rem;
        color: rgba(51, 51, 51, 1);
    }

    .title2 {
        width: auto;
        height: 0.42rem;
        font-size: 0.30rem;
        font-family: PingFangSC-Regular;
        color: rgba(102, 102, 102, 1);
        line-height: 0.42rem;
        text-align: center;
        margin-bottom: 1.15rem;
    }

    .forget {
        width: 3.20rem;
        height: 0.90rem;
        background: rgba(255, 255, 255, 1);
        border-radius: 0.10rem;
        box-shadow: 0 0.12rem 0.22rem rgba(207, 207, 207, 0.3);
        font-size: 0.30rem;
        font-family: PingFangSC-Regular;
        color: rgba(51, 51, 51, 1);
        line-height: 0.90rem;
        text-align: center;
        float: left;
        margin-left: 0.45rem;
    }

    .remember {
        width: 3.20rem;
        height: 0.90rem;
        background: rgba(57, 177, 254, 1);
        border-radius: 0.10rem;
        box-shadow: 0 0.12rem 0.22rem rgba(57, 177, 254, 0.25);
        font-size: 0.30rem;
        font-family: PingFangSC-Regular;
        line-height: 0.90rem;
        text-align: center;
        float: right;
        margin-right: 0.45rem;
        color: rgba(255, 255, 255, 1);
    }
</style>