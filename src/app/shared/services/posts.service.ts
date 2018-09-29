import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostsService {

    constructor(private http: HttpClient) { }

    getAllPosts(): Observable<string[]> {
        return this.http.get<string[]>('https://jsonplaceholder.typicode.com/posts');
    }

    getPost(id: number): Observable<string[]> {
        return this.http.get<any>(`https://jsonplaceholder.typicode.com/posts/${id}`);
    }

}
