<script>
    import { useArticlesStore } from './globals/useArticlesStore';
    import RichTextRenderer from 'contentful-rich-text-vue-renderer';
    import { h } from 'vue';
    import {BLOCKS, MARKS} from '@contentful/rich-text-types'

    export default{
        components: [RichTextRenderer],
        data(){
            return{
                articlesStore: useArticlesStore(),
                matchedArticle: null,
                document,
            }
        },
        created(){
            this.matchedArticle = this.articlesStore.getMatchedArticle(this.$route.params.uri)[0];
            this.document = this.matchedArticle.content;
        },
        methods:{
            renderCustomBlocks()
            {
                return{
                    [BLOCKS.EMBEDDED_ASSET]: (node) => h('img', {src: node.data.target.fields.file.url}),
                };
            },
        },
    }
</script>

<template>
    <RouterLink to="/" class="italic">Back to main page</RouterLink>
    <div>
        <h1>{{ matchedArticle.title }}</h1>
        <img :src="matchedArticle.thumbnail">
        <p class="italic">Published at: {{ matchedArticle.datePublished }}</p>
        <div class="inner">
            <RichTextRenderer :document="document" :nodeRenderers="renderCustomBlocks()"></RichTextRenderer>
        </div>
    </div>
</template>

<style>
    .italic { font-style: italic;}

    @keyframes fade-in {
        0% {opacity: 0;}
        100% {opacity: 1;}
    }

    div
    {
        text-align: center;
        animation: fade-in 0.5s ease-in;
    }

    table {
        margin-left: auto;
        margin-right: auto;
        width: 75%;
    }

    ul, ol
    {
        margin-left: auto;
        margin-right: auto;
        width: fit-content;
        text-align: center;
    }

    .inner {
        padding: 50px 20vw 50px 20vw;
    }

    td, th{
        border: 1px white solid;
    }

    th
    {
        font-weight: 900;
        background-color: #252525;
    }

    img{
        height: clamp(350px,50vw,600px);
        width: clamp(350px,50vw,600px);
    }
</style>