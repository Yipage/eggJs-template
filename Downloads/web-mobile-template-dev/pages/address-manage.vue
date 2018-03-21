<style scoped>
  .edit {
    width: 100%;
    height: 0.8rem;
    background-color: #ffffff;
    position: relative;
    border-top: 1px solid RGBA(225, 225, 225, 1);
  }

  .set {
    position: absolute;
    width: 0.40rem;
    height: 0.40rem;
    background: url("~/assets/images/ic_write.png") no-repeat;
    background-size: 100%;
    bottom: 0.2rem;
    right: 2.3rem;
  }

  .bianji {
    position: absolute;
    width: 1rem;
    font-size: 0.26rem;
    right: -1.1rem;
    top: 0.03rem;
    color: #999999;
  }

  .del {
    position: absolute;
    width: 0.38rem;
    height: 0.40rem;
    background: url("~/assets/images/ic_del.png") no-repeat;
    background-size: 100%;
    bottom: 0.17rem;
    font-size: 0.3rem;
    right: 1rem;
  }

  .default_icon {
    background: url("~/assets/images/ic_choose.png") no-repeat;
    background-size: 100%;
    position: absolute;
    width: .32rem;
    height: .32rem;
    left: 0.34rem;
    top: 0.23rem;
  }

  .default_icon_2 {
    background: url("~/assets/images/ic_choose.png") no-repeat;
    background-size: 100%;
    position: absolute;
    width: .32rem;
    height: .32rem;
    left: 0.34rem;
    top: 0.23rem;
  }

  .default {
    margin-left: 0.85rem;
    font-size: 0.24rem;
    font-family: PingFangSC-Regular;
    color: rgba(102, 102, 102, 1);
    line-height: 0.8rem
  }

  .shangchu {
    position: absolute;
    width: 0.8rem;
    font-size: 0.26rem;
    right: -0.9rem;
    top: 0;
    color: #999999;
  }

  .main {
    margin-bottom: 0.2rem;
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
    border-radius: 0.08rem;
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
    <!--一个地址-->
    <div class="main" v-for="(item,index) in 2" :key="index" @click="onEnd(item)">
      <div class="site2">
        <span class="user_name2">123123</span>
        <span class="user_moblie2">123123</span>
        <div style="clear: both"></div>
        <p class="user_site2">123123123123123</p>
      </div>
      <!--编辑-->
      <div class="edit">
        <!--<i v-if="item.is_default == 1" @click.stop="onDefault(item)" class="default_icon_2"></i>-->
        <!--<i v-else="" class="default_icon" @click.stop="onDefault(item)"></i>-->
        <i class="default_icon" @click.stop="onDefault()"></i>
        <div class="default" @click.stop="onDefault()">默认地址</div>
        <div class="set" @click.stop="onSet()"><span class="bianji">编辑</span></div>
        <div class="del" @click.stop="onDel()"><span class="shangchu">删除</span></div>
      </div>
    </div>
    <!--底部-->
    <div style="width: 100%; height: 1.2rem"></div>
    <div class="footer" @click="onAdd()">新建地址</div>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    created() {

    },
    mounted() {
    },
    methods: {
      event() {
        let self = this
        return {
          onClick() {

          }
        }
      },
      network() {
        let self = this
        return {
          getListA() {

          }
        }
      },
      handler() {
        let self = this
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
