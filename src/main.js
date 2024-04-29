import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import Home from './components/pages/Home.vue';
import NewsDetail from './components/pages/NewsDetail.vue';
import PageNotFound from './components/pages/PageNotFound.vue';
import News from './components/pages/News.vue';
import Ricerca from './components/pages/Ricerca.vue';

import { VueHeadMixin, createHead } from '@unhead/vue'

import './style.css'
import App from './App.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/cronaca', component: News },
        { path: '/cronaca/:page', component: News },
        { path: '/cronaca/:year/:month/:day/news/:slug', component: NewsDetail },
        { path: '/ricerca/repubblica', component: Ricerca },
        { path: "/:pathMatch(.*)*", component: PageNotFound }
    ]
});

const head = createHead();

const app = createApp(App);
app.use(router);
app.use(head);
app.mixin(VueHeadMixin);

app.mount('#app');