<script>
    import ArticlePreview from './ArticlePreview.vue';
    
    export default{
        components: [ArticlePreview],
        data(){
            return{
                article: '',
                loading: false,
            };
        },
        methods:{
            async getArticles(){
                client.getEntry('74brbTjqTutCmkpc00eQHE')
                .then((entry) => this.article = entry).catch((error) => article = error);
            }
        }
    }
</script>

<template>
    <ul>
        <li>
            {{ article }}
        </li>
    </ul>
</template>

<style>
    
</style>