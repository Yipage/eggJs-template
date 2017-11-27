<template>
    <div>
        <div class="site" @click="onGo()">
            <span class="user_name">算什么男人</span>
            <span class="user_moblie">13499380000</span>
            <div style="clear: both"></div>
            <p class="user_site">广东省深圳市龙岗区龙城街道花样年龙年广场13a01</p>
        </div>

        <div class="user">
            <img class="ill" src="../../../assets/img/ill_1.png" alt=""/>
            <div class="right">
                <p class="name">ET.BABY 存储器</p>
                <p class="color">颜色：红</p>
                <p class="price">￥88.8</p>
                <p class="num">*1</p>
            </div>
        </div>

        <div class="coupon">
            <p class="coupon_name">优惠券</p>
            <p class="ji">积分 共1999积分，可用1000积分，抵¥10.00
                <i class="i_1"></i>
            </p>
        </div>

        <div class="log">
            <div class="log_left">
                <p class="log_price">商品金额</p>
                <p class="price_num">￥88.8</p>
            </div>
            <div style="clear: both"></div>
            <div class="log_left">
                <p class="log_price">运费</p>
                <p class="price_num">￥88.8</p>
            </div>
        </div>

        <div class="footer">
            <p>共 1 件商品</p>
            <p>实付款：¥</p>
            <p>88.8</p>
            <p>立即支付</p>
        </div>
    </div>
</template>

<script>
    import {setTitle} from '../../../assets/js/setTittle'

    export default {
        data() {
            return {}
        },
        methods: {
            onGo() {
                this.$router.push({path: '/site'})
            }
        },
        mounted() {
            setTitle("订单详情")
        }
    }
</script>

<style scoped>
    .site {
        width: 100%;
        height: 1.56rem;
        background: rgba(255, 255, 255, 1);
    }

    .site .user_name {
        width: auto;
        height: 0.45rem;
        display: block;
        font-size: 0.32rem;
        font-family: PingFangSC-Medium;
        color: rgba(51, 51, 51, 1);
        line-height: 0.45rem;
        margin: 0.22rem 0 0 0.70rem;
        float: left;
    }

    .site .user_moblie {
        width: auto;
        height: 0.42rem;
        font-size: 0.30rem;
        font-family: PingFangSC-Regular;
        color: rgba(51, 51, 51, 1);
        line-height: 0.42rem;
        display: block;
        float: left;
        margin: 0.22rem 0 0 0.70rem;
    }

    .site .user_site {
        width: auto;
        height: 0.33rem;
        font-size: 0.24rem;
        font-family: PingFangSC-Regular;
        color: rgba(153, 153, 153, 1);
        line-height: 0.33rem;
        margin: 0.22rem 0 0 0.70rem;
        position: relative;
    }

    .site .user_site::after {
        content: '';
        position: absolute;
        width: 0.30rem;
        height: 0.30rem;
        background: rgba(57, 177, 254, 1);
        top: 0;
        left: -0.5rem;
    }

    .site .user_site::before {
        content: '';
        position: absolute;
        width: 0.30rem;
        height: 0.30rem;
        background: url("../../../assets/img/ic_enter.png") no-repeat;
        background-size: 100%;
        top: 0;
        right: 0.5rem;
    }

    .user {
        width: 100%;
        height: 1.77rem;
        background: rgba(255, 255, 255, 1);
        margin-top: 0.2rem;
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
        color: #000000;
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

    .coupon {
        width: 100%;
        height: 1.42rem;
        background: rgba(255, 255, 255, 1);
        margin-top: 0.2rem;
    }

    .coupon .coupon_name {
        width: 7rem;
        height: 0.70rem;
        font-size: 0.24rem;
        font-family: PingFangSC-Regular;
        color: rgba(51, 51, 51, 1);
        line-height: 0.70rem;
        margin: 0 auto;
        border-bottom: 0.01rem solid #dadada;
        position: relative;
    }

    .coupon .coupon_name::before {
        content: '';
        position: absolute;
        width: 0.25rem;
        height: 0.25rem;
        background: url("../../../assets/img/ic_enter.png") no-repeat;
        background-size: 100%;
        top: 0.25rem;
        right: 0;
    }

    .coupon .ji {
        width: 7rem;
        height: 0.70rem;
        font-size: 0.24rem;
        font-family: PingFangSC-Regular;
        color: rgba(51, 51, 51, 1);
        line-height: 0.70rem;
        margin: 0 auto;
        position: relative;
    }

    .i_1 {
        content: '';
        position: absolute;
        width: 0.88rem;
        height: 0.46rem;
        background: url("../../../assets/img/ic_off.png") no-repeat;
        background-size: 100%;
        top: 0.12rem;
        right: 0;
    }

    .log {
        width: 100%;
        height: 1.42rem;
        background: rgba(255, 255, 255, 1);
        margin-top: 0.2rem;
    }

    .log .log_left {
        width: 7rem;
        margin: 0 auto;
    }

    .log .log_price {
        width: auto;
        height: 0.37rem;
        font-size: 0.26rem;
        font-family: PingFangSC-Regular;
        color: rgba(51, 51, 51, 1);
        line-height: 0.37rem;
        float: left;
        margin-top: 0.25rem;
    }

    .log .price_num {
        width: auto;
        height: 0.37rem;
        font-size: 0.26rem;
        font-family: PingFangSC-Regular;
        color: rgba(51, 51, 51, 1);
        line-height: 0.37rem;
        float: right;
        margin-top: 0.25rem;
    }

    .footer {
        width: 100%;
        height: 0.89rem;
        background: rgba(255, 255, 255, 1);
        position: fixed;
        bottom: 0;
        box-shadow: 0 0.2rem 0.58rem rgba(0, 0, 0, 0.2);

    }

    .footer p:nth-child(1), .footer p:nth-child(2) {
        width: auto;
        height: 0.89rem;
        font-size: 0.24rem;
        font-family: PingFangSC-Regular;
        color: rgba(51, 51, 51, 1);
        line-height: 0.89rem;
        float: left;
        margin-left: 0.5rem;
    }

    .footer p:nth-child(3) {
        width: auto;
        height: 0.89rem;
        font-size: 0.36rem;
        font-family: PingFangSC-Regular;
        color: rgba(250, 126, 173, 1);
        line-height: 0.89rem;
        float: left;
        margin-left: 0.15rem;
    }

    .footer p:nth-child(4) {
        width: 2.22rem;
        height: 0.89rem;
        background: rgba(57, 177, 254, 1);
        text-align: center;
        line-height: 0.89rem;
        float: right;
        font-size: 0.32rem;
        font-family: PingFangSC-Regular;
        color: rgba(255, 255, 255, 1);
    }

</style>