import Vue from 'vue'
import VueRouter from './jslib/vue-router'
import routes from './routes'
import $ from 'jquery'
import touch from 'vue-directive-touch'

window.$ = $

require('./jslib/UIAdapter')

Vue.use(VueRouter);
Vue.use(touch);

const router = new VueRouter({
    routes
});

new Vue({
    router,
}).$mount('#app');