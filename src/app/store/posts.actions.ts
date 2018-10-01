import { Action } from '@ngrx/store';
import { Post } from '../shared/model/post.model';

 export const ADD = 'ADD POST';

 export class Add implements Action {
    readonly type = ADD;
     posts: any;
    constructor(public post: Post) { }
}

 export type typeActions =
    Add;