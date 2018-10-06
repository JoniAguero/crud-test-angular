import { Action } from '@ngrx/store';
import { Post } from '../shared/model/post.model';

 export const SET_POSTS = '[SET POST] Set ...';
 export const UNSET_POSTS = '[UNSET POSTS] Unset ...';

export class SetPostsAction implements Action {
    readonly type = SET_POSTS;
    constructor(public posts: Post[]) { }
}

export class UnsetPostsAction implements Action {
    readonly type = UNSET_POSTS;
}

 export type typeActions =
    SetPostsAction |
    UnsetPostsAction;