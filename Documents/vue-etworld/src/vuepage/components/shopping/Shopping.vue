<template>
    <div>
        <payment v-if="isShow"></payment>
        <paytype v-if="isType"></paytype>

        <div class="header">
            <i class="yuan" v-bind:class="{per:isDan2 === 'all'}" @click="onAll()"></i>
            <p class="all">全选</p>
            <p class="set" @click="onSet()">编辑</p>
        </div>
        <div class="main" @click="onOrder()">
            <div class="box" @touchmove="onShowDel(0)" :style="{left:isActive===0?'-1.24rem':'0'}">
                <i class="dan" v-bind:class="{per:isDan === 0}" @click="onDan(0)"></i>
                <img class="img" src="../../../assets/img/ill_1.png" alt=""/>
                <p class="name">ET.BABY 存储器</p>
                <p class="color">颜色：红</p>
                <p class="price">¥88.8</p>
                <label class="input_num">
                    <i class="minus" @click="onMinus()"></i>
                    <input disabled type="number" v-model="number"/>
                    <i class="add" @click="onAdd()"></i>
                </label>
            </div>
            <div class="delect" :style="{right:isActive===0?'0':'-1.24rem'}">删除</div>
        </div>

        <div class="main">
            <div class="box" @touchmove="onShowDel(1)" :style="{left:isActive===1?'-1.24rem':'0'}">
                <i class="dan" v-bind:class="{per:isDan === 1}" @click="onDan(1)"></i>
                <img class="img" src="../../../assets/img/ill_1.png" alt=""/>
                <p class="name">ET.BABY 存储器</p>
                <p class="color">颜色：红</p>
                <p class="price">¥88.8</p>
                <label class="input_num">
                    <i class="minus" @click="onMinus()"></i>
                    <input disabled type="number" v-model="number"/>
                    <i class="add" @click="onAdd()"></i>
                </label>
            </div>
            <div class="delect" :style="{right:isActive===1?'0':'-1.24rem'}">删除</div>
        </div>

        <div class="footer">
            <p class="s_price">共 1 件商品，实付款：¥<span class="price">529.00</span></p>
            <p class="count" @click="onPay()">结算</p>
        </div>
    </div>
</template>

<script>
    import {setTitle} from "../../../assets/js/setTittle"
    import payment from '../personal/Payment.vue'
    import paytype from '../personal/PayType.vue'

    export default {
        data() {
            return {
                number: 1,
                isDel: true,
                isActive: '',
                isDan: '',
                isDan2: '',
                isShow: false,
                isType: false,
            }
        },
        components: {
            payment,
            paytype
        },
        methods: {
            onOrder(){
                this.$router.push({path:'/order'})
            },
            onAll(){
                if(this.isDan2 !== 'all'){
                    this.isDan2 = 'all';
                    window.$('.dan').addClass('per');
                }else {
                    this.isDan2 = '';
                    window.$('.dan').removeClass('per');
                }
            },
            onDan(index){
                this.isDan2 = '';
                this.isDan = '';
                window.$('.dan').removeClass('per');
                this.isDan = index;
            },
            onMinus() {
                this.number--;
                if (this.number === 0 || this.number < 0) {
                    this.number = 1
                }
            },
            onAdd() {
                this.number++;
            },
            onPay(){
                this.isShow = true
            },
            //切换样式
            onShowDel(index) {
                let that = this;
                //返回角度
                function GetSlideAngle(dx, dy) {
                    return Math.atan2(dy, dx) * 180 / Math.PI;
                }
                //根据起点和终点返回方向 1：向上，2：向下，3：向左，4：向右,0：未滑动
                function GetSlideDirection(startX, startY, endX, endY) {
                    var dy = startY - endY;
                    var dx = endX - startX;
                    var result = 0;

                    //如果滑动距离太短
                    if (Math.abs(dx) < 2 && Math.abs(dy) < 2) {
                        return result;
                    }

                    var angle = GetSlideAngle(dx, dy);

                    if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
                        result = 1;
                    } else if (angle >= -45 && angle <= 45) {
                        result = 2;
                    }
                    return result;
                }
                //滑动处理
                var startX, startY;
                $('.box')[index].addEventListener('touchstart', function (ev) {
                    startX = ev.touches[0].pageX;
                    startY = ev.touches[0].pageY;
                }, false);
                $('.box')[index].addEventListener('touchend', function (ev) {
                    var endX, endY;
                    endX = ev.changedTouches[0].pageX;
                    endY = ev.changedTouches[0].pageY;
                    var direction = GetSlideDirection(startX, startY, endX, endY);
                    switch (direction) {
                        case 1:
                            console.log('左划');
                            that.isActive = index;
                            break;
                        case 2:
                            console.log('右滑');
                            that.isActive = '';
                            break;
                        default:
                    }
                }, false);
            },
            onSet(){
                this.$router.push({path:'/setshop'})
            }
        },
        mounted(){
            setTitle("购物车");
        }
    };
</script>

