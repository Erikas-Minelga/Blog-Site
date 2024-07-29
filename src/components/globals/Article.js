export default class Article{
    constructor(id,title,thumbnail,content,tags,datePublished){
        this.id = id;
        this.title = title;
        this.uri = this.title.replaceAll(" ", "-");
        this.thumbnail = thumbnail;
        this.content = content;
        this.tags = tags;
        this.datePublished = datePublished;
    }
}