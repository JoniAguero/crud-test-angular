import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from '../../store/posts.reducer';
import { Post } from '../model/post.model';
import { SetPostsAction } from '../../store/posts.actions';

@Injectable({ providedIn: 'root' })
export class PostsService {

    posts: Post [];

    constructor(private http: HttpClient, private store: Store<State>) { }

    getAllPosts() {
        this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts').subscribe(res => {
            this.posts = res;
            this.store.dispatch(new SetPostsAction(this.posts))
        })
    }

    getPost(id: number): Observable<string[]> {
        return this.http.get<any>(`https://jsonplaceholder.typicode.com/posts/${id}`);
    }

}
