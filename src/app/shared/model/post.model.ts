export class Post {

    userID: number;
    id: number;
    title: string;
    body: string;

    constructor(
        userID: number,
        id: number,
        title: string,
        body: string) 
    {
        this.userID = userID;
        this.id = id
        this.title = title
        this.body = body
    }

}