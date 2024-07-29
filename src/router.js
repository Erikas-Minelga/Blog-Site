import { createWebHistory, createRouter } from "vue-router";

import ArticlesList from "./components/ArticlesList.vue";
import FullArticle from "./components/FullArticle.vue";

const routes = [
    {path: '/', component: ArticlesList},
    {path: '/:uri', component: FullArticle}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;