// @ts-ignore
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router.js'
import { createPinia } from 'pinia';
import RichTextRenderer from 'contentful-rich-text-vue-renderer';
import ImageContent from './components/ImageContent.vue';

const app = createApp(App);
const pinia = createPinia();

app.component('RichTextRenderer', RichTextRenderer);
app.component('ImageContent', ImageContent);

app.use(pinia);
app.use(router);
app.mount('#app');