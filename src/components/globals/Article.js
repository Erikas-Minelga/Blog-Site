export default class Article{
    constructor(id,title,thumbnailUrl,thumbnailCredit,thumbnailDesc,content,tags,datePublished){
        this.id = id;
        this.title = title;
        this.uri = this.title.replaceAll(" ", "-");
        this.thumbnailUrl = thumbnailUrl;
        this.thumbnailCredit = thumbnailCredit;
        this.thumbnailDesc = thumbnailDesc;
        this.content = content;
        this.tags = tags;
        this.datePublished = datePublished;
    }
}