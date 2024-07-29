<script>
    import { RouterLink } from 'vue-router';
    import { useArticlesStore } from './globals/useArticlesStore.js';
    
    export default{
        data(){
            return{
                articlesStore: useArticlesStore()
            }
        },
    }

</script>

<template>
    <div id="header">
        Welcome to my blog, where you can read my articles. I hope you like them
    </div>
    <div id="main">
        <div id="articles-list">
        <RouterLink v-for="article in articlesStore.articleList" :to="article.uri">
            <article>
                <img :src="article.thumbnail">
                <h3>{{ article.title }}</h3>
            </article>
        </RouterLink>
        </div>
    </div>
</template>

<style>

    @keyframes scroll-down {
        0% {top: -100px; opacity: 0;}
        100% {top: 0; opacity: 1;}
    }

    @keyframes scroll-up {
        0% {top: 100px; opacity: 0;}
        100% {top: 0; opacity: 1;}
    }

    #header
    {
        position: relative;
        animation: scroll-down 1s ease-in-out;
        margin-top: 20px;
    }

    #main
    {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: 20px;
    }

    #articles-list
    {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        row-gap: 10px;
        column-gap: 30px;
        padding: 3%;
        position: relative;
        animation: scroll-up 1s ease-in-out;
        justify-items: center;
    }

    article
    {
        text-align: center;
        background-color: #252525;
        border-radius: 20px;
        padding: 25px;
        width: clamp(300px,35vw,350px);
        height: fit-content;
    }

    .title-container
    {
        line-break: anywhere;
        text-align: center;
    }

    article > img
    {
        aspect-ratio: auto;
        width: clamp(300px,35vw,350px);
        height: clamp(300px,35vw,350px);
    }

    h3 {
        width: clamp(300px,35vw,350px);
    }
    
    a{
        color: white;
        text-decoration: none;
    }

    @media only screen and (max-width: 984px) {
        #articles-list
        {
            grid-template-columns: 1fr;
        }
    }

    @media only screen and (min-width: 984px) and (max-width: 1500px)  {
        #articles-list
        {
            grid-template-columns: 1fr 1fr;
        }
    }
</style>

