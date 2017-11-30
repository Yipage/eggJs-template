<template>
    <div>
        <div class="header">
            <img class="user_icon" src="../../../assets/img/bg_8.png" alt=""/>
            <p class="user_name">蒲公英的约定</p>
        </div>

        <div class="main">
            <div class="order">
                <p class="myorder" @click="onOrder()">我的订单</p>
                <ul class="tag">
                    <li class="dan1" @click="onTag(2)">待付款<span class="color">(0)</span></li>
                    <li class="dan2" @click="onTag(3)">待发货<span class="color">(0)</span></li>
                    <li class="dan3" @click="onTag(4)">待收货<span class="color">(0)</span></li>
                    <li class="dan4" @click="onTag(5)">待评价<span class="color">(0)</span></li>
                    <li class="dan5" @click="onSale()">退款/售后</li>
                </ul>
            </div>
        </div>

        <div class="footer">
            <div class="limit">
                <p class="my1" @click="onWallet()">我的钱包</p>
                <p class="my2" @click="onSite()">收货地址</p>
                <p class="my3" @click="onCoupon()">优 惠 券</p>
                <p class="my4" @click="onIntegral()">我的积分</p>
                <p class="my5" @click="onSetpw()">钱包支付密码</p>
                <p class="my6" @click="onFriend()">邀请好友</p>
                <p class="my7">关于外星世界</p>
            </div>
        </div>
    </div>
</template>

<script>
    import {setTitle} from "../../../assets/js/setTittle"

    export default {
        data() {
            return {}
        },
        methods: {
            onOrder() {
                this.$router.push({path: '/myorder'})
            },
            onTag(index) {
                switch (index) {
                    case 2:
                        this.$router.push({path: '/myorder', query: {tab: 2}});
                        break;
                    case 3:
                        this.$router.push({path: '/myorder', query: {tab: 3}});
                        break;
                    case 4:
                        this.$router.push({path: '/myorder', query: {tab: 4}});
                        break;
                    case 5:
                        this.$router.push({path: '/myorder', query: {tab: 5}});
                        break;
                }
            },
            onSale(){
                this.$router.push({path: '/sale'})
            },
            onIntegral() {
                this.$router.push({path: '/integral'})
            },
            onFriend() {
                this.$router.push({path: '/friend'})
            },
            onWallet() {
                this.$router.push({path: '/wallet'})
            },
            onSite() {
                this.$router.push({path: '/site'})
            },
            onCoupon() {
                this.$router.push({path: '/coupon'})
            },
            onSetpw() {
                this.$router.push({path: '/setpw'})
            }
        },
        mounted() {
            setTitle("个人中心")
        }
    }
</script>

