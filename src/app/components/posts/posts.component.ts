import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../../shared/services/posts.service';
import { Store } from '@ngrx/store';
import { State } from '../../store/posts.reducer';
import { Post } from '../../shared/model/post.model';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[];

  constructor(private _postsService: PostsService,
              private store: Store<State>,
              private router: Router) { }

  ngOnInit() {
    this._postsService.getAllPosts();
    this.store.select('posts').subscribe((res: any) => {
      if(res.posts.length > 0) {
        this.posts = res.posts;  
      }
    })
  }

  view(id: number) {
    this.router.navigate([`/post/${id}`]);
  }

  edit(id: number) {
    this.router.navigate([`/edit/${id}`]);
  }

  delete(id: number) {
    console.log(id);
  }

}
