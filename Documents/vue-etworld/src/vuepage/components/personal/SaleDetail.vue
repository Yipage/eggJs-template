<template>
    <div>
        <img class="img" src="../../../assets/img/pbg_1.png" alt=""/>

        <div class="user">
            <img class="ill" src="../../../assets/img/ill_1.png" alt=""/>
            <div class="right">
                <p class="name">ET.BABY 存储器</p>
                <p class="color">颜色：红</p>
                <p class="price">￥88.8</p>
                <p class="num">*1</p>
            </div>
        </div>

        <div class="tui_price">
            <p class="left">退款总金额</p>
            <p class="s_price">¥<span class="price">5299.00</span></p>
        </div>

        <div class="message">
            <p>订单编号：6768889978</p>
            <p>下单时间：2017-09-08 14:22:33</p>
            <p>支付方式：微信支付</p>
            <p>配送方式：顺丰速递</p>
        </div>


    </div>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>

<style scoped>
    .img {
        width: 100%;
        height: 1.6rem;
        display: block;
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
        color: rgba(253, 149, 187, 1);
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

    .message {
        width: 100%;
        height: 2.50rem;
        background: rgba(255, 255, 255, 1);
        margin-top: 0.2rem;
    }

    .message > p {
        width: auto;
        height: 0.33rem;
        font-size: 0.24rem;
        font-family: PingFangSC-Regular;
        color: rgba(51, 51, 51, 1);
        line-height: 0.33rem;
        padding-top: 0.24rem;
        margin-left: 0.35rem;
    }

    .tui_price {
        width: 100%;
        height: 0.71rem;
        background: rgba(255, 255, 255, 1);
    }

    .left {
        width: auto;
        height: 0.71rem;
        font-size: 0.28rem;
        font-family: PingFangSC-Regular;
        color: rgba(20, 20, 20, 1);
        line-height: 0.71rem;
        float: left;
        margin-left: 0.35rem;
    }

    .s_price {
        width: auto;
        height: 0.71rem;
        font-size: 0.24rem;
        font-family: PingFangSC-Regular;
        color: rgba(250, 126, 173, 1);
        line-height: 0.71rem;
        text-align: right;
        margin-right: 0.25rem;
        margin-top: 0.35rem;
    }

    .price {
        width: auto;
        height: 0.71rem;
        font-size: 0.36rem;
        font-family: PingFangSC-Regular;
        color: rgba(250, 126, 173, 1);
        line-height: 0.71rem;
        text-align: right;
        margin-left: 0.1rem;
    }

</style>