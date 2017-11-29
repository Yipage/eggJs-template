<template>
    <div>
        <payment v-if="isShow"></payment>
        <paytype v-if="isType"></paytype>

        <div class="allorder">
            <div class="gap" @click="onIndent()">
                <img class="all_img" src="../../../assets/img/ill_1.png" alt=""/>
                <p class="name">ET.BABY 存储器</p>
                <p class="color">颜色：红</p>
                <p class="price">¥88.8</p>
                <p class="num">*1</p>
            </div>
            <p class="all_text">合计¥<span class="all_price">88.8</span>，含运费：¥10.0</p>
            <p class="type">待发货</p>
            <p class="pay" @click="onPay()">付款</p>
            <p class="quxiao" @click="onQu()">取消订单</p>
            <p class="kefu">联系客服</p>
        </div>
        <div class="allorder">
            <div class="gap" @click="onIndent()">
                <img class="all_img" src="../../../assets/img/ill_1.png" alt=""/>
                <p class="name">ET.BABY 存储器</p>
                <p class="color">颜色：红</p>
                <p class="price">¥88.8</p>
                <p class="num">*1</p>
            </div>
            <p class="all_text">合计¥<span class="all_price">88.8</span>，含运费：¥10.0</p>
            <p class="type">待发货</p>
            <p class="pay" @click="onPay()">付款</p>
            <p class="quxiao" @click="onQu()">取消订单</p>
            <p class="kefu">联系客服</p>
        </div>
    </div>
</template>

<script>
    import {MessageBox} from 'mint-ui'
    import payment from './Payment.vue'
    import paytype from './PayType.vue'


    export default {
        data() {
            return {
                isShow: false,
                isType: false,
            }
        },
        components: {
            payment,
            paytype
        },
        methods: {
            onQu() {
                MessageBox.confirm('是否取消订单?').then(() => {
//                    this.$router.push({path: '/sesame'})
                });
            },
            onIndent() {
                this.$router.push({path: '/indent'})
            },
            onPay() {
                this.isShow = true
            }
        }
    }
</script>

<style scoped>
    .allorder {
        width: 100%;
        height: 3.60rem;
        background: rgba(255, 255, 255, 1);
        margin-top: 0.2rem;
    }

    .allorder .gap {
        width: 7rem;
        height: 1.8rem;
        margin: 0 auto;
        border-bottom: 0.01rem solid rgba(233, 233, 233, 1);
    }

    .allorder .gap .all_img {
        width: 1.50rem;
        height: 1.50rem;
        background: rgba(255, 255, 255, 1);
        border-radius: 0.10rem;
        border: 0.01rem solid rgba(233, 233, 233, 1);
        margin: 0.12rem 0.33rem 0.20rem 0;
        float: left;
    }

    .allorder .gap .name {
        width: auto;
        height: 0.30rem;
        font-size: 0.30rem;
        font-family: PingFangSC-Regular;
        color: rgba(20, 20, 20, 1);
        line-height: 0.30rem;
        padding-top: 0.15rem;
    }

    .allorder .gap .color {
        width: auto;
        height: 0.33rem;
        font-size: 0.24rem;
        font-family: PingFangSC-Regular;
        color: rgba(174, 174, 174, 1);
        line-height: 0.33rem;
        padding-top: 0.36rem;
        padding-bottom: 0.15rem;
    }

    .allorder .gap .price {
        width: auto;
        height: 0.33rem;
        font-size: 0.24rem;
        font-family: PingFangSC-Medium;
        color: rgba(253, 149, 187, 1);
        line-height: 0.33rem;
        float: left;
    }

    .allorder .gap .num {
        width: auto;
        height: 0.37rem;
        font-size: 0.26rem;
        font-family: PingFangSC-Regular;
        color: rgba(174, 174, 174, 1);
        line-height: 0.37rem;
        float: right;
    }

    .all_text {
        width: auto;
        height: 0.45rem;
        font-size: 0.24rem;
        font-family: PingFangSC-Regular;
        color: rgba(102, 102, 102, 1);
        line-height: 0.33rem;
        text-align: right;
        margin: 0.13rem 0.3rem 0.23rem 0;
    }

    .all_price {
        font-size: 0.32rem;
    }

    .type {
        width: auto;
        height: 0.33rem;
        font-size: 0.24rem;
        font-family: PingFangSC-Regular;
        color: rgba(57, 177, 254, 1);
        line-height: 0.33rem;
        float: left;
        margin-left: 0.3rem;
        margin-top: 0.1rem;
    }

    .kefu {
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
    }

    .quxiao {
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
    }

    .pay {
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
    }
</style>