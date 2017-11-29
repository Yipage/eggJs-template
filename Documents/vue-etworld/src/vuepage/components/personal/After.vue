<template>
    <div>
        <refund v-if="isShow"></refund>
        <aftertext v-if="isText"></aftertext>
        <div class="user">
            <img class="ill" src="../../../assets/img/ill_1.png" alt=""/>
            <div class="right">
                <p class="name">ET.BABY 存储器</p>
                <p class="color">颜色：红</p>
                <p class="price">￥88.8</p>
                <p class="num">*1</p>
            </div>
        </div>

        <div class="type">
            <p class="type_text">选择服务类型</p>
            <p class="xuan_type">退款退货</p>
            <i class="type_i" @click="onText()"></i>
        </div>

        <div class="cause">
            <p class="type_text">退款原因</p>
            <p class="xuan_type" @click="onXuan()">产品质量有问题</p>
            <i class="type_i" @click="onXuan()"></i>
            <div style="clear: both"></div>
            <p class="message">请上传能看出您所反馈问题的有效凭证</p>
        </div>

        <div class="price">
            <p class="type_text">退款金额</p>
            <p class="xuan_type">¥90.0</p>
        </div>

        <div class="user_name">
            <p class="type_text">联系人</p>
            <p class="xuan_type">XXXX</p>
        </div>

        <div class="user_mobile">
            <p class="type_text">联系号码</p>
            <p class="xuan_type">10086</p>
        </div>

        <div class="t_message">
            <p class="tui">退货说明</p>
            <textarea class="minute" placeholder="选填"></textarea>
        </div>
        <p class="button">提交</p>
    </div>
</template>

<script>
    import {setTitle} from '../../../assets/js/setTittle'
    import refund from './Refund.vue'
    import aftertext from './AfterText.vue'

    export default {
        data() {
            return {
                isShow: false,
                isText: false,
            }
        },
        components: {
            refund,
            aftertext
        },
        methods: {
            onXuan() {
                this.isShow = true
            },
            onText() {
                this.isText = true
            }
        },
        mounted() {
            setTitle("申请售后")
        }
    }
</script>