<style scoped lang="sass">
    .header
        width: 7.50rem
        height: 0.80rem
        background: rgba(255, 255, 255, 1)
        font-size: 0.24rem
        font-family: PingFangSC-Regular
        color: rgba(153, 153, 153, 1)
        line-height: 0.80rem
        position: relative
        .yuan
            width: 0.42rem
            height: 0.42rem
            background: rgba(255, 255, 255, 1)
            border: 0.01rem solid rgba(207, 207, 207, 1)
            border-radius: 100%
            line-height: 0.80rem
            position: absolute
            top: 0.18rem
            left: 0.16rem
        .per
            background: rgba(57,177,254,1)
            border: none
        .all
            float: left
            margin-left: 0.75rem
        .set
            float: right
            margin-right: 0.35rem
    .main
        width: 100%
        height: 1.93rem
        background-color: #ffffff
        border-bottom: 0.01rem solid #eeeeee
        position: relative
        overflow: hidden
        margin-top: 0.2rem
        .box
            width: 100%
            height: 1.93rem
            position: absolute
            left: 0
            transition: all 0.2s
            -webkit-transition: all 0.2s
            .dan
                width: 0.42rem
                height: 0.42rem
                background: rgba(255, 255, 255, 1)
                border: 0.01rem solid rgba(207, 207, 207, 1)
                border-radius: 100%
                position: absolute
                top: 0.75rem
                left: 0.16rem
            .per
                background: rgba(57,177,254,1)
                border: none
            .img
                width: 1.50rem
                height: 1.50rem
                margin: 0.21rem 0.33rem 0 0.76rem
                display: block
                float: left
                border: 0.01rem solid rgba(233,233,233,1)
            .name
                width: auto
                height: 0.30rem
                font-size: 0.30rem
                font-family: PingFangSC-Regular
                color: rgba(20, 20, 20, 1)
                line-height: 0.30rem
                padding-top: 0.25rem
            .color
                width: auto
                height: 0.33rem
                font-size: 0.24rem
                font-family: PingFangSC-Regular
                color: rgba(174, 174, 174, 1)
                line-height: 0.33rem
                padding-top: 0.36rem
                padding-bottom: 0.15rem
            .price
                width: auto
                height: 0.33rem
                font-size: 0.24rem
                font-family: PingFangSC-Medium
                color: rgba(253, 149, 187, 1)
                line-height: 0.33rem
                float: left
            .input_num
                width: 0.5rem
                height: 0.45rem
                font-size: 0.32rem
                font-family: PingFangSC-Medium
                color: rgba(20, 20, 20, 1)
                line-height: 0.45rem
                display: inline-block
                position: absolute
                right: 1.5rem
                bottom: 0.3rem
                .minus
                    position: absolute
                    width: 0.60rem
                    height: 0.60rem
                    background: url("../../../assets/img/ic_jian.png") no-repeat
                    background-size: 100%
                    border-radius: 0.10rem
                    top: 0
                    left: -1.2rem
                .add
                    position: absolute
                    width: 0.60rem
                    height: 0.60rem
                    background: url("../../../assets/img/ic_jia.png") no-repeat
                    background-size: 100%
                    border-radius: 0.10rem
                    top: 0
                    left: 1.2rem
                input
                    width: 0.5rem
                    height: 0.45rem
                    text-align: center
                    font-size: 0.32rem
                    font-family: PingFangSC-Medium
                    background-color: #ffffff
                    border: none
            .del
                width: 0.30rem
                height: 0.30rem
                background: url("../../../assets/img/ic_enter.png") no-repeat
                background-size: 100%
                position: absolute
                top: 0.3rem
                right: 0.3rem

        .delect
            width: 1.24rem
            height: 1.94rem
            background: rgba(255,92,108,1)
            font-size: 0.24rem
            font-family: PingFangSC-Regular
            color: rgba(255,255,255,1)
            line-height: 1.94rem
            text-align: center
            position: absolute
            right: -2.326rem
            transition: right 0.2s

    .footer
        width: 100%
        height: 0.90rem
        background: rgba(255,255,255,1)
        position: fixed
        bottom: 0
        box-shadow: 0 0.20rem 0.58rem rgba(0,0,0,0.2)
        .s_price
            width: auto
            height: 0.90rem
            font-size: 0.24rem
            font-family: PingFangSC-Regular
            color: rgba(51, 51, 51, 1)
            line-height: 0.90rem
            text-align: left
            margin-left: 0.60rem
            float: left
        .price
            width: auto
            height: 0.90rem
            font-size: 0.36rem
            font-family: PingFangSC-Regular
            color: rgba(250, 126, 173, 1)
            line-height: 0.90rem
            text-align: right
            margin-left: 0.1rem
        .count
            width: 2.5rem
            height: 0.90rem
            background: rgba(57,177,254,1)
            float: right
            font-size: 0.32rem
            font-family: PingFangSC-Regular
            color: rgba(255,255,255,1)
            text-align: center
            line-height: 0.90rem
</style>