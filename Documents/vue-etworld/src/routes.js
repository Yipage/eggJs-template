import App from './App.vue'
import first from './vuepage/components/first/First.vue'
import search from './vuepage/components/search/Search.vue'
import classify from './vuepage/components/classify/Classify.vue'
import details from './vuepage/components/classify/Details.vue'
import order from './vuepage/components/classify/Order.vue'
import site from './vuepage/components/classify/Site.vue'

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
            }
        ]
    }
]
export default routes;
