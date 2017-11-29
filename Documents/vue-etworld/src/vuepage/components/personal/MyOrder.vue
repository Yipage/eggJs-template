<template>
    <div class="head">
        <div class="tag">
            <ul class="nav">
                <li class="nav_box" v-bind:class="{pre:isShow1}" @click="onAcitity(1)"
                    @click.prevent="active = 'tab-container1'">
                    全部
                    <i v-bind:class="{pre2:isShow1}"></i>
                </li>
                <li class="nav_box" v-bind:class="{pre:isShow2}" @click="onAcitity(2)"
                    @click.prevent="active = 'tab-container2'">
                    待付款
                    <i v-bind:class="{pre2:isShow2}"></i>
                </li>
                <li class="nav_box" v-bind:class="{pre:isShow3}" @click="onAcitity(3)"
                    @click.prevent="active = 'tab-container3'">
                    待发货
                    <i v-bind:class="{pre2:isShow3}"></i>
                </li>
                <li class="nav_box" v-bind:class="{pre:isShow4}" @click="onAcitity(4)"
                    @click.prevent="active = 'tab-container4'">
                    待收货
                    <i v-bind:class="{pre2:isShow4}"></i>
                </li>
                <li class="nav_box" v-bind:class="{pre:isShow5}" @click="onAcitity(5)"
                    @click.prevent="active = 'tab-container5'">
                    待评价
                    <i v-bind:class="{pre2:isShow5}"></i>
                </li>
            </ul>
        </div>

        <div class="page-tab-container">
            <mt-tab-container class="page-tabbar-tab-container" v-model="active">
                <mt-tab-container-item id="tab-container1">
                    <allorder></allorder>
                </mt-tab-container-item>
                <mt-tab-container-item id="tab-container2">
                    <pay></pay>
                </mt-tab-container-item>
                <mt-tab-container-item id="tab-container3">
                    <shipper></shipper>
                </mt-tab-container-item>
                <mt-tab-container-item id="tab-container4">
                    <receive></receive>
                </mt-tab-container-item>
                <mt-tab-container-item id="tab-container5">
                    <evaluate></evaluate>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
    </div>
</template>

<script>
    import {setTitle} from "../../../assets/js/setTittle"
    import allorder from "./AllOrder.vue"
    import pay from "./Pay.vue"
    import shipper from "./Shipper.vue"
    import receive from "./Receive.vue"
    import evaluate from "./Evaluate.vue"

    export default {
        data() {
            return {
                active: '',
                isShow1: true,
                isShow2: false,
                isShow3: false,
                isShow4: false,
                isShow5: false,
            }
        },
        components: {
            allorder,
            pay,
            shipper,
            receive,
            evaluate
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
        },
        mounted() {
            setTitle("我的订单");

            console.log(this.$route.query.tab);

            if (!this.$route.query.tab) {
                this.active = 'tab-container1'
            } else if (Number(this.$route.query.tab) === 2) {
                this.active = 'tab-container2'
            } else if (Number(this.$route.query.tab) === 3) {
                this.active = 'tab-container3'
            } else if (Number(this.$route.query.tab) === 4) {
                this.active = 'tab-container4'
            } else if (Number(this.$route.query.tab) === 5) {
                this.active = 'tab-container5'
            }

            console.log(this.active, 'this.active');


            if (this.active === 'tab-container1') {
                this.isShow2 = false;
                this.isShow3 = false;
                this.isShow4 = false;
                this.isShow5 = false;
                this.isShow1 = true
            } else if (this.active === 'tab-container2') {
                this.isShow1 = false;
                this.isShow3 = false;
                this.isShow4 = false;
                this.isShow5 = false;
                this.isShow2 = true
            } else if (this.active === 'tab-container3') {
                this.isShow1 = false;
                this.isShow2 = false;
                this.isShow4 = false;
                this.isShow5 = false;
                this.isShow3 = true
            } else if (this.active === 'tab-container4') {
                this.isShow1 = false;
                this.isShow2 = false;
                this.isShow3 = false;
                this.isShow5 = false;
                this.isShow4 = true
            } else if (this.active === 'tab-container5') {
                this.isShow1 = false;
                this.isShow2 = false;
                this.isShow3 = false;
                this.isShow4 = false;
                this.isShow5 = true
            }
        }
    }
</script>

<style scoped>
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


</style>