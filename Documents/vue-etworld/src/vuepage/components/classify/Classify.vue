<template>
    <div class="head">
        <ul class="nav">
            <swiper :options="swiperOption">
                <!-- slides -->
                <swiper-slide>
                    <li class="nav_box" v-bind:class="{pre:isShow1}" @click="onAcitity(1)">
                        IOS存储器
                    </li>
                    <i v-bind:class="{pre2:isShow1}"></i>
                </swiper-slide>
                <swiper-slide>
                    <li class="nav_box" v-bind:class="{pre:isShow2}" @click="onAcitity(2)">
                        MFI线材充电器
                    </li>
                    <i v-bind:class="{pre2:isShow2}"></i>
                </swiper-slide>
                <swiper-slide>
                    <li class="nav_box" v-bind:class="{pre:isShow3}" @click="onAcitity(3)">
                        MFI移动电源
                    </li>
                    <i v-bind:class="{pre2:isShow3}"></i>
                </swiper-slide>
                <swiper-slide>
                    <li class="nav_box" v-bind:class="{pre:isShow4}" @click="onAcitity(4)">
                        MAC连接线
                    </li>
                    <i v-bind:class="{pre2:isShow4}"></i>
                </swiper-slide>
                <swiper-slide>
                    <li class="nav_box" v-bind:class="{pre:isShow5}" @click="onAcitity(5)">
                        MAC连接线
                    </li>
                    <i v-bind:class="{pre2:isShow5}"></i>
                </swiper-slide>
            </swiper>
        </ul>

        <div class="main">
            <img class="img" src="../../../assets/img/ill_1.png" alt="" @click="onGo()"/>
            <div class="introduce">
                <p>ET.BABY 存储器</p>
                <p>￥25</p>
                <i @click="onBuy()"></i>
            </div>
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
    import {swiper, swiperSlide} from 'vue-awesome-swiper'
    import {setTitle} from '../../../assets/js/setTittle'
    import stop from './Stop.vue'

    export default {
        data() {
            return {
                isShow1: true,
                isShow2: false,
                isShow3: false,
                isShow4: false,
                isShow5: false,
                isShade: false,
                swiperOption: {
                    slidesPerView: 4,
                    spaceBetween: 0,
                }
            }
        },
        methods: {
            onAcitity(index) {
                this.isShow1 = false;
                this.isShow2 = false;
                this.isShow3 = false;
                this.isShow4 = false;
                this.isShow5 = false;
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
                    case 4:
                        this.isShow4 = true;
                        break;
                    case 5:
                        this.isShow5 = true;
                        break;
                }
            },
            onGo() {
                this.$router.push({path: '/details'})
            },
            onBuy() {
                this.isShade = true
            }
        },
        components: {
            swiper,
            swiperSlide,
            stop
        },
        mounted() {
            setTitle("分类")
        }
    }
</script>

<style scoped>

    .head .nav {
        width: 100%;
        height: 0.90rem;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0 0.02rem 0.37rem rgba(0, 0, 0, 0.18);
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

    .main {
        width: 7.00rem;
        height: 7.57rem;
        background: rgba(255, 255, 255, 1);
        border-radius: 0.04rem;
        margin: 0.35rem auto 0.7rem auto;
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