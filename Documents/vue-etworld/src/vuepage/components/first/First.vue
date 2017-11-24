<template>
    <div id="app">
        <!--内容区-->
        <section class="main animated fadeInUp">
            <div class="slide" v-for="(item, index) in imgArray" v-bind:class="{ativity:isAtivity === index}">
                <img class="img" :src="item" alt="" width="100%"/>
            </div>
        </section>
    </div>
</template>

<script type="text/ecmascript-6">

    export default {
        data() {
            return {
                isAtivity: 0,
                i: 0,
                scroll: '',
                imgArray: [
                    'http://oy158wtwk.bkt.clouddn.com/bg_01.png',
                    'http://oy158wtwk.bkt.clouddn.com/bg_02.png',
                    'http://oy158wtwk.bkt.clouddn.com/bg_03.png',
                    'http://oy158wtwk.bkt.clouddn.com/bg_04.png',
                    'http://oy158wtwk.bkt.clouddn.com/bg_01.png',
                    'http://oy158wtwk.bkt.clouddn.com/bg_02.png',
                ]
            }
        },
        mounted() {
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
                if (angle >= 0 && angle < 180) {
                    result = 1;
                } else if (angle >= -180 && angle < -0) {
                    result = 2;
                }

                return result;
            }

            //滑动处理
            var startX, startY;
            document.addEventListener('touchstart', function (ev) {
                startX = ev.touches[0].pageX;
                startY = ev.touches[0].pageY;
            }, false);
            document.addEventListener('touchend', function (ev) {
                var endX, endY;
                endX = ev.changedTouches[0].pageX;
                endY = ev.changedTouches[0].pageY;
                var direction = GetSlideDirection(startX, startY, endX, endY);
                switch (direction) {
                    case 0:
                        console.log('no');
                        break;
                    case 1:
                        console.log('shang');
                        that.i += 1;
                        if (that.i > that.imgArray.length || that.i === that.imgArray.length) {
                            that.i = that.imgArray.length - 1
                        }
                        that.isAtivity = that.i;
                        break;
                    case 2:
                        console.log('xia');
                        that.i -= 1;
                        if (that.i < 0 || that.i === 0) {
                            that.i = 0
                        }
                        that.isAtivity = that.i;
                        break;
                    default:
                }
            }, false);
        }
    }
</script>

<style scoped>
    .main {
        -vendor-animation-duration: 3s;
        -vendor-animation-delay: 2s;
        -vendor-animation-iteration-count: infinite;
    }

    .slide {
        width: auto;
        height: 1.80rem;
        overflow: hidden;
        transition: all 0.5s;
    }

    .ativity {
        width: 100%;
        height: 8.13rem !important;
        transform: scaleY(1) !important;
    }

    .slide .img {
        transform: translateY(-20%);
        transition: all 0.5s;
    }

    .ativity .img {
        transform: translateY(0);
        transition: all 0.5s;
    }
</style>
