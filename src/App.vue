<script>
    import ArticlePreview from './components/ArticlePreview.vue';
    import {SPACE_ID, ACCESS_TOKEN} from './config'
    import Article from './Article.js';

    export default{
        components: {ArticlePreview,},
        data(){
            return{
                articles: [],
            }
        },
        created()
        {
            this.getArticles();
        },
        methods:{
            async getArticles()
            {
                const fetchUrl = `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/master/entries?access_token=${ACCESS_TOKEN}`;

                try{
                    const response = await fetch(fetchUrl);

                    if(!response.ok){
                        console.error(`Response status: ${response.status}`);
                    }

                    const responseData = await response.json();
                    responseData.items.forEach(item => {
                       this.articles.push(new Article(item.fields.articleTitle,
                       item.fields.articleContent,
                       item.metadata.tags,
                       item.sys.updatedAt));
                    });
                }
                catch(error){
                    console.error(error.message);
                }
            },
        }
    }
</script>

<template>
    <div>
        <ArticlePreview v-for="article in articles" :articleId="1">{{ article.title }}</ArticlePreview>
    </div>
</template>

<style>
    div{
        color: white;
    }
</style>


