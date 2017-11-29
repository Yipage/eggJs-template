<template>
    <div class="bg">
        <div class="main">
            <img src="../../../assets/img/haoyou.png" alt="" width="100%"/>
            <div class="conter">
                <ul class="nav">
                    <li>
                        <i class="weixin"></i>
                        微信好友
                    </li>
                    <li>
                        <i class="quan"></i>
                        微信朋友圈
                    </li>
                    <li>
                        <i class="qq"></i>
                        QQ好友
                    </li>
                    <li>
                        <i class="kong"></i>
                        QQ空间
                    </li>
                </ul>
                <p class="text">邀请好友并注册，各获得一张<span class="you"> 优惠券 </span>喔！</p>
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
        mounted() {
            setTitle("邀请好友")
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
        background-color: #ffffff;
    }

    .main {
        position: relative;
    }

    .conter {
        width: 7.05rem;
        height: 3.17rem;
        background: rgba(255, 255, 255, 1);
        border-radius: 0.20rem;
        box-shadow: 0 0 0.21rem rgba(0, 0, 0, 0.19);
        position: absolute;
        bottom: -2.45rem;
        margin: auto;
        left: 0;
        right: 0;
    }

    .nav {
        display: flex;
    }

    .nav > li {
        flex: 1;
        font-size: 0.22rem;
        font-family: PingFangSC-Regular;
        color: rgba(20, 20, 20, 1);
        line-height: 0.30rem;
        text-align: center;
        padding-top: 1.68rem;
        position: relative;
    }

    .weixin {
        position: absolute;
        width: 0.70rem;
        height: 0.70rem;
        background: url("../../../assets/img/ic_wechat2.png") no-repeat;
        background-size: 100%;
        top: 0.65rem;
        margin: auto;
        left: 0;
        right: 0;
    }

    .quan {
        position: absolute;
        width: 0.70rem;
        height: 0.70rem;
        background: url("../../../assets/img/ic_pengyouquan.png") no-repeat;
        background-size: 100%;
        top: 0.65rem;
        margin: auto;
        left: 0;
        right: 0;
    }

    .qq {
        position: absolute;
        width: 0.70rem;
        height: 0.70rem;
        background: url("../../../assets/img/ic_qq.png") no-repeat;
        background-size: 100%;
        top: 0.65rem;
        margin: auto;
        left: 0;
        right: 0;
    }

    .kong {
        position: absolute;
        width: 0.70rem;
        height: 0.70rem;
        background: url("../../../assets/img/ic_qqkongjian.png") no-repeat;
        background-size: 100%;
        top: 0.65rem;
        margin: auto;
        left: 0;
        right: 0;
    }

    .text {
        width: auto;
        height: 0.33rem;
        font-size: 0.24rem;
        font-family: PingFangSC-Regular;
        color: rgba(20, 20, 20, 1);
        line-height: 0.33rem;
        text-align: center;
        margin-top: 0.5rem;
    }

    .you {
        font-family: PingFangSC-Medium;
    }


</style>