<style scoped>
    .header {
        width: 100%;
        height: 3.6rem;
        background: url("../../../assets/img/pbg_1.png") no-repeat;
        background-size: 100%;
    }

    .user_icon {
        width: 1.90rem;
        height: 1.90rem;
        margin: 0.2rem 0 0.2rem 0.54rem;
    }

    .user_name {
        width: auto;
        height: 0.45rem;
        font-size: 0.32rem;
        font-family: PingFangSC-Medium;
        color: rgba(20, 20, 20, 1);
        margin-left: 0.54rem;
    }

    .main {
        width: 100%;
        height: 2.33rem;
        background: rgba(255, 255, 255, 1);
    }

    .main .order {
        width: 6.3rem;
        height: 2.33rem;
        background: rgba(255, 255, 255, 1);
        margin: 0 auto;
        position: relative;
    }

    .main .order .myorder {
        width: auto;
        height: 0.40rem;
        font-size: 0.28rem;
        font-family: PingFangSC-Regular;
        color: rgba(51, 51, 51, 1);
        line-height: 0.40rem;
        padding: 0.29rem 0 0.48rem 0;
    }

    .main .order::before {
        content: '';
        position: absolute;
        width: 0.25rem;
        height: 0.25rem;
        background: url("../../../assets/img/ic_enter2.png") no-repeat;
        background-size: 100%;
        top: 0.4rem;
        right: 0;
    }

    .tag {
        display: flex;
    }

    .tag > li {
        flex: 1;
        font-size: 0.20rem;
        font-family: PingFangSC-Regular;
        color: rgba(153, 153, 153, 1);
        line-height: 1.5rem;
        position: relative;
    }

    .tag .color {
        color: rgba(250, 126, 173, 1)
    }

    .dan1::after {
        content: '';
        position: absolute;
        width: 0.44rem;
        height: 0.44rem;
        background: url("../../../assets/img/ic_daifukuan.png") no-repeat;
        background-size: 100%;
        top: 0rem;
        left: 0.3rem;
    }

    .dan2::after {
        content: '';
        position: absolute;
        width: 0.44rem;
        height: 0.44rem;
        background: url("../../../assets/img/ic_daifahuo.png") no-repeat;
        background-size: 100%;
        top: 0rem;
        left: 0.3rem;
    }

    .dan3::after {
        content: '';
        position: absolute;
        width: 0.44rem;
        height: 0.44rem;
        background: url("../../../assets/img/ic_daishouhuo.png") no-repeat;
        background-size: 100%;
        top: 0rem;
        left: 0.3rem;
    }

    .dan4::after {
        content: '';
        position: absolute;
        width: 0.44rem;
        height: 0.44rem;
        background: url("../../../assets/img/ic_daipingjia.png") no-repeat;
        background-size: 100%;
        top: 0rem;
        left: 0.3rem;
    }

    .dan5::after {
        content: '';
        position: absolute;
        width: 0.44rem;
        height: 0.44rem;
        background: url("../../../assets/img/ic_weixiu.png") no-repeat;
        background-size: 100%;
        top: 0rem;
        left: 0.3rem;
    }

    .footer {
        width: 100%;
        height: 7rem;
        background: rgba(255, 255, 255, 1);
        margin-top: 0.21rem;
    }

    .footer .limit {
        width: 6.3rem;
        height: 6.7rem;
        background: rgba(255, 255, 255, 1);
        margin: 0 auto;
        padding-top: 0.3rem;
    }

    .footer .limit > p {
        width: auto;
        height: 0.90rem;
        font-size: 0.26rem;
        font-family: PingFangSC-Regular;
        color: rgba(102, 102, 102, 1);
        line-height: 0.90rem;
        padding-left: 0.6rem;
        position: relative;
    }

    .footer .limit > p::before {
        content: '';
        position: absolute;
        width: 0.25rem;
        height: 0.25rem;
        background: url("../../../assets/img/ic_enter2.png") no-repeat;
        background-size: 100%;
        top: 0.32rem;
        right: 0;
    }

    .my1::after {
        content: '';
        position: absolute;
        width: 0.32rem;
        height: 0.32rem;
        background: url("../../../assets/img/ic_mymoney2.png") no-repeat;
        background-size: 100%;
        top: 0.29rem;
        left: 0;
    }

    .my2::after {
        content: '';
        position: absolute;
        width: 0.32rem;
        height: 0.32rem;
        background: url("../../../assets/img/ic_address.png") no-repeat;
        background-size: 100%;
        top: 0.29rem;
        left: 0;
    }

    .my3::after {
        content: '';
        position: absolute;
        width: 0.32rem;
        height: 0.32rem;
        background: url("../../../assets/img/ic_youhuiquan.png") no-repeat;
        background-size: 100%;
        top: 0.29rem;
        left: 0;
    }

    .my4::after {
        content: '';
        position: absolute;
        width: 0.32rem;
        height: 0.32rem;
        background: url("../../../assets/img/ic_jifen.png") no-repeat;
        background-size: 100%;
        top: 0.29rem;
        left: 0;
    }

    .my5::after {
        content: '';
        position: absolute;
        width: 0.32rem;
        height: 0.32rem;
        background: url("../../../assets/img/ic_xiugaipassword.png") no-repeat;
        background-size: 100%;
        top: 0.29rem;
        left: 0;
    }

    .my6::after {
        content: '';
        position: absolute;
        width: 0.32rem;
        height: 0.32rem;
        background: url("../../../assets/img/ic_friend.png") no-repeat;
        background-size: 100%;
        top: 0.29rem;
        left: 0;
    }

    .my7::after {
        content: '';
        position: absolute;
        width: 0.32rem;
        height: 0.32rem;
        background: url("../../../assets/img/ic_mine.png") no-repeat;
        background-size: 100%;
        top: 0.29rem;
        left: 0;
    }
</style>