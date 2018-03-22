<style scoped>
  .bg {
    width: 100%;
    height: 6.5rem;
    background: rgba(255, 255, 255, 1);
  }

  .main {
    width: 7rem;
    height: 5rem;
    margin: 0 auto;
  }

  .main .user_name {
    width: auto;
    height: 1.07rem;
    font-size: 0.28rem;
    font-family: PingFangSC-Regular;
    color: rgba(20, 20, 20, 1);
    line-height: 1.07rem;
    border-bottom: 1px solid rgba(233, 233, 233, 1);
  }

  .main .user_mobile {
    width: auto;
    height: 1.07rem;
    font-size: 0.28rem;
    font-family: PingFangSC-Regular;
    color: rgba(20, 20, 20, 1);
    line-height: 1.07rem;
    border-bottom: 1px solid rgba(233, 233, 233, 1);
  }

  .main input {
    border: none;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .main .user_site {
    width: auto;
    height: 0.85rem;
    font-size: 0.28rem;
    font-family: PingFangSC-Regular;
    color: rgba(20, 20, 20, 1);
    line-height: 0.85rem;
    position: relative;
    border-bottom: 1px solid rgba(233, 233, 233, 1);
  }

  .main .minute {
    width: 100%;
    height: 2.2rem;
    display: block;
    text-align: left;
    border: 0.02rem #dadada dashed;
    margin: 0 auto;
    padding: 0.3rem 0.3rem;
    resize: none;
    box-shadow: none;
  }

  .text1 {
    width: auto;
    height: 1.6rem;
    font-size: 0.28rem;
    font-family: PingFangSC-Regular;
    color: rgba(20, 20, 20, 1);
    line-height: .88rem;
    position: relative;
    display: block;
    background-color: #ffffff;
    padding-left: 0.36rem;
  }

  .page-part {
    position: absolute;
    right: 0.3rem;
    top: 0.15rem;
  }

  .footer {
    width: 6.75rem;
    height: 0.92rem;
    background: RGBA(245, 166, 35, 1);
    border-radius: 0.05rem;
    font-size: 0.32rem;
    font-family: PingFangSC-Regular;
    color: rgba(255, 255, 255, 1);
    line-height: 0.92rem;
    text-align: center;
    margin: 0.7rem auto;
  }

  .tishi {
    font-size: .24rem;
    font-family: PingFangSC-Regular;
    color: rgba(153, 153, 153, 1);
    margin-top: -0.4rem;
  }

  #demo1 {
    width: 4.5rem;
    height: 0.8rem;
    border: none;
    line-height: 0.85rem;
    float: right;
    text-align: right;
    margin-right: 0.3rem;
  }

  input, textarea {
    font-size: 0.28rem;
  }
</style>
<template>
  <div>
    <div class="bg">
      <div class="main">
        <p class="user_name"><span>收货人：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><input type="text"
                                                                                         v-model="username"
                                                                                         placeholder="请输入收货人姓名"/>
        </p>
        <p class="user_mobile"><span>联系电话：&nbsp;&nbsp;&nbsp;&nbsp;</span><input type="tel" v-model="phone"
                                                                                placeholder="请输入联系电话"/>
        </p>
        <p class="user_site">
          <span>所在地区：&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <input id="demo1" type="text" v-on:focus="event().onVal()" v-model="val" placeholder="请选择"/>
        </p>
        <p class="user_site">详细地址：</p>
        <textarea class="minute" v-model="detail" placeholder="请填写详细地址，不少于5个字"></textarea>
      </div>
    </div>

    <div class="text1">设为默认地址
      <p class="tishi">注：每次下单时会使用该地址</p>
      <div class="page-part page-switch-padding">
        <mt-switch v-model="value1" @change="handleChange"></mt-switch>
      </div>
    </div>
    <div class="footer" @click="event().onSave()">保存</div>

  </div>
</template>
<script>
  import {LAreaData} from '~/assets/jslibs/LAreaData1'
  import {getAddAddress} from '~/api/api'

  export default {
    data() {
      return {
        value1: false,
        username: '',
        phone: '',
        province: '',
        city: '',
        county: '',
        detail: '',
        is_default: 0,
        val: '',
      }
    },
    mounted() {
      //初始化地址选择
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
    },
    methods: {
      handleChange(event) {
        console.log(event);
        event ? this.is_default = 0 : this.is_default = 1;
        console.log(this.is_default, 'is_default')
      },
      event() { 
        let self = this
        return {
          onVal() {
            console.log('获得焦点');
            document.activeElement.blur();//屏蔽默认键盘弹出；
          },
          onSave() {
            console.log(self.username, 'username')
            console.log(self.phone, 'phone')
            console.log(self.province, 'province')
            console.log(self.city, 'city')
            console.log(self.county, 'county')
            console.log(self.detail, 'detail')
            console.log(self.is_default, 'is_default')
          }
        }
      },
      network() {
        let self = this
        return {
          /**
           * 新增地址
           * @returns {Promise.<void>}
           */
          async addSite(info) {
            let {data, status} = await getAddAddress(info);
          }
        }
      },
      handler() {
        let self = this
        return {}
      }
    },
    watch: {
      val: function (val) {
        console.log(val);
        let that = this;
//      将选择的地址分为数组存放
        let site = val;
        let m = site.split(",");
        that.province = m[0];
        that.city = m[1];
        that.county = m[2];
      }
    },
    computed: {}
  }
</script>
