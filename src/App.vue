<script>
    import { useArticlesStore } from './components/globals/useArticlesStore';
    export default{
        data(){
            return{
                articlesStore: useArticlesStore(),
            }
        },
        created(){
            this.articlesStore.getArticles();
        },
    }
</script>

<template>
    <h1 class="title">Erik's Blog</h1>
    <div v-if="articlesStore.loading">
        <div class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <p>Loading articles, please wait</p>
    </div>
    <RouterView v-else-if="!articlesStore.loading && articlesStore.articleList.length > 0"/>
    <h2 class="error" v-else-if="!articlesStore.loading && articlesStore.articleList.length == 0">There was an error retrieving article data</h2>
</template>

<style>
    .title, .error
    {
        text-align: center;
    }

    .lds-ring {
        color: #252525
    }

    .lds-ring,
    .lds-ring div {
    box-sizing: border-box;
    }

    .lds-ring {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    }

    .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid currentColor;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: currentColor transparent transparent transparent;
    }

    .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
    }

    .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
    }

    .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
    }

    @keyframes lds-ring {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    }
</style>