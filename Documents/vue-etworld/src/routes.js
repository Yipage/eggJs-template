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
            }
        ]
    }
];

export default routes;
