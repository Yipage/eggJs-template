<template>
    <div>
        <div class="site">
            <span class="user_name">算什么男人</span>
            <span class="user_moblie">13499380000</span>
            <div style="clear: both"></div>
            <p class="user_site">广东省深圳市龙岗区龙城街道花样年龙年广场13a01</p>
        </div>

        <div class="main">
            <div class="site2">
                <span class="user_name2">算什么男人</span>
                <span class="user_moblie2">13499380000</span>
                <div style="clear: both"></div>
                <p class="user_site2">广东省深圳市龙岗区龙城街道花样年龙年广场13a01</p>
            </div>
            <div class="site2">
                <span class="user_name2">算什么男人</span>
                <span class="user_moblie2">13499380000</span>
                <div style="clear: both"></div>
                <p class="user_site2">广东省深圳市龙岗区龙城街道花样年龙年广场13a01</p>
            </div>
            <div class="site2">
                <span class="user_name2">算什么男人</span>
                <span class="user_moblie2">13499380000</span>
                <div style="clear: both"></div>
                <p class="user_site2">广东省深圳市龙岗区龙城街道花样年龙年广场13a01</p>
            </div>
        </div>

        <div class="footer">新建地址</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>

<style scoped>
    .site {
        width: 100%;
        height: 1.56rem;
        background: rgba(255, 255, 255, 1);
    }

    .site .user_name {
        width: auto;
        height: 0.45rem;
        display: block;
        font-size: 0.32rem;
        font-family: PingFangSC-Medium;
        color: rgba(51, 51, 51, 1);
        line-height: 0.45rem;
        margin: 0.22rem 0 0 0.70rem;
        float: left;
    }

    .site .user_moblie {
        width: auto;
        height: 0.42rem;
        font-size: 0.30rem;
        font-family: PingFangSC-Regular;
        color: rgba(51, 51, 51, 1);
        line-height: 0.42rem;
        display: block;
        float: left;
        margin: 0.22rem 0 0 0.70rem;
    }

    .site .user_site {
        width: auto;
        height: 0.33rem;
        font-size: 0.24rem;
        font-family: PingFangSC-Regular;
        color: rgba(153, 153, 153, 1);
        line-height: 0.33rem;
        margin: 0.22rem 0 0 0.70rem;
        position: relative;
    }

    .site .user_site::after {
        content: '';
        position: absolute;
        width: 0.30rem;
        height: 0.30rem;
        background: rgba(57, 177, 254, 1);
        top: 0;
        left: -0.5rem;
    }

    .site .user_site::before {
        content: '';
        position: absolute;
        width: 0.30rem;
        height: 0.30rem;
        background: url("../../../assets/img/ic_bianji.png") no-repeat;
        background-size: 100%;
        top: 0;
        right: 0.5rem;
    }

    .main {
        margin-top: 0.2rem;
    }

    .site2 {
        width: 100%;
        height: 1.56rem;
        background: rgba(255, 255, 255, 1);
    }

    .site2 .user_name2 {
        width: auto;
        height: 0.45rem;
        display: block;
        font-size: 0.32rem;
        font-family: PingFangSC-Medium;
        color: rgba(51, 51, 51, 1);
        line-height: 0.45rem;
        margin: 0.22rem 0 0 0.23rem;
        float: left;
    }

    .site2 .user_moblie2 {
        width: auto;
        height: 0.42rem;
        font-size: 0.30rem;
        font-family: PingFangSC-Regular;
        color: rgba(51, 51, 51, 1);
        line-height: 0.42rem;
        display: block;
        float: left;
        margin: 0.22rem 0 0 0.23rem;
    }

    .site2 .user_site2 {
        width: auto;
        height: 0.33rem;
        font-size: 0.24rem;
        font-family: PingFangSC-Regular;
        color: rgba(153, 153, 153, 1);
        line-height: 0.33rem;
        margin: 0.22rem 0 0 0.23rem;
        position: relative;
    }

    .site2 .user_site2::before {
        content: '';
        position: absolute;
        width: 0.30rem;
        height: 0.30rem;
        background: url("../../../assets/img/ic_bianji.png") no-repeat;
        background-size: 100%;
        top: 0;
        right: 0.5rem;
    }

    .footer {
        width: 100%;
        height: 0.90rem;
        background: rgba(57, 177, 254, 1);
        font-size: 0.32rem;
        font-family: PingFangSC-Regular;
        color: rgba(255, 255, 255, 1);
        line-height: 0.90rem;
        text-align: center;
        position: fixed;
        bottom: 0;
        box-shadow: 0 0.2rem 0.58rem rgba(62, 149, 205, 0.3);
    }

</style>