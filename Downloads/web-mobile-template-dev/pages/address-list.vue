<style scoped>
  .header {
    width: 100%;
    height: .8rem;
    background: rgba(255, 255, 255, 1);
    border-bottom: 1px RGBA(233, 233, 233, 1) solid;
  }

  .header .left {
    line-height: .8rem;
    float: left;
    margin-left: .2rem;
  }

  .header .right {
    line-height: .8rem;
    float: right;
    margin-right: .2rem;
  }

  .main2 {
    margin-bottom: 0.2rem;
    position: relative;
  }

  .main2 .line{
    position: absolute;
    width: 100%;
    bottom: 0;
  }

  .main {
    border-bottom: 1px RGBA(233, 233, 233, 1) solid;
  }

  .site2 {
    width: 100%;
    height: auto;
    background: rgba(255, 255, 255, 1);
    position: relative;
    padding-bottom: 0.22rem;
  }

  .site2 .user_name2 {
    width: auto;
    height: auto;
    display: block;
    font-size: 0.30rem;
    font-family: PingFangSC-Regular;
    color: rgba(51, 51, 51, 1);
    line-height: 0.45rem;
    margin: 0.22rem 0 0 0.23rem;
    float: left;
    max-width: 5.7rem;
  }

  .site2 .user_moblie2 {
    width: auto;
    height: auto;
    font-size: 0.28rem;
    font-family: PingFangSC-Regular;
    color: rgba(51, 51, 51, 1);
    line-height: 0.42rem;
    display: block;
    float: right;
    margin: 0.22rem 0.4rem 0 0;
    max-width: 5.7rem;
  }

  .site2 .user_site2 {

    width: auto;
    height: auto;
    font-size: 0.28rem;
    font-family: PingFangSC-Regular;
    color: RGBA(51, 51, 51, 0.87);
    line-height: 0.33rem;
    margin: 0.22rem 0 0 0.23rem;
    position: relative;
    max-width: 7rem;
  }

  .footer {
    width: 100%;
    height: 0.92rem;
    background: RGBA(245, 166, 35, 1);
    font-size: 0.32rem;
    font-family: PingFangSC-Regular;
    color: rgba(255, 255, 255, 1);
    line-height: 0.92rem;
    text-align: center;
    position: fixed;
    margin: auto;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>
<template>
  <div>
    <div class="header">
      <span class="left">默认收货地址</span>
      <span class="right" @click="event().manage()">管理</span>
    </div>
    <div class="main2">
      <div class="site2">
        <span class="user_name2">1231</span>
        <span class="user_moblie2">123123123</span>
        <div style="clear: both"></div>
        <p class="user_site2">2131231231232131231</p>
      </div>
      <img class="line" src="~/assets/images/line.png"/>
    </div>


    <!--一个地址-->
    <!--<div class="main" v-for="(item,index) in siteArr" :key="index">-->
    <!--<div class="site2">-->
    <!--<span class="user_name2">{{item.name}}</span>-->
    <!--<span class="user_moblie2">{{item.mobile}}</span>-->
    <!--<div style="clear: both"></div>-->
    <!--<p class="user_site2">{{item.address.province}}{{item.address.city}}{{item.address.county}}{{item.address.detail}}</p>-->
    <!--</div>-->
    <!--</div>-->

    <div class="main" v-for="(item,index) in 3" :key="index">
      <div class="site2">
        <span class="user_name2">1231</span>
        <span class="user_moblie2">123123123</span>
        <div style="clear: both"></div>
        <p class="user_site2">2131231231232131231</p>
      </div>
    </div>

    <!--底部-->
    <div style="width: 100%; height: 1.2rem"></div>
    <div class="footer" @click="event().onAdd()">新建地址</div>
  </div>
</template>
<script>
  import {getAddressList} from '~/api/api'

  export default {
    data() {
      return {
        siteArr: []
      }
    },
    created() {
      this.network().getList();
    },
    mounted() {
    },
    methods: {
      event() {
        let self = this;
        return {
          onAdd() {
            self.$router.push({path:'/address-add-edit'})
          },
          manage(){
            self.$router.push({path:'/address-manage'})
          }
        }
      },
      network() {
        let self = this;
        return {
          /**
           * 获取地址列表
           * @returns {Promise.<void>}
           */
          async getList() {
            let {data} = await getAddressList();
            self.siteArr = data
          },
        }
      },
      handler() {
        let self = this;
        return {
          handleListA() {

          }
        }
      }
    },
    watch: {},
    computed: {}
  }
</script>
