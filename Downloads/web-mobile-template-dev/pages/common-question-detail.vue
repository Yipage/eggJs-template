<style scoped lang="scss">
  * {
    /*为元素设定的宽度和高度决定了元素的边框盒*/
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }

  /*取消H5浏览器聚焦样式*/
  img, button, textarea, input, a {
    color: #333333;
    vertical-align: middle;
    border: none;
    outline: medium !important;
    text-decoration: none;
  }
  .content{
    padding: .2rem;
  }
</style>

<template>
  <div class="question">
    <div class="content" v-html='obj.content'></div>
  </div>
</template>

<script>
  import {getDetail} from '~/api/api'
  import {Toast,Indicator} from 'mint-ui'

  export default {
    data() {
      return {
        obj:{}
      }
    },
    created() {

    },
    mounted() {
      let uuid = this.$route.query.uuid;
      this.network().get_detail(uuid);
    },
    methods: {
      event() {
        let self = this
        return {


        }
      },
      network() {
        let self = this;
        return {
          //获取详情
          async get_detail(uuid) {
              Indicator.open({
                text: 'Loading...',
                spinnerType: 'fading-circle'
              });
              let {data, status} = await getDetail(uuid);
              if (status == '200') {
                Indicator.close();
                //验证码倒计时
                self.obj=data;
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
    watch: {

    },
    computed: {}
  }
</script>
