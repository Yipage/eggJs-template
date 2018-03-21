<style scoped lang="scss">
  .login_img {
    width: 100%;
    height: auto;
  }

  .label_phone, .label_pwd {
    position: relative;
    .login_input {
      width: 6.8rem;
      height: 1rem;
      display: block;
      margin: 0.5rem auto;
      color: #000;
      font-weight: 600;
      font-size: 0.3rem;
      padding-left: 1.5rem;
      border-radius: 0.1rem;
      box-shadow: 0 0 0.02rem 0.0rem rgba(57, 177, 254, 0.1);
    }
    .login_input:nth-child(1) {
      padding-right: 2.5rem;
    }
    .key {
      position: absolute;
      top: 0.3rem;
      right: 0.7rem;
      color: #00a1ff;
      font-weight: bolder;
      font-size: 0.3rem;
      background-color: transparent;
      border: none;
    }
    .line {
      position: absolute;
      width: 2px;
      height: 0.6rem;
      background-color: #dadada;
      background-size: 100%;
      top: 0.2rem;
      left: 1.5rem;
    }
    .phone {
      position: absolute;
      width: 0.6rem;
      height: 0.6rem;
      background: url("/assets/images/ic_login_phone@3x.png") no-repeat;
      background-size: 100%;
      top: 0.2rem;
      left: 0.6rem;
    }
    .pwd {
      position: absolute;
      width: 0.6rem;
      height: 0.6rem;
      background: url("/assets/images/ic_register_check_code@3x.png") no-repeat;
      background-size: 100%;
      top: 0.2rem;
      left: 0.6rem;
    }
  }

  .footer_bt {
    width: 6.8rem;
    height: 1rem;
    margin: 0 auto;
    background-color: #e5e5e5;
    color: #ffffff;
    display: block;
    border: none;
    border-radius: 0.1rem;
    font-size: 0.35rem;
    font-weight: bolder;
  }

  .pre {
    background-color: #00a1ff;
  }

  .disabled {
    pointer-events: none;
  }

</style>

<template>
  <div>
    <img class="login_img" src="~assets/images/pic_login_bg.png"/>
    <div class="label_phone">
      <input class="login_input" v-model="phone" type="number" placeholder="手机号码"
             oninput="if(value.length>11)value=value.slice(0,11)"/>
      <button type="button" class="key" v-bind:class="{disabled : isDisabled}" @click="event().onClick()">{{send}}
      </button>
      <i class="phone"></i>
      <span class="line"></span>
    </div>
    <div class="label_pwd">
      <input class="login_input" placeholder="验证码" v-model="code" type="number"
             oninput="if(value.length>4)value=value.slice(0,4)"/>
      <i class="pwd"></i>
      <span class="line"></span>
    </div>

    <button type="button" v-if="highlight" class="footer_bt pre" @click="event().onLogin()">登录</button>
    <button type="button" v-else="" class="footer_bt">登录</button>

  </div>
</template>

<script>
  import {getMoilbeKey, userLogin} from '~/api/api'
  import {Toast} from 'mint-ui'
  import utils from '~/assets/jslibs/dk-utils'
  import  dkAxios from  '~/assets/jslibs/dk-axios'
  export default {
    data() {
      return {
        phone: '',
        code: '',
        send: '获取验证码',
        time: 60,
        isDisabled: false,
        codeLength: 4,//验证码个数，一般为6或者4位
        phoneLength: 11,//手机号码长度
      }
    },
    created() {
    },
    mounted() {
    },
    methods: {
      event() {
        let self = this
        return {
//          获取验证码
          onClick() {
            console.log(self.phone)
            let Mobile = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
            if (Mobile.test(self.phone)) {
              self.isDisabled = true;
              self.network().getKey()
            } else {
              Toast('请输入正确的手机号码')
            }
          },

          onLogin() {
            self.network().login()
          }
        }
      },
      network() {
        let self = this;
        return {
          /**
           * 获取手机验证码
           * @returns {Promise.<void>}
           */
          async getKey() {
            let {data, status} = await getMoilbeKey(self.phone).catch(error => {
              Toast(error.data.error.message);
              self.isDisabled = false
            });
//              本地存储 temp_code 防止用户刷新操作
            sessionStorage.setItem('temp_code', data.temp_code);
            console.log(data, '获取验证码');
            console.log(status, '获取验证码');
            if (status == '200') {
              //验证码倒计时
              Toast('获取成功')
              let timer = window.setInterval(function () {
                self.time--;
                self.send = self.time + '秒';
                if (self.time === 0) {
                  self.time = 60;
                  self.send = '重新获取';
                  self.isDisabled = false;
                  window.clearInterval(timer);
                }
              }, 1000);
            }
          },
//          登录
          async login() {
            let info = {};
            info.code = self.code;
            info.mobile = self.phone;
            info.temp_code = sessionStorage.getItem('temp_code');
            console.log(info, '登录信息');
            let {data, status} = await userLogin(info).catch(error => {
              console.log(error, 'error')
              Toast(error.data.error.message)
            })
            if (status == 200) {
              Toast('登录成功')
              utils.setCookie('access_token', data.access_token, 7)
              utils.setCookie('refresh_token', data.refresh_token, 30)
              dkAxios.defaults.headers = {
                'X-Access-Token': data.access_token
              }
            }

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
    computed: {
      highlight(){
        return this.code.length == this.codeLength && this.phone.length == this.phoneLength ? true : false
      }
    }
  }
</script>
