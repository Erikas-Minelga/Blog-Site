<script>
    import { useArticlesStore } from './globals/useArticlesStore';
    import RichTextRenderer from 'contentful-rich-text-vue-renderer';
    import { h } from 'vue';
    import {BLOCKS, MARKS} from '@contentful/rich-text-types';
    import ImageContent from './ImageContent.vue';

    export default{
        components: [RichTextRenderer, ImageContent],
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
                    [BLOCKS.EMBEDDED_ASSET]: (node) => h(ImageContent, {imageSrc: node.data.target.fields.file.url, imageAlt: node.data.target.fields.description, imageCredit: node.data.target.fields.title}),
                };
            },
        },
    }
</script>

<template>
    <RouterLink to="/" class="italic">Back to main page</RouterLink>
    <div>
        <h1>{{ matchedArticle.title }}</h1>
        <p id="published-at" class="italic">Published at: {{ matchedArticle.datePublished }}</p>
        <ImageContent :imageSrc="matchedArticle.thumbnailUrl" :imageAlt="matchedArticle.thumbnailDesc" :imageCredit="matchedArticle.thumbnailCredit"></ImageContent>
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
        padding-left: clamp(5px, 5vw, 70px);
        padding-right: clamp(5px, 5vw, 70px);
    }

    td, th{
        border: 1px white solid;
    }

    th
    {
        font-weight: 900;
        background-color: #252525;
    }
</style>