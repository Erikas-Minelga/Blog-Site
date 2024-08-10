import { defineStore } from "pinia";
import client from './config.js'        //Omitted from Github due to containing sensitive data. client is created by passing in access_token and space id, using createClient method
import Article from './Article.js';

let id = 0;

export const useArticlesStore = defineStore('articles', {
    state: () => {
        return{
            loading: false,
            error: null,
            articleList: [],
        }
    },
    actions: {
        async getArticles(){
            this.loading = true;
            this.$reset();

            await client.getEntries().then(entries => {
                entries.items.forEach(entry => {
                    console.log(entry.fields.thumbnail.fields);
                    this.articleList.push(new Article(id++,entry.fields.articleTitle,
                    entry.fields.thumbnail.fields.file.url,
                    entry.fields.thumbnail.fields.title,    //Image titles contain image credits
                    entry.fields.thumbnail.fields.description,      //Will be used for alt tags, to improve accessibility
                    entry.fields.articleContent,
                    entry.metadata.tags,
                    entry.sys.updatedAt.split("T")[0]));
                });
                this.loading = false;
            }).catch((error) => {
                this.loading = false; 
                this.error = error;
            });
        },
        getAssetById(assetId)
        {
            return(this.assets.filter(asset => {return asset.sys.id === assetId}));
        },
        getMatchedArticle(uri){
            return this.articleList.filter(article => {return article.uri === uri});
        },
    },
});