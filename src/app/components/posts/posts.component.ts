import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../shared/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[] = [];

  constructor(private _postsService: PostsService) { }

  ngOnInit() {
    this._postsService.getAllPosts().subscribe( res => {
      this.posts = res;
      console.log(this.posts);
    });
  }

}
