import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../shared/services/posts.service';

@Component({
  selector: 'app-post',
  template: `<ng-container *ngIf="post; else cargando ">
              <div class="card">
                <div class="card-header">{{post.title}}</div>
                <div class="card-body">
                  <blockquote class="blockquote mb-0">
                    <p>{{post.body}}.</p>
                    <footer class="blockquote-footer">Someone famous in <cite title="Source Title">{{post.id}}</cite></footer>
                  </blockquote>
                </div>
              </div>
            </ng-container>
            <ng-template #cargando>
              <p>Cargando..</p>
            </ng-template>`
  ,
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  id: number;
  post: any;

  constructor(private route: ActivatedRoute,
    private _postsService: PostsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.getPost(this.id);
    });
  }

  getPost(id: number) {
    this._postsService.getPost(id).subscribe(res => {
      this.post = res;
    });
  }

}
