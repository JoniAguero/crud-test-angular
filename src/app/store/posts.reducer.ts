import { typeActions, SET_POSTS, UNSET_POSTS } from './posts.actions';
import { Post } from '../shared/model/post.model';

 export interface State {
    posts: Post [];
}

const initialState: State = {
    posts: []
};

 export function postReducer(state = initialState, action: typeActions) {
    switch (action.type) {
        case SET_POSTS:
            return {
                posts: [
                    ...action.posts.map( item => {
                        return {...item};
                    })]
                
            };
        case UNSET_POSTS:
            return {
                ie: []
            };
        default:
            return state;
    }
}