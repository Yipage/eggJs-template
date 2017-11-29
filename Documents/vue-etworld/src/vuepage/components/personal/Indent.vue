<template>
    <div>
        <img class="img" src="../../../assets/img/pbg_1.png" alt=""/>
        <div class="site">
            <span class="user_name">算什么男人</span>
            <span class="user_moblie">13499380000</span>
            <div style="clear: both"></div>
            <p class="user_site">地址：广东省深圳市龙岗区龙城街道花样年龙年广场13a01</p>
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

        <div class="message">
            <p>订单编号：6768889978</p>
            <p>下单时间：2017-09-08 14:22:33</p>
            <p>支付方式：微信支付</p>
            <p>配送方式：顺丰速递</p>
        </div>

        <div class="log">
            <div class="ge">
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
            <p class="s_price">实付款：¥<span class="price">5299.00</span></p>
        </div>

        <div class="footer">
            <p class="pay">付款</p>
            <p class="quxiao" @click="onQu()">取消订单</p>
            <p class="kefu">联系客服</p>
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

    .site {
        width: 100%;
        height: 1.56rem;
        background: rgba(255, 255, 255, 1);
        margin-top: 0.2rem;
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
        position: relative;
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
    }

    .site .user_name::after {
        content: '';
        position: absolute;
        width: 0.30rem;
        height: 0.30rem;
        background: url("../../../assets/img/ic_location.png") no-repeat;
        background-size: 100%;
        top: 0.1rem;
        left: -0.5rem;
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

    .log {
        width: 100%;
        height: 2.5rem;
        background: rgba(255, 255, 255, 1);
        margin-top: 0.2rem;
    }

    .log .ge {
        width: 7rem;
        height: 1.5rem;
        margin: 0 auto;
        border-bottom: 0.01rem solid rgba(233, 233, 233, 1);
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

    .log .s_price {
        width: auto;
        height: 0.50rem;
        font-size: 0.24rem;
        font-family: PingFangSC-Regular;
        color: rgba(51, 51, 51, 1);
        line-height: 0.33rem;
        text-align: right;
        margin-right: 0.25rem;
        margin-top: 0.35rem;
    }

    .log .price {
        width: auto;
        height: 0.50rem;
        font-size: 0.36rem;
        font-family: PingFangSC-Regular;
        color: rgba(250, 126, 173, 1);
        line-height: 0.33rem;
        text-align: right;
        margin-left: 0.1rem;
    }

    .footer {
        width: 100%;
        height: 0.90rem;
        background: rgba(255, 255, 255, 1);
        position: fixed;
        bottom: 0;
        box-shadow: 0 0.2rem 0.58rem rgba(0, 0, 0, 0.2);
    }

    .footer .kefu {
        width: 1.30rem;
        height: 0.54rem;
        border-radius: 0.10rem;
        font-size: 0.24rem;
        font-family: PingFangSC-Regular;
        color: rgba(102, 102, 102, 1);
        line-height: 0.54rem;
        text-align: center;
        border: 0.01rem solid rgba(207, 207, 207, 1);
        float: right;
        margin-right: 0.3rem;
        margin-top: 0.15rem;
    }

    .footer .quxiao {
        width: 1.30rem;
        height: 0.54rem;
        border-radius: 0.10rem;
        font-size: 0.24rem;
        font-family: PingFangSC-Regular;
        color: rgba(102, 102, 102, 1);
        line-height: 0.54rem;
        text-align: center;
        border: 0.01rem solid rgba(207, 207, 207, 1);
        float: right;
        margin-right: 0.3rem;
        margin-top: 0.15rem;
    }

    .footer .pay {
        width: 1.30rem;
        height: 0.54rem;
        border-radius: 0.10rem;
        font-size: 0.24rem;
        font-family: PingFangSC-Regular;
        color: rgba(57, 177, 254, 1);
        line-height: 0.54rem;
        text-align: center;
        border: 0.01rem solid rgba(57, 177, 254, 1);
        float: right;
        margin-right: 0.3rem;
        margin-top: 0.15rem;
    }

</style>