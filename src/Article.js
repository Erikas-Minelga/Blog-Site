export default class Article{
    constructor(title,thumbnail = null,content,tags,datePublished){
        this.title = title;
        this.thumbnail = thumbnail;
        this.content = content;
        this.tags = tags;
        this.datePublished = datePublished;
    }
}