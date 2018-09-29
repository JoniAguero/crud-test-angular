import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PostsService } from '../../shared/services/posts.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit, OnDestroy {

  id: number = undefined;
  sub: any;
  post: any;

  constructor(private route: ActivatedRoute,
              private _postsService: PostsService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.getPost(this.id);
    });
  }

  getPost(id: number) {
    this._postsService.getPost(id).subscribe(res => {
      this.post = res;
      console.log(this.post);
    });
  }

  ngOnDestroy(): void {
    this.id = undefined;
  }

}
