import App from './App.vue'
import first from './vuepage/components/first/First.vue'

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
        ]
    }
]
export default routes;
