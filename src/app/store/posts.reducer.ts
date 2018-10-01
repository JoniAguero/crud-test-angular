import { typeActions, ADD } from './posts.actions';
import { Post } from '../shared/model/post.model';

 export interface State {
    posts: Post [];
}

const initialState: State = {
    posts: []
};

 export function postReducer(state = initialState, action: typeActions) {
    switch (action.type) {
        case ADD:
            return {
                posts: {
                    ...action.posts.map( item => {
                        return {...item};
                    })
                }
            };
         default:
            return state;
    }
}