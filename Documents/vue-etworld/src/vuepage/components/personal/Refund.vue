<template>
    <div class="bg">
        <div class="main">
            <i class="close" @click="onClose()"></i>
            <p class="title">退款原因</p>
            <p class="line" @click="onXuan(1)">尺码拍错/不喜欢
                <i class="defult" v-bind:class="{pre:isPre1}" @click="onXuan(1)"></i>
            </p>
            <p class="line" @click="onXuan(2)">产品质量有问题
                <i class="defult" v-bind:class="{pre:isPre2}" @click="onXuan(2)"></i>
            </p>
            <p class="line" @click="onXuan(3)">颜色/款式/图案与描述不符
                <i class="defult" v-bind:class="{pre:isPre3}" @click="onXuan(3)"></i>
            </p>
            <p class="line" @click="onXuan(4)">收到商品少件
                <i class="defult" v-bind:class="{pre:isPre4}" @click="onXuan(4)"></i>
            </p>
            <p class="button" @click="onEnd()">确定</p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isPre1: false,
                isPre2: false,
                isPre3: false,
                isPre4: false,
            }
        },
        methods: {
            onXuan(index) {
                this.isPre1 = false;
                this.isPre2 = false;
                this.isPre3 = false;
                this.isPre4 = false;
                switch (index) {
                    case 1:
                        this.isPre1 = true;
                        break;
                    case 2:
                        this.isPre2 = true;
                        break;
                    case 3:
                        this.isPre3 = true;
                        break;
                    case 4:
                        this.isPre4 = true;
                        break;
                }
            },
            onClose() {
                this.$parent.isShow = false;
            },
            onEnd() {
                this.$parent.isShow = false;
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
        z-index: 100;
    }

    .main {
        width: 100%;
        height: 6.60rem;
        background: rgba(255, 255, 255, 1);
        position: fixed;
        bottom: 0;
    }

    .title {
        width: auto;
        height: 0.42rem;
        font-size: 0.30rem;
        font-family: PingFangSC-Regular;
        color: rgba(51, 51, 51, 1);
        line-height: 0.42rem;
        text-align: center;
        padding-top: 0.42rem;
        padding-bottom: 0.16rem;
    }

    .line {
        width: auto;
        height: 0.42rem;
        font-size: 0.30rem;
        font-family: PingFangSC-Regular;
        color: rgba(51, 51, 51, 1);
        line-height: 0.42rem;
        margin-top: 0.40rem;
        margin-left: 0.30rem;
        position: relative;
    }

    .defult {
        width: 0.36rem;
        height: 0.36rem;
        border: 0.01rem solid rgba(151, 151, 151, 1);
        position: absolute;
        top: 0;
        right: 0.38rem;
        border-radius: 100%;
    }

    .pre {
        background-color: rgba(57, 177, 254, 1);
        border: none !important;
    }

    .button {
        width: 6.75rem;
        height: 0.90rem;
        background: rgba(57, 177, 254, 1);
        border-radius: 0.10rem;
        font-size: 0.32rem;
        font-family: PingFangSC-Regular;
        color: rgba(255, 255, 255, 1);
        line-height: 0.90rem;
        text-align: center;
        position: absolute;
        bottom: 0.42rem;
        box-shadow: 0 0.20rem 0.58rem rgba(62, 149, 205, 0.3);
        margin: auto;
        left: 0;
        right: 0;
    }

    .close {
        content: '';
        position: absolute;
        width: 0.5rem;
        height: 0.5rem;
        background: url("../../../assets/img/ic_icon.png") no-repeat;
        background-size: 100%;
        border-radius: 0.04rem;
        top: 0.3rem;
        right: 0.3rem;
    }

</style>