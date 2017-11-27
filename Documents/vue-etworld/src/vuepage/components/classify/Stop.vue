<template>
    <div class="shade" @click="onHide()">
        <div class="float" @click.stop="onStop()">
            <img class="ic_header" src="../../../assets/img/ill_1.png"/>
            <p class="buy_name">ET.BABY 存储器</p>
            <p class="buy_price">¥88.9</p>
            <p class="num">数量</p>
            <label class="input_num">
                <i class="minus" @click="onMinus()"></i>
                <input disabled type="number" v-model="number"/>
                <i class="add" @click="onAdd()"></i>
            </label>
            <div style="clear: both"></div>
            <p class="num">颜色</p>
            <div class="xuan">
                <p class="color" v-bind:class="{pre:isColor1}" @click="onColor(1)">红</p>
                <p class="color" v-bind:class="{pre:isColor2}" @click="onColor(2)">黄</p>
                <p class="color" v-bind:class="{pre:isColor3}" @click="onColor(3)">蓝</p>
            </div>
            <div style="clear: both"></div>
            <p class="button" @click="onBuy()">加入购物车</p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                number: 1,
                isColor1: true,
                isColor2: false,
                isColor3: false,
            }
        },
        methods: {
            onMinus() {
                this.number--;
                if (this.number === 0 || this.number < 0) {
                    this.number = 1
                }
            },
            onAdd() {
                this.number++;
            },
            onColor(index) {
                this.isColor1 = false;
                this.isColor2 = false;
                this.isColor3 = false;
                switch (index) {
                    case 1:
                        this.isColor1 = true;
                        break;
                    case 2:
                        this.isColor2 = true;
                        break;
                    case 3:
                        this.isColor3 = true;
                        break;
                }
            },
            onHide() {
                this.$parent.isShade = false;
            },
            onStop() {},
            onBuy() {
                this.$router.push({path: '/order'})
            }
        }
    }
</script>

<style scoped>
    .shade {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(20, 20, 20, 0.6);
        z-index: 300;
    }

    .shade .float {
        width: 100%;
        height: auto;
        background: rgba(255, 255, 255, 1);
        position: fixed;
        z-index: 200;
        bottom: 0;
    }

    .shade .float .ic_header {
        width: 1.77rem;
        height: 1.77rem;
        background: rgba(255, 255, 255, 1);
        border-radius: 0.10rem;
        border: 0.01rem solid rgba(207, 207, 207, 1);
        position: absolute;
        top: -0.46rem;
        left: 0.46rem;
    }

    .shade .float .buy_name {
        width: auto;
        height: 0.45rem;
        font-size: 0.32rem;
        font-family: PingFangSC-Medium;
        color: rgba(20, 20, 20, 1);
        line-height: 0.45rem;
        margin: 0.2rem 0 0.20rem 2.66rem;
    }

    .shade .float .buy_price {
        width: auto;
        height: 0.45rem;
        font-size: 0.32rem;
        font-family: PingFangSC-Medium;
        color: rgba(253, 149, 187, 1);
        line-height: 0.45rem;
        margin: 0.2rem 0 0.20rem 2.66rem;
    }

    .shade .float .num {
        width: 0.9rem;
        height: 0.45rem;
        font-size: 0.32rem;
        font-family: PingFangSC-Regular;
        color: rgba(20, 20, 20, 1);
        line-height: 0.45rem;
        margin: 0.75rem 0 0.20rem 0.45rem;
        float: left;
    }

    .shade .float .input_num {
        width: 0.5rem;
        height: 0.45rem;
        font-size: 0.32rem;
        font-family: PingFangSC-Medium;
        color: rgba(20, 20, 20, 1);
        line-height: 0.45rem;
        display: inline-block;
        margin: 0.75rem 0 0.20rem 4rem;
        position: relative;
    }

    .shade .float .input_num .minus {
        position: absolute;
        width: 0.40rem;
        height: 0.40rem;
        background: rgba(253, 149, 187, 1);
        border-radius: 0.10rem;
        top: 0.05rem;
        left: -1.2rem;
    }

    .shade .float .input_num .add {
        position: absolute;
        width: 0.40rem;
        height: 0.40rem;
        background: rgba(253, 149, 187, 1);
        border-radius: 0.10rem;
        top: 0.05rem;
        left: 1.2rem;
    }

    .shade .float .input_num input {
        width: 0.5rem;
        height: 0.45rem;
    }

    .pre {
        background: rgba(207, 207, 207, 1) !important;
        color: #ffffff !important;
    }

    input:disabled, textarea:disabled {
        -webkit-text-fill-color: rgba(20, 20, 20, 1) !important;
        -webkit-opacity: 1;
        color: rgba(20, 20, 20, 1) !important;
    }

    .xuan {
        width: 4rem;
        float: right;
        height: auto;
        margin-top: 0.3rem;
    }

    .xuan .color {
        width: 1.01rem;
        height: 0.49rem;
        /*background: rgba(207, 207, 207, 1);*/
        border-radius: 0.10rem;
        font-size: 0.24rem;
        font-family: PingFangSC-Regular;
        color: rgba(153, 153, 153, 1);
        line-height: 0.49rem;
        display: inline-block;
        text-align: center;
        margin-top: 0.05rem;
    }

    .float .button {
        width: 6.75rem;
        height: 0.90rem;
        background: rgba(57, 177, 254, 1);
        border-radius: 0.10rem;
        margin: 0.42rem auto;
        margin-top: 0.6rem;
        box-shadow: 0 0.2rem 0.58rem rgba(62, 149, 205, 0.3);
        font-size: 0.32rem;
        font-family: PingFangSC-Regular;
        color: rgba(255, 255, 255, 1);
        line-height: 0.90rem;
        text-align: center;
    }

</style>