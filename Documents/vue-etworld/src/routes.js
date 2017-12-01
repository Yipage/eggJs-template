import App from './App.vue'
import first from './vuepage/components/first/First.vue'
import search from './vuepage/components/search/Search.vue'
import classify from './vuepage/components/classify/Classify.vue'
import details from './vuepage/components/classify/Details.vue'
import order from './vuepage/components/classify/Order.vue'
import site from './vuepage/components/classify/Site.vue'
import addsite from './vuepage/components/classify/AddSite.vue'
import coupon from './vuepage/components/classify/Coupon.vue'
import personal from './vuepage/components/personal/Personal.vue'
import setsite from './vuepage/components/classify/SetSite.vue'
import myorder from './vuepage/components/personal/MyOrder.vue'
import indent from './vuepage/components/personal/Indent.vue'
import remark from './vuepage/components/personal/Remark.vue'
import after from './vuepage/components/personal/After.vue'
import integral from './vuepage/components/personal/Integral.vue'
import friend from './vuepage/components/personal/Friend.vue'
import wallet from './vuepage/components/personal/Wallet.vue'
import setpw from './vuepage/components/personal/Setpw.vue'
import remember from './vuepage/components/personal/Remember.vue'
import setpaypw from './vuepage/components/personal/SetPaypw.vue'
import setmobile from './vuepage/components/personal/SetMobile.vue'
import sale from './vuepage/components/personal/Sale.vue'
import saledetail from './vuepage/components/personal/SaleDetail.vue'
import shopping from './vuepage/components/shopping/Shopping.vue'
import setshop from './vuepage/components/shopping/SetShop.vue'

const routes = [
    {
        path: '/', component: App,
        children: [
            {
                path: '',
                redirect: '/first'
            },
            {
                path: '/first',
                component: first
            },
            {
                path: '/search',
                component: search
            },
            {
                path: '/classify',
                component: classify
            },
            {
                path: '/details',
                component: details
            },
            {
                path: '/order',
                component: order
            },
            {
                path: '/site',
                component: site
            },
            {
                path: '/addsite',
                component: addsite
            },
            {
                path: '/coupon',
                component: coupon
            },
            {
                path: '/personal',
                component: personal
            },
            {
                path: '/setsite',
                component: setsite
            },
            {
                path: '/myorder',
                component: myorder
            },
            {
                path: '/indent',
                component: indent
            },
            {
                path: '/remark',
                component: remark
            },
            {
                path: '/after',
                component: after
            },
            {
                path: '/integral',
                component: integral
            },
            {
                path: '/friend',
                component: friend
            },
            {
                path: '/wallet',
                component: wallet
            },
            {
                path: '/setpw',
                component: setpw
            },
            {
                path: '/remember',
                component: remember
            },
            {
                path: '/setpaypw',
                component: setpaypw
            },
            {
                path: '/setmobile',
                component: setmobile
            },
            {
                path: '/sale',
                component: sale
            },
            {
                path: '/saledetail',
                component: saledetail
            },
            {
                path: '/shopping',
                component: shopping
            },
            {
                path: '/setshop',
                component: setshop
            }
        ]
    }
];

export default routes;
