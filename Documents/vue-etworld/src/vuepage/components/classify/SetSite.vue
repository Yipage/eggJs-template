<template>
    <div class="bg">
        <div class="main">
            <p class="user_name"><span>收货人：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>算什么男人</span></p>
            <p class="user_mobile"><span>联系方式：&nbsp;&nbsp;&nbsp;&nbsp;</span><span>18814002160</span></p>
            <p class="user_site">
                <span>所在地区：&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <!--readonly用于只读-->
                <input id="demo1" readonly placeholder="请选择所在地区"/>
            </p>
            <p class="default_site">详细地址：</p>
            <textarea class="minute" placeholder="请输入你的详细地址"></textarea>
            <p class="text1">设为默认地址</p>
            <p class="text2">注：每次下单时会使用该地址</p>
        </div>
        <div class="footer">保存</div>
    </div>
</template>

<script>
    import {setTitle} from '../../../assets/js/setTittle'
    import {LAreaData} from '../../../assets/js/LAreaData1'

    export default {
        data() {
            return {}
        },
        mounted() {
            setTitle("新增地址")
//          初始化地址选择
            let area1 = new LArea();
            area1.init({
                'trigger': '#demo1', //触发选择控件的文本框，同时选择完毕后name属性输出到该位置
                'keys': {
                    id: 'id',
                    name: 'name'
                }, //绑定数据源相关字段 id对应valueTo的value属性输出 name对应trigger的value属性输出
                'type': 1, //数据源类型
                'data': LAreaData //数据源
            });
            area1.value = [1, 13, 3];//控制初始位置，注意：该方法并不会影响到input的value
        }
    }
</script>

<style scoped>
    .bg {
        width: 100%;
        height: 7.72rem;
        background: rgba(255, 255, 255, 1);
    }

    .main {
        width: 7rem;
        height: 7.72rem;
        margin: 0 auto;
    }

    .main .user_name {
        width: auto;
        height: 1.07rem;
        font-size: 0.28rem;
        font-family: PingFangSC-Regular;
        color: rgba(20, 20, 20, 1);
        line-height: 1.07rem;
        border-bottom: 0.01rem solid rgba(233, 233, 233, 1);
    }

    .main .user_mobile {
        width: auto;
        height: 1.07rem;
        font-size: 0.28rem;
        font-family: PingFangSC-Regular;
        color: rgba(20, 20, 20, 1);
        line-height: 1.07rem;
        border-bottom: 0.01rem solid rgba(233, 233, 233, 1);
    }

    .main .user_site {
        width: auto;
        height: 0.85rem;
        font-size: 0.28rem;
        font-family: PingFangSC-Regular;
        color: rgba(20, 20, 20, 1);
        line-height: 0.85rem;
        position: relative;
    }

    .main .user_site::before {
        content: '';
        position: absolute;
        width: 0.30rem;
        height: 0.30rem;
        background: url("../../../assets/img/ic_enter.png") no-repeat;
        background-size: 100%;
        top: 0.3rem;
        right: 0;
    }

    .main .default_site {
        width: auto;
        height: 0.85rem;
        font-size: 0.28rem;
        font-family: PingFangSC-Regular;
        color: rgba(20, 20, 20, 1);
        line-height: 0.85rem;
    }

    .main .minute {
        width: 6.3rem;
        height: 1.39rem;
        display: block;
        text-align: left;
        border: 0.01rem #dadada dashed;
        margin: 0 auto;
        padding: 0.3rem;
        resize: none;
    }

    .main .text1 {
        width: auto;
        height: 0.40rem;
        font-size: 0.28rem;
        font-family: PingFangSC-Regular;
        color: rgba(20, 20, 20, 1);
        line-height: 0.40rem;
        margin-top: 0.5rem;
        margin-bottom: 0.2rem;
        position: relative;
    }

    .main .text1::before {
        content: '';
        position: absolute;
        width: 0.88rem;
        height: 0.46rem;
        background: url("../../../assets/img/ic_on.png") no-repeat;
        background-size: 100%;
        top: 0.3rem;
        right: 0;
    }

    .main .text2 {
        width: auto;
        height: 0.33rem;
        font-size: 0.24rem;
        font-family: PingFangSC-Regular;
        color: rgba(153, 153, 153, 1);
        line-height: 0.33rem;
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

    #demo1 {
        width: 5rem;
        height: 0.85rem;
        border: none;
        line-height: 0.85rem;
    }

</style>