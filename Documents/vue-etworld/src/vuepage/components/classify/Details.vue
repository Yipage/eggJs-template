<template>
    <div class="head">
        <div class="tag">
            <ul class="nav">
                <li class="nav_box" v-bind:class="{pre:isShow1}" @click="onAcitity(1)"
                    @click.prevent="active = 'tab-container1'">
                    商品详情
                    <i v-bind:class="{pre2:isShow1}"></i>
                </li>
                <li class="nav_box" v-bind:class="{pre:isShow2}" @click="onAcitity(2)"
                    @click.prevent="active = 'tab-container2'">
                    商品评价
                    <i v-bind:class="{pre2:isShow2}"></i>
                </li>
                <li class="nav_box" v-bind:class="{pre:isShow3}" @click="onAcitity(3)"
                    @click.prevent="active = 'tab-container3'">
                    保修说明
                    <i v-bind:class="{pre2:isShow3}"></i>
                </li>
            </ul>
        </div>

        <stop v-if="isShade"></stop>

        <div class="page-tab-container">
            <mt-tab-container class="page-tabbar-tab-container" v-model="active">
                <mt-tab-container-item id="tab-container1">
                    <!--<div class="bg">-->
                    <!--<p class="title">ET.BABY.歡迎來到地球</p>-->
                    <!--<p class="title2">他們是人類的好朋友！</p>-->
                    <!--<img class="img" src="../../../assets/img/ill_1.png" alt=""/>-->
                    <!--<p class="title">ET.BABY 秘密档案</p>-->
                    <!--<p class="title3">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：黄 BABY</p>-->
                    <!--<p class="title3">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：黄 BABY</p>-->
                    <!--<p class="title3">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：黄 BABY</p>-->
                    <!--<p class="title3">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：黄 BABY</p>-->
                    <!--<p class="title3">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：黄 BABY</p>-->
                    <!--<p class="title3">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：黄 BABY</p>-->
                    <!--<p class="title3">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：黄 BABY</p>-->
                    <!--<p class="title3">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：黄 BABY</p>-->

                    <!--<div style="width: 100%; height: 1.5rem;"></div>-->

                    <div class="introduce">
                        <p class="shop">购物车
                            <i class="ic_shop"></i>
                        </p>
                        <p class="service">客服
                            <i class="ic_service"></i>
                        </p>
                        <p class="buy">立即购买</p>
                        <p class="join" @click="onJoin()">加入购物车</p>
                    </div>
                    <!--</div>-->
                    <img src="../../../assets/img/bg_shangpin.png" alt="" width="100%"/>
                </mt-tab-container-item>
                <mt-tab-container-item id="tab-container2">
                    <div class="comment">
                        <img class="user_icon" src="../../../assets/img/ic_icon.png" alt=""/>
                        <div class="right">
                            <p class="user_name">算什么男人</p>
                            <p class="user_time">2017-07-06</p>
                            <div style="clear: both"></div>
                            <i class="xing liang"></i>
                            <i class="xing liang"></i>
                            <i class="xing liang"></i>
                            <i class="xing liang"></i>
                            <i class="xing"></i>
                            <div style="clear: both"></div>
                            <p class="user_text">
                                感谢您对SUPERDRY/极度干燥旗舰店的支持！您购买的这款连帽外套带有柔软的抓绒衬里，胸前和袖子上有Superdry褪色装饰商标印花，简约而不失风格，舒适又不失保暖，是卫衣的理想选择！因为内里是采用抓绒的设计，掉毛现象按照正确洗涤方式多洗几次会有所缓解的，给您带来的不便，请多多见谅！~如您有任何关于商品方面的问题，都可以联系我们的在线客服，我们一定会为您妥善处理的呢！再次感谢您对我们品牌的关注，希望您能一如既往的支持SUPERDRY/极度干燥！</p>
                            <p class="user_color">黑色</p>
                            <p class="user_time">购买日期：2017-08-09</p>
                        </div>
                    </div>

                    <div class="comment">
                        <img class="user_icon" src="../../../assets/img/ic_icon.png" alt=""/>
                        <div class="right">
                            <p class="user_name">算什么男人</p>
                            <p class="user_time">2017-07-06</p>
                            <div style="clear: both"></div>
                            <i class="xing liang"></i>
                            <i class="xing liang"></i>
                            <i class="xing liang"></i>
                            <i class="xing liang"></i>
                            <i class="xing"></i>
                            <div style="clear: both"></div>
                            <p class="user_text">
                                感谢您对SUPERDRY/极度干燥旗舰店的支持！您购买的这款连帽外套带有柔软的抓绒衬里，胸前和袖子上有Superdry褪色装饰商标印花，简约而不失风格，舒适又不失保暖，是卫衣的理想选择！因为内里是采用抓绒的设计，掉毛现象按照正确洗涤方式多洗几次会有所缓解的，给您带来的不便，请多多见谅！~如您有任何关于商品方面的问题，都可以联系我们的在线客服，我们一定会为您妥善处理的呢！再次感谢您对我们品牌的关注，希望您能一如既往的支持SUPERDRY/极度干燥！</p>
                            <p class="user_color">黑色</p>
                            <p class="user_time">购买日期：2017-08-09</p>
                        </div>

                        <div style="width: 100%; height: 1rem;"></div>

                        <div class="introduce">
                            <p class="shop">购物车
                                <i class="ic_shop"></i>
                            </p>
                            <p class="service">客服
                                <i class="ic_service"></i>
                            </p>
                            <p class="buy">立即购买</p>
                            <p class="join" @click="onJoin()">加入购物车</p>
                        </div>
                    </div>
                </mt-tab-container-item>
                <mt-tab-container-item id="tab-container3">
                    <img src="../../../assets/img/bg_shangpin.png" alt="" width="100%"/>

                    <!--<div style="width: 100%; height: 1rem;"></div>-->

                    <div class="introduce">
                        <p class="shop">购物车
                            <i class="ic_shop"></i>
                        </p>
                        <p class="service">客服
                            <i class="ic_service"></i>
                        </p>
                        <p class="buy">立即购买</p>
                        <p class="join" @click="onJoin()">加入购物车</p>
                    </div>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>

    </div>
