<template>
    <div class="bg">
        <div class="main">
            <img class="img" src="../../../assets/img/jifen.png"/>
            <p class="number">78</p>
            <p class="text">积分总额</p>

            <div class="conter">
                <p class="title">积分历史</p>
                <div class="list">
                    <p class="name">兑换积分</p>
                    <p class="num">积分 -1</p>
                    <div style="clear: both"></div>
                    <p class="time">2017-07-20</p>
                </div>
                <div class="list">
                    <p class="name">兑换积分</p>
                    <p class="num">积分 -1</p>
                    <div style="clear: both"></div>
                    <p class="time">2017-07-20</p>
                </div>
                <div class="list">
                    <p class="name">兑换积分</p>
                    <p class="num">积分 -1</p>
                    <div style="clear: both"></div>
                    <p class="time">2017-07-20</p>
                </div>
                <div class="list">
                    <p class="name">兑换积分</p>
                    <p class="num">积分 -1</p>
                    <div style="clear: both"></div>
                    <p class="time">2017-07-20</p>
                </div>
                <div class="list">
                    <p class="name">兑换积分</p>
                    <p class="num">积分 -1</p>
                    <div style="clear: both"></div>
                    <p class="time">2017-07-20</p>
                </div>
                <div class="list">
                    <p class="name">兑换积分</p>
                    <p class="num">积分 -1</p>
                    <div style="clear: both"></div>
                    <p class="time">2017-07-20</p>
                </div>
                <div class="list">
                    <p class="name">兑换积分</p>
                    <p class="num">积分 -1</p>
                    <div style="clear: both"></div>
                    <p class="time">2017-07-20</p>
                </div>
                <div class="list">
                    <p class="name">兑换积分</p>
                    <p class="num">积分 -1</p>
                    <div style="clear: both"></div>
                    <p class="time">2017-07-20</p>
                </div>
                <div class="list">
                    <p class="name">兑换积分</p>
                    <p class="num">积分 -1</p>
                    <div style="clear: both"></div>
                    <p class="time">2017-07-20</p>
                </div>
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
            setTitle("我的积分")
        }
    }
</script>

<style scoped>
    .main {
        position: relative;
    }

    .img {
        width: 3.47rem;
        height: 3.47rem;
        display: block;
        margin: 0.69rem auto 0.52rem auto;
    }

    .number {
        position: absolute;
        font-size: 1rem;
        font-family: PingFangSC-Regular;
        color: rgba(253, 149, 187, 1);
        top: 0.9rem;
        margin: auto;
        left: 0;
        right: 0;
        text-align: center;
    }

    .text {
        position: absolute;
        font-size: 0.24rem;
        font-family: PingFangSC-Regular;
        color: rgba(102, 102, 102, 1);
        bottom: 1.2rem;
        margin: auto;
        left: 0;
        right: 0;
        text-align: center;
    }

    .conter {
        position: relative;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #ffffff;
    }

    .conter .title {
        width: 7rem;
        height: 1rem;
        font-size: 0.30rem;
        font-family: PingFangSC-Medium;
        color: rgba(20, 20, 20, 1);
        line-height: 1rem;
        margin: 0 auto;
        border-bottom: 0.01rem solid rgba(233, 233, 233, 1);
        margin-bottom: 0.2rem;
    }

    .conter .list {
        width: 7rem;
        height: 1.1rem;
        margin: 0 auto;
        position: relative;
    }

    .conter .list .name {
        width: auto;
        height: 0.37rem;
        font-size: 0.26rem;
        font-family: PingFangSC-Regular;
        color: rgba(174, 174, 174, 1);
        line-height: 0.37rem;
        float: left;
        margin-top: 0.15rem;
        margin-bottom: 0.1rem;
    }

    .conter .list .num {
        position: absolute;
        width: auto;
        height: 0.37rem;
        font-size: 0.26rem;
        font-family: PingFangSC-Regular;
        color: rgba(20, 20, 20, 1);
        line-height: 0.37rem;
        float: right;
        top: 0.5rem;
        right: 0;
    }

    .conter .list .time {
        width: auto;
        height: 0.37rem;
        font-size: 0.26rem;
        font-family: PingFangSC-Regular;
        color: rgba(174, 174, 174, 1);
        line-height: 0.37rem;
        float: left;
    }

</style>