import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../../shared/services/posts.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[] = [];

  constructor(private _postsService: PostsService,
              private router: Router) { }

  ngOnInit() {
    this._postsService.getAllPosts().subscribe( res => {
      this.posts = res;
    });
  }

  view(id: number) {
    this.router.navigate([`/post/${id}`]);
  }

  edit(id: number) {
    console.log(id);
  }

  delete(id: number) {
    console.log(id);
  }

}
