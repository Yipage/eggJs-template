<template>
    <div class="head">
        <div class="tag">
            <ul class="nav">
                <li class="nav_box" v-bind:class="{pre:isShow1}" @click="onAcitity(1)"
                    @click.prevent="active = 'tab-container1'">
                    可用优惠券(0)
                    <i v-bind:class="{pre2:isShow1}"></i>
                </li>
                <li class="nav_box" v-bind:class="{pre:isShow2}" @click="onAcitity(2)"
                    @click.prevent="active = 'tab-container2'">
                    不可用优惠券(0)
                    <i v-bind:class="{pre2:isShow2}"></i>
                </li>
            </ul>
        </div>

        <div class="page-tab-container">
            <mt-tab-container class="page-tabbar-tab-container" v-model="active">
                <mt-tab-container-item id="tab-container1">
                    <div class="conter">
                        <p class="name">优惠券名称</p>
                        <p class="type">满99元即可进行抵扣</p>
                        <p class="time">有效期：2017-09-08～2017-09-20</p>
                        <p class="price">￥88</p>
                    </div>
                    <div class="conter">
                        <p class="name">优惠券名称</p>
                        <p class="type">满99元即可进行抵扣</p>
                        <p class="time">有效期：2017-09-08～2017-09-20</p>
                        <p class="price">￥88</p>
                    </div>
                </mt-tab-container-item>
                <mt-tab-container-item id="tab-container2">
                    <div class="conter">
                        <p class="name">优惠券名称</p>
                        <p class="type">满99元即可进行抵扣</p>
                        <p class="time">有效期：2017-09-08～2017-09-20</p>
                        <p class="price">￥88</p>
                    </div>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                active: 'tab-container1',
                isShow1: true,
                isShow2: false
            }
        },
        methods: {
            onAcitity(index) {
                this.isShow1 = false;
                this.isShow2 = false;
                this.isShow3 = false;
                switch (index) {
                    case 1:
                        this.isShow1 = true;
                        break;
                    case 2:
                        this.isShow2 = true;
                        break;
                    case 3:
                        this.isShow3 = true;
                        break;
                }
            },
        }
    }
</script>

<style scoped>
    .head .nav {
        width: 100%;
        height: 0.90rem;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0 0.01rem 0.01rem rgba(0, 0, 0, 0.18);
        display: flex;
    }

    .head .nav .nav_box {
        width: auto;
        padding: 0 0.25rem;
        height: 0.90rem;
        font-size: 0.24rem;
        font-family: PingFangSC-Medium;
        color: rgba(153, 153, 153, 1);
        line-height: 0.90rem;
        position: relative;
        text-align: center;
        flex: 1;
    }

    .pre {
        color: rgba(20, 20, 20, 1) !important;
    }

    .pre2 {
        position: absolute;
        width: 0.28rem;
        height: 0.05rem;
        display: block;
        background: rgba(57, 177, 254, 1);
        margin: auto;
        left: 0;
        right: 0;
        bottom: 0;
    }

    .conter {
        width: 6.90rem;
        height: 1.93rem;
        background: url("../../../assets/img/juan_3.png") no-repeat;
        background-size: 100%;
        box-shadow: 0 0.20rem 0.34rem rgba(255, 142, 158, 0.3);
        margin: 0.4rem auto;
        position: relative;
    }

    .conter .price {
        position: absolute;
        width: auto;
        height: 1.12rem;
        font-size: 0.80rem;
        font-family: PingFangSC-Regular;
        color: rgba(255, 255, 255, 1);
        line-height: 1.12rem;
        top: 0.48rem;
        right: 0.25rem;
    }

    .name {
        width: auto;
        height: 0.50rem;
        font-size: 0.36rem;
        font-family: PingFangSC-Medium;
        color: rgba(255, 255, 255, 1);
        line-height: 0.50rem;
        padding: 0.14rem 0 0.1rem 0.31rem;
    }

    .type {
        width: auto;
        height: 0.42rem;
        font-size: 0.30rem;
        font-family: PingFangSC-Regular;
        color: rgba(255, 255, 255, 1);
        line-height: 0.42rem;
        padding-left: 0.31rem;
        padding-bottom: 0.35rem;
    }

    .time {
        width: auto;
        height: 0.33rem;
        font-size: 0.24rem;
        font-family: PingFangSC-Regular;
        color: rgba(255, 255, 255, 1);
        line-height: 0.33rem;
        padding-left: 0.31rem;
    }

</style>