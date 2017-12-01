<template>
    <div>
        <div class="header">
            <p class="yuan" v-bind:class="{per:isDan2 === 'all'}" @click="onAll()"></p>
            <p class="all">全选</p>
            <p class="set" @click="onEnd()">完成</p>
        </div>
        <div class="main">
            <div class="box">
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
        </div>

        <div class="main">
            <div class="box">
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
        </div>
        <div class="footer">删除</div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                number: 1,
                isDan: '',
                isDan2: '',
            }
        },
        methods: {
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
            onEnd(){
                this.$router.push({path:'/shopping'})
            }
        },
        mounted(){

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
                    margin-top: 0.07rem;
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
        background: rgba(255,65,93,1)
        position: fixed
        bottom: 0
        box-shadow: 0 0.20rem 0.58rem rgba(0,0,0,0.2)
        font-size: 0.32rem
        font-family: PingFangSC-Regular;
        color: rgba(255,255,255,1);
        line-height: 0.90rem
        text-align: center
</style>