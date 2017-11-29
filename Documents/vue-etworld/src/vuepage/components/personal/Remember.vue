<template>
    <div class="bg">
        <p class="title">输入 <span class="pre">支付密码，</span> 完成身份验证</p>
        <div class="alieditContainer" id="payPassword_container">
            <input minlength="6" maxlength="6" tabindex="1" id="payPassword_rsainput" name="payPassword_rsainput"
                   class="ui-input i-text" oncontextmenu="return false" onpaste="return false" oncopy="return false"
                   oncut="return false" autocomplete="off" value="" type="password">
            <div class="sixDigitPassword" tabindex="0">
                <i class="active"><b></b></i>
                <i><b></b></i>
                <i><b></b></i>
                <i><b></b></i>
                <i><b></b></i>
                <i><b></b></i>
                <span class="guangbiao" style="left:0;"></span>
            </div>
        </div>
        <p class="button">确定</p>
    </div>
</template>

<script>
    import {setTitle} from "../../../assets/js/setTittle"

    export default {
        data() {
            return {}
        },
        mounted() {
            setTitle("设置支付密码");

            $(".i-text").keyup(function () {
                var inp_v = $(this).val();
                var inp_l = inp_v.length;
                //$("p").html( "input的值为：" + inp_v +"; " + "值的长度为:" + inp_l);//测试用

                for (var x = 0; x <= 6; x++) {
//                    $("p").html(inp_l);//测试

                    $(".sixDigitPassword").find("i").eq(inp_l).addClass("active").siblings("i").removeClass("active");
                    $(".sixDigitPassword").find("i").eq(inp_l).prevAll("i").find("b").css({"display": "block"});
                    $(".sixDigitPassword").find("i").eq(inp_l - 1).nextAll("i").find("b").css({"display": "none"});

                    $(".guangbiao").css({"left": inp_l * 51});//光标位置

                    if (inp_l == 0) {
                        $(".sixDigitPassword").find("i").eq(0).addClass("active").siblings("i").removeClass("active");
                        $(".sixDigitPassword").find("b").css({"display": "none"});
                        $(".guangbiao").css({"left": 0});
                    }
                    else if (inp_l == 6) {
                        $(".sixDigitPassword").find("b").css({"display": "block"});
                        $(".sixDigitPassword").find("i").eq(5).addClass("active").siblings("i").removeClass("active");
                        $(".guangbiao").css({"left": 5 * 51});
                    }
                }
            });
        }
    }
</script>

<style scoped>
    .bg {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ffffff;
    }

    .title {
        width: auto;
        height: 0.45rem;
        font-size: 0.30rem;
        font-family: PingFangSC-Regular;
        color: rgba(102, 102, 102, 1);
        line-height: 0.42rem;
        text-align: center;
        margin-top: 1.15rem;
        margin-bottom: 0.2rem;
    }

    .title .pre {
        font-family: PingFangSC-Medium;
        font-size: 0.32rem;
        color: rgba(51, 51, 51, 1);
    }

    .alieditContainer {
        position: relative;
        margin-top: 0.5rem;
    }

    .alieditContainer .i-text {
        position: absolute;
        color: #fff;
        opacity: 0.2;
        width: 306px;
        height: 48px;
        font-size: 12px;
        left: 0;
        -webkit-user-select: initial;
        z-index: 9;
        padding: 0;
        borde: 0;
        margin: auto;
        left: 0;
        right: 0;
    }

    .alieditContainer .sixDigitPassword {
        width: 306px;
        height: 22px;
        cursor: text;
        background: #fff;
        outline: none;
        position: relative;
        padding: 13px 0;
        border: 1px solid #ddd;
        border-radius: 5px;
        margin: 0 auto;
    }

    .alieditContainer .sixDigitPassword i {
        width: 50px;
        height: 16px;
        float: left;
        display: block;
        padding: 4px 0;
        border-left: 1px solid #cccccc;
    }

    .alieditContainer .sixDigitPassword i:first-child {
        border-left: 0;
    }

    .alieditContainer .sixDigitPassword i.active {
        background-image: url("https://t.alipayobjects.com/images/rmsweb/T1nYJhXalXXXXXXXXX.gif");
        background-repeat: no-repeat;
        background-position: center center;
    }

    .alieditContainer .sixDigitPassword b {
        display: block;
        margin: 5px auto 4px auto;
        width: 7px;
        height: 7px;
        overflow: hidden;
        display: none; /*visibility:hidden;*/
        background: #000;
        border-radius: 100%;
    }

    .alieditContainer .sixDigitPassword .guangbiao {
        width: 50px;
        height: 48px;
        position: absolute;
        display: block;
        left: 0px;
        top: -1px;
        border: 1px solid rgba(82, 168, 236, .8);
        border: 1px solid #00ffff \9;
        border-radius: 5px;
        visibility: visible;
        -webkit-box-shadow: inset 0px 2px 2px rgba(0, 0, 0, 0.75), 0 0 8px rgba(82, 168, 236, 0.6);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
    }

    .button {
        width: 6.51rem;
        height: 0.90rem;
        background: rgba(57, 177, 254, 1);
        border-radius: 0.10rem;
        box-shadow: 0 0.12rem 0.22rem rgba(57, 177, 254, 0.25);
        margin: 1.15rem auto;
        font-size: 0.30rem;
        font-family: PingFangSC-Regular;
        color: rgba(255, 255, 255, 1);
        line-height: 0.90rem;
        text-align: center;
    }
</style>