function solve() {
    class Post{
        constructor(title,content){
            this.title = title;
            this.content = content;

        }

        toString(){
            return  `Post: ${this.title}\nContent: ${this.content}`
        }
    }

    class SocialMediaPost extends Post{
        constructor(title,content,likes,dislikes){
            super(title,content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }
        addComment(comment){
            let outputComment = '* '+comment;
            this.comments.push(outputComment);
        }
        toString(){
            //this.comments = this.comments.filter(w => w!='');
            if(this.comments.length > 0){
                return super.toString() + `\nRating: ${(this.likes - this.dislikes)}\nComments: \n${this.comments.join('\n')}`
            }
            return super.toString() + `\nRating: ${(this.likes - this.dislikes)}`
        }

    }
    class BlogPost extends  Post{
        constructor(title,content,views){
            super(title,content);
            this.views = views;
        }

        view(){
            this.views++;
            return this;
        }

        toString(){
            return super.toString() + `\nViews: ${this.views}`
        }
    }

    return {Post, SocialMediaPost, BlogPost};
}

let test = new SocialMediaPost('asd','krrr',33,3);
test.addComment('sadasd');
test.addComment('test');
test.addComment('nov voment');
console.log(test.toString());