<style scoped>
    .user {
        width: 100%;
        height: 1.77rem;
        background: rgba(255, 255, 255, 1);
    }

    .user .ill {
        width: 1.10rem;
        height: 1.10rem;
        background: rgba(255, 255, 255, 1);
        border-radius: 0.10rem;
        border: 0.01rem solid rgba(233, 233, 233, 1);
        float: left;
        margin: 0.33rem 0.33rem 0 0.43rem;
    }

    .user .right {
        width: 5.2rem;
        height: 1.77rem;
        float: left;
    }

    .user .right .name {
        width: auto;
        height: 0.42rem;
        font-size: 0.30rem;
        font-family: Helvetica;
        color: rgba(0, 0, 0, 1);
        line-height: 0.36rem;
        padding-top: 0.3rem;
    }

    .user .right .color {
        width: auto;
        height: 0.33rem;
        font-size: 0.24rem;
        font-family: PingFangSC-Regular;
        color: rgba(153, 153, 153, 1);
        line-height: 0.33rem;
        padding-top: 0.05rem;
        padding-bottom: 0.05rem;
    }

    .user .right .price {
        width: auto;
        height: 0.33rem;
        font-size: 0.24rem;
        font-family: PingFangSC-Regular;
        color: rgba(153, 153, 153, 1);
        line-height: 0.33rem;
        float: left;
    }

    .user .right .num {
        width: auto;
        height: 0.33rem;
        font-size: 0.24rem;
        font-family: PingFangSC-Regular;
        color: #000000;
        line-height: 0.33rem;
        float: right;
    }

    .type {
        width: 100%;
        height: 0.90rem;
        background: rgba(255, 255, 255, 1);
        margin-top: 0.2rem;
        position: relative;
    }

    .type .type_text {
        width: auto;
        height: 0.40rem;
        font-size: 0.28rem;
        font-family: PingFangSC-Regular;
        color: rgba(51, 51, 51, 1);
        line-height: 0.90rem;
        float: left;
        margin-left: 0.28rem;
    }

    .type .xuan_type {
        width: auto;
        height: 0.40rem;
        font-size: 0.28rem;
        font-family: PingFangSC-Regular;
        color: rgba(51, 51, 51, 1);
        line-height: 0.90rem;
        float: right;
        margin-right: 0.75rem;
    }

    .type .type_i {
        width: 0.30rem;
        height: 0.30rem;
        position: absolute;
        background: url("../../../assets/img/ic_icon.png") no-repeat;
        background-size: 100%;
        top: 0.28rem;
        right: 0.35rem;
    }

    .cause {
        width: 100%;
        height: 1.40rem;
        background: rgba(255, 255, 255, 1);
        margin-top: 0.2rem;
        position: relative;
    }

    .cause .type_text {
        width: auto;
        height: 0.40rem;
        font-size: 0.28rem;
        font-family: PingFangSC-Regular;
        color: rgba(51, 51, 51, 1);
        line-height: 0.90rem;
        float: left;
        margin-left: 0.28rem;
    }

    .cause .xuan_type {
        width: auto;
        height: 0.40rem;
        font-size: 0.28rem;
        font-family: PingFangSC-Regular;
        color: rgba(51, 51, 51, 1);
        line-height: 0.90rem;
        float: right;
        margin-right: 0.75rem;
    }

    .cause .type_i {
        width: 0.30rem;
        height: 0.30rem;
        position: absolute;
        background: url("../../../assets/img/ic_enter2.png") no-repeat;
        background-size: 100%;
        top: 0.28rem;
        right: 0.35rem;
    }

    .cause .message {
        width: auto;
        height: 0.33rem;
        font-size: 0.24rem;
        font-family: PingFangSC-Regular;
        color: rgba(153, 153, 153, 1);
        line-height: 0.33rem;
        margin-left: 0.28rem;
        margin-top: 0.45rem;
    }

    .price {
        width: 100%;
        height: 0.90rem;
        background: rgba(255, 255, 255, 1);
        margin-top: 0.2rem;
        position: relative;
    }

    .price .type_text {
        width: auto;
        height: 0.40rem;
        font-size: 0.28rem;
        font-family: PingFangSC-Regular;
        color: rgba(51, 51, 51, 1);
        line-height: 0.90rem;
        float: left;
        margin-left: 0.28rem;
    }

    .price .xuan_type {
        width: auto;
        height: 0.40rem;
        font-size: 0.28rem;
        font-family: PingFangSC-Regular;
        color: rgba(253, 149, 187, 1);
        line-height: 0.90rem;
        float: left;
        margin-left: 0.6rem;
    }

    .user_name {
        width: 100%;
        height: 0.90rem;
        background: rgba(255, 255, 255, 1);
        margin-top: 0.2rem;
        position: relative;
    }

    .user_name .type_text {
        width: auto;
        height: 0.40rem;
        font-size: 0.28rem;
        font-family: PingFangSC-Regular;
        color: rgba(51, 51, 51, 1);
        line-height: 0.90rem;
        float: left;
        margin-left: 0.28rem;
    }

    .user_name .xuan_type {
        width: auto;
        height: 0.40rem;
        font-size: 0.28rem;
        font-family: PingFangSC-Regular;
        color: rgba(51, 51, 51, 1);
        line-height: 0.90rem;
        float: left;
        margin-left: 0.6rem;
    }

    .user_mobile {
        width: 100%;
        height: 0.90rem;
        background: rgba(255, 255, 255, 1);
        position: relative;
        margin-top: 0.02rem;
    }

    .user_mobile .type_text {
        width: auto;
        height: 0.40rem;
        font-size: 0.28rem;
        font-family: PingFangSC-Regular;
        color: rgba(51, 51, 51, 1);
        line-height: 0.90rem;
        float: left;
        margin-left: 0.28rem;
    }

    .user_mobile .xuan_type {
        width: auto;
        height: 0.40rem;
        font-size: 0.28rem;
        font-family: PingFangSC-Regular;
        color: rgba(51, 51, 51, 1);
        line-height: 0.90rem;
        float: left;
        margin-left: 0.6rem;
    }

    .t_message {
        width: 100%;
        height: 5.46rem;
        background: rgba(255, 255, 255, 1);
        margin-top: 0.2rem;
    }

    .t_message .tui {
        width: auto;
        height: 0.40rem;
        font-size: 0.28rem;
        font-family: PingFangSC-Regular;
        color: rgba(51, 51, 51, 1);
        line-height: 0.40rem;
        padding: 0.22rem 0 0.26rem 0.28rem;
    }

    .t_message .minute {
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
        width: 100%;
        height: 0.90rem;
        background: rgba(57, 177, 254, 1);
        box-shadow: 0 0.2rem 0.58rem rgba(62, 149, 205, 0.3);
        font-size: 0.32rem;
        font-family: PingFangSC-Regular;
        color: rgba(255, 255, 255, 1);
        line-height: 0.90rem;
        text-align: center;
        position: fixed;
        bottom: 0;
    }

</style>