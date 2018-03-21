<style scoped lang="scss">
 
  .btn_lists>span:nth-child(3n+2){
    margin-left: .5rem;
    margin-right: .5rem;
   }
   .content>p:not(:last-child){
     margin-bottom: .3rem;
   }

   .question{
     .title{
       background: #fff;
       padding: .25rem .35rem .35rem .35rem;
       box-shadow: 0 .02rem .04rem 0 rgba(0,0,0,.06);
       margin-bottom: .2rem;
       .sub{
         overflow: hidden;
         span{
           float: left;
           font-size: .36rem;
           color: #4A4A4A;
           font-weight: bold;
         }
         img{
           float: right;
           width: .20rem;
           height: .20rem;
           margin-top: .2rem;
         }
       }
       .btn_lists{
         margin-top: .28rem;
         span{
           width: 1.93rem;
           height: .72rem;
           line-height: .72rem;
           border-radius: .03rem;
           display: inline-block;
           text-align: center;
           background: #F5F5F5;
           color: #9B9B9B;
           font-size: .3rem;
         }
         span.actived{
           background: #F5A623;
           color: #fff;
         }
       }
     }
     .content{
       box-shadow: 0 .02rem .04rem 0 rgba(0,0,0,.06);
       background: #fff;
       padding: .38rem .35rem .48rem .35rem;
       p{
         font-size: .28rem;
         color: #666;
         line-height: .4rem;
         b{
           width:.14rem;
           height: .14rem;
           background: #C9CFDB;
           border-radius: 100%;
           display: inline-block;
           margin-right: .2rem;
           margin-bottom: .04rem;
         }
       }
     }
   }




</style>

<template>
  <div class="question">
    <div class="title">
      <div class="clear">
        <div class="sub" @click='event().arrow_click()'>
          <span>问题分类</span>
          <img v-show='clicked' src="../assets/images/ic_right.png" alt="">
          <img v-show='!clicked' src="../assets/images/ic_more.png" alt="">
        </div>
        <div class="btn_lists" v-show='clicked'>
          <span  v-for='(item,index) in question_box' v-bind:class="{actived:index==selected_index}" v-text='item.type' :key="index" @click='event().change_content(index)'></span>
        </div>
      </div>
    </div>
    <div class="content">
      <p  v-for='(item,index) in option_box'  @click='event().to_detail(item.uuid)'  :key="index"><b></b><span v-text='item.title'></span></p>
    </div>
  </div>
</template>

<script>
  import {getQuestionInfo} from '~/api/api'
  import {Toast,Indicator} from 'mint-ui'
  export default {
    data() {
      return {
        selected_index:0,
        option_box:[],
        clicked:true,
        question_box:[]
      }
    },
    created() {

    },
    mounted() {
      this.network().get_question_info();
    },
    methods: {
      event() {
        let self = this
        return {
          // 点击分类切换对应内容
          change_content(index){
            self.selected_index=index;
            self.option_box=self.question_box[index].questions;
          },
          //点击问题分类
          arrow_click() {
            if(self.clicked){
              self.clicked=false
            }else{
              self.clicked=true
            }
          },
          // 跳转到详情
          to_detail(uuid){
            self.$router.push({path:'./common-question-detail',query:{uuid:uuid}})
          }
        }
      },
      network() {
        let self = this;
        return {
//          获取信息

          async get_question_info() {
              Indicator.open({
                text: 'Loading...',
                spinnerType: 'fading-circle'
              });
              let {data, status} = await getQuestionInfo();
              if (status == '200') {
                Indicator.close();
                // Toast('登录成功')
                self.question_box=data.questions;
                self.option_box=data.questions[0].questions;
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
    }
  }
</script>
