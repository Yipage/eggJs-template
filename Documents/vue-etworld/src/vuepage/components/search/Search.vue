<template>
    <div>
        <div class="header">
            <label>
                <input class="s_text" type="text" placeholder="请输入关键字搜索"/>
            </label>
            <a class="on" href="javascript:void(0)">搜索</a>
        </div>

        <div class="main">
            <img class="img" src="../../../assets/img/ill_1.png" alt="" @click="onGo()"/>
            <div class="introduce">
                <p>ET.BABY 存储器</p>
                <p>￥25</p>
                <i @click="onBuy()"></i>
            </div>
        </div>
        <stop v-if="isShade"></stop>
    </div>
</template>

<script>
    import {setTitle} from "../../../assets/js/setTittle"
    import stop from '../classify/Stop.vue'

    export default {
        data() {
            return {
                isShade: false
            }
        },
        components: {
            stop
        },
        methods: {
            onGo() {
                this.$router.push({path: '/details'})
            },
            onBuy() {
                this.isShade = true
            }
        },
        mounted() {
            setTitle("搜索")
        }
    }
</script>

<style scoped>
    .header {
        width: 100%;
        height: 0.88rem;
        background: rgba(255, 255, 255, 1);
        line-height: 0.88rem;
        font-size: 0.30rem;
        font-family: PingFangSC-Regular;
    }

    .header .s_text {
        width: 4.8rem;
        height: 0.69rem;
        background: rgba(246, 246, 246, 1);
        border-radius: 0.10rem;
        border: none;
        margin: 0 0.3rem 0 0.45rem;
        padding-left: 0.8rem;
    }

    .header label::after {
        content: '';
        width: 0.4rem;
        height: 0.4rem;
        position: absolute;
        background: url('../../../assets/img/ic_search.png') no-repeat;
        background-size: 100%;
        top: 0.23rem;
        left: 0.6rem;
    }

    .header .on {
        display: inline-block;
        color: rgba(57, 177, 254, 1);
        text-decoration: none;
    }

    .main {
        width: 7.00rem;
        height: 7.57rem;
        background: rgba(255, 255, 255, 1);
        border-radius: 0.04rem;
        margin: 0.35rem auto;
        position: relative;
    }

    .main .img {
        width: 6rem;
        height: 6rem;
        display: block;
        margin: 0 auto;
        padding-top: 0.3rem;
    }

    .main .introduce {
        position: absolute;
        width: 6.25rem;
        height: 1.36rem;
        background: rgba(255, 255, 255, 1);
        border-radius: 0.04rem;
        box-shadow: 0 0 0.23rem rgba(0, 0, 0, 0.11);
        display: block;
        margin: auto;
        left: 0;
        right: 0;
        bottom: -0.25rem;
    }

    .main .introduce p:nth-child(1) {
        width: auto;
        height: 0.40rem;
        font-size: 0.28rem;
        font-family: PingFangSC-Medium;
        color: rgba(52, 51, 57, 1);
        line-height: 0.40rem;
        margin: 0.22rem 0 0.15rem 0.22rem;
    }

    .main .introduce p:nth-child(2) {
        width: auto;
        height: 0.42rem;
        font-size: 0.30rem;
        font-family: PingFangSC-Regular;
        color: rgba(153, 153, 153, 1);
        line-height: 0.42rem;
        margin: 0 0 0.15rem 0.22rem;
    }

    .main .introduce i {
        position: absolute;
        width: 0.45rem;
        height: 0.45rem;
        background: url("../../../assets/img/ic_addshop.png") no-repeat;
        background-size: 100%;
        bottom: 0.23rem;
        right: 0.45rem;
    }

</style>