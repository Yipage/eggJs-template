<template>
    <div class="bg">
        <div class="inputs">
            <p class="title">输入密码</p>
            <input class="paypw" type="password" v-model="setpw" placeholder="请填写您的密码"
                   onkeypress="return event.keyCode>=48&&event.keyCode<=57" maxlength="6"/>
            <span class="astrict">{{setpw.length}}/6</span>
        </div>
        <div class="inputs">
            <p class="title">再次输入密码</p>
            <input class="paypw" type="password" v-model="setpw2" placeholder="请再次填写您的密码"
                   onkeypress="return event.keyCode>=48&&event.keyCode<=57" maxlength="6"/>
            <span class="astrict">{{setpw2.length}}/6</span>
        </div>
        <p class="button">下一步</p>
        <p class="text">点击“下一步”，即表示您同意</p>
        <p class="text2">《外星世界支付协议》</p>
    </div>
</template>

<script>
    import {setTitle} from "../../../assets/js/setTittle"

    export default {
        data() {
            return {
                setpw: '',
                setpw2: ''
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

    .inputs {
        width: 6.50rem;
        height: 2.26rem;
        margin: 0 auto;
        border-bottom: 0.01rem solid rgba(207, 207, 207, 1);
    }

    .title {
        width: auto;
        height: 0.45rem;
        font-size: 0.32rem;
        font-family: PingFangSC-Medium;
        color: rgba(20, 20, 20, 1);
        line-height: 0.45rem;
        padding-top: 0.62rem;
    }

    input::-webkit-input-placeholder {
        color: rgba(207, 207, 207, 1);
    }

    input:-moz-placeholder {
        color: rgba(207, 207, 207, 1);
    }

    input::-moz-placeholder {
        color: rgba(207, 207, 207, 1);
    }

    input:-ms-input-placeholder {
        color: rgba(207, 207, 207, 1);
    }

    .paypw {
        border: none !important;
        box-shadow: none !important;
        font-size: 0.28rem !important;
        width: 5.5rem;
    }

    .astrict {
        font-size: 0.28rem;
        font-family: PingFangSC-Regular;
        color: rgba(207, 207, 207, 1);
    }

    .button {
        width: 6.51rem;
        height: 0.90rem;
        background: rgba(57, 177, 254, 1);
        border-radius: 0.10rem;
        box-shadow: 0 0.12rem 0.22rem rgba(57, 177, 254, 0.25);
        margin: 0.69rem auto;
        font-size: 0.30rem;
        font-family: PingFangSC-Regular;
        color: rgba(255, 255, 255, 1);
        line-height: 0.90rem;
        text-align: center;
    }

    .text {
        width: auto;
        height: 0.33rem;
        font-size: 0.24rem;
        font-family: PingFangSC-Regular;
        color: rgba(153, 153, 153, 1);
        line-height: 0.33rem;
        text-align: center;
        position: absolute;
        margin: auto;
        left: 0;
        right: 0;
        bottom: 1rem;
    }

    .text2 {
        width: auto;
        height: 0.33rem;
        font-size: 0.24rem;
        font-family: PingFangSC-Regular;
        color: rgba(57, 177, 254, 1);
        line-height: 0.33rem;
        text-align: center;
        position: absolute;
        margin: auto;
        left: 0;
        right: 0;
        bottom: 0.42rem;
    }

</style>