</template>

<script>
    import {setTitle} from '../../../assets/js/setTittle'
    import stop from './Stop.vue'

    export default {
        data() {
            return {
                active: 'tab-container1',
                isShow1: true,
                isShow2: false,
                isShow3: false,
                isShade: false,
            }
        },
        components: {
            stop
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
            onJoin() {
                this.isShade = true;
            },
        },
        mounted() {
            setTitle("商品详情")
        }
    }
</script>

<style scoped>
    /*.bg {*/
    /*width: 100%;*/
    /*height: auto;*/
    /*background-color: #ffffff;*/
    /*}*/

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

    /*.title {*/
    /*font-size: 0.4rem;*/
    /*font-weight: bolder;*/
    /*padding: 0.45rem 0 0.35rem 0.85rem;*/
    /*}*/

    /*.title2 {*/
    /*font-size: 0.24rem;*/
    /*font-family: PingFangSC-Medium;*/
    /*color: rgba(153, 153, 153, 1);*/
    /*padding: 0 0 0.5rem 0.85rem;*/
    /*}*/

    /*.title3 {*/
    /*font-size: 0.24rem;*/
    /*font-family: PingFangSC-Medium;*/
    /*color: rgba(153, 153, 153, 1);*/
    /*padding: 0 0 0.1rem 0.85rem;*/
    /*}*/

    /*.img {*/
    /*width: 5.73rem;*/
    /*height: 5.73rem;*/
    /*display: block;*/
    /*margin: 0 auto;*/
    /*padding-bottom: 0.95rem;*/
    /*}*/

    .introduce {
        position: fixed;
        width: 100%;
        height: 0.90rem;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0 0 0.1rem rgba(0, 0, 0, 0.11);
        display: block;
        margin: auto;
        left: 0;
        right: 0;
        bottom: 0;
    }

    .introduce .shop, .service {
        width: 1.5rem;
        height: 0.90rem;
        font-size: 0.18rem;
        font-family: PingFangSC-Regular;
        color: rgba(153, 153, 153, 1);
        line-height: 1.4rem;
        text-align: center;
        float: left;
        position: relative;
    }

    .introduce .ic_shop {
        position: absolute;
        width: 0.45rem;
        height: 0.45rem;
        background: url("../../../assets/img/ic_shop.png") no-repeat;
        background-size: 100%;
        top: 0.1rem;
        left: 0.55rem;
    }

    .introduce .ic_service {
        position: absolute;
        width: 0.45rem;
        height: 0.45rem;
        background: url("../../../assets/img/ic_kefu.png") no-repeat;
        background-size: 100%;
        top: 0.1rem;
        left: 0.52rem;
    }

    .introduce .join {
        width: 2.22rem;
        height: 0.90rem;
        background: rgba(51, 51, 51, 1);
        font-size: 0.32rem;
        font-family: PingFangSC-Regular;
        color: rgba(255, 255, 255, 1);
        line-height: 0.90rem;
        float: right;
        text-align: center;
    }

    .introduce .buy {
        width: 2.22rem;
        height: 0.90rem;
        background: rgba(57, 177, 254, 1);
        font-size: 0.32rem;
        font-family: PingFangSC-Regular;
        color: rgba(255, 255, 255, 1);
        line-height: 0.90rem;
        float: right;
        text-align: center;
    }

    /*评价*/
    .comment {
        width: 100%;
        height: auto;
        background: rgba(255, 255, 255, 1);
        margin-top: 0.2rem;
        position: relative;
        padding-bottom: 1.2rem;
    }

    .comment .user_icon {
        position: absolute;
        width: 0.80rem;
        height: 0.80rem;
        top: 0.32rem;
        left: 0.32rem;
    }

    .comment .right {
        width: 5.9rem;
        height: auto;
        margin-left: 1.3rem;
    }

    .comment .right .user_name {
        width: auto;
        height: 0.37rem;
        font-size: 0.26rem;
        font-family: PingFangSC-Regular;
        color: rgba(51, 51, 51, 1);
        line-height: 0.37rem;
        float: left;
        margin: 0.37rem auto 0.1rem auto;
    }

    .comment .right .user_time {
        width: auto;
        height: 0.33rem;
        font-size: 0.24rem;
        font-family: PingFangSC-Regular;
        color: rgba(207, 207, 207, 1);
        line-height: 0.33rem;
        float: right;
        margin: 0.5rem auto 0.1rem auto;
    }

    .comment .right .xing {
        width: 0.22rem;
        height: 0.22rem;
        display: block;
        background: url("../../../assets/img/ic_star_formal.png") no-repeat;
        background-size: 100%;
        float: left;
        margin-bottom: 0.3rem;
        margin-right: 0.05rem;
    }

    .comment .right .liang {
        width: 0.22rem;
        height: 0.22rem;
        display: block;
        background: url("../../../assets/img/liang.png") no-repeat;
        background-size: 100%;
        float: left;
        margin-bottom: 0.3rem;
        margin-right: 0.05rem;
    }

    .comment .right .user_text {
        width: auto;
        height: auto;
        font-size: 0.26rem;
        font-family: PingFangSC-Regular;
        color: rgba(51, 51, 51, 1);
        line-height: 0.40rem;
    }

    .comment .right .user_color {
        width: auto;
        height: 0.33rem;
        font-size: 0.24rem;
        font-family: PingFangSC-Regular;
        color: rgba(207, 207, 207, 1);
        line-height: 0.33rem;
        margin-top: 0.5rem;
        float: left;
    }

</style>