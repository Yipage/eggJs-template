<template>
    <div class="bg">
        <div class="main">
            <p class="title">选择付款方式</p>
            <i class="close" @click="onClose()"></i>
            <div class="pay_tpye">
                <p class="pay1" @click="onType(1)">钱包支付
                    <i v-bind:class="{pre:isAcivity1}"></i>
                </p>
                <p class="pay2" @click="onType(2)">微信支付
                    <i v-bind:class="{pre:isAcivity2}"></i>
                </p>
                <p class="pay3" @click="onType(3)">支付宝支付
                    <i v-bind:class="{pre:isAcivity3}"></i>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isAcivity1: true,
                isAcivity2: false,
                isAcivity3: false,
            }
        },
        methods: {
            onClose() {
                this.$parent.isType = false;
                this.$parent.isShow = true
            },
            onType(index) {
                this.isAcivity1 = false;
                this.isAcivity2 = false;
                this.isAcivity3 = false;
                switch (index) {
                    case 1:
                        this.isAcivity1 = true;
                        break;
                    case 2:
                        this.isAcivity2 = true;
                        break;
                    case 3:
                        this.isAcivity3 = true;
                        break;
                }
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
        z-index: 200;
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

    .close {
        width: 0.23rem;
        height: 0.23rem;
        background: url("../../../assets/img/ic_enter2.png") no-repeat;
        background-size: 100%;
        position: absolute;
        top: 0.3rem;
        left: 0.3rem;
    }

    .pay_tpye {
        width: 5.3rem;
        margin: 0 auto;
    }

    .pay_tpye > p {
        width: auto;
        height: 0.33rem;
        font-size: 0.24rem;
        font-family: PingFangSC-Medium;
        color: rgba(102, 102, 102, 1);
        line-height: 0.33rem;
        margin-top: 1rem;
        padding-left: 0.87rem;
        position: relative;
    }

    .pay1::after {
        content: '';
        position: absolute;
        width: 0.65rem;
        height: 0.65rem;
        background: url("../../../assets/img/ic_mymoney.png") no-repeat;
        background-size: 100%;
        border-radius: 0.04rem;
        top: -0.2rem;
        left: 0;
    }

    .pay2::after {
        content: '';
        position: absolute;
        width: 0.65rem;
        height: 0.65rem;
        background: url("../../../assets/img/ic_wechat.png") no-repeat;
        background-size: 100%;
        border-radius: 0.04rem;
        top: -0.2rem;
        left: 0;
    }

    .pay3::after {
        content: '';
        position: absolute;
        width: 0.65rem;
        height: 0.65rem;
        background: url("../../../assets/img/ic_zhifubao.png") no-repeat;
        background-size: 100%;
        border-radius: 0.04rem;
        top: -0.2rem;
        left: 0;
    }

    .pre {
        content: '';
        position: absolute;
        width: 0.45rem;
        height: 0.45rem;
        background: cornflowerblue;
        top: 0;
        right: 0;
        border-radius: 100%;
    }

</style>