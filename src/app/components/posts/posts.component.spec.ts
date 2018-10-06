import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsComponent } from './posts.component';
import { PostsService } from '../../shared/services/posts.service';
import { HttpClientModule } from '@angular/common/http';

import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { StoreModule, Store } from '@ngrx/store';
import { postReducer } from '../../store/posts.reducer';
import {  SET_POSTS } from './../../store/posts.actions';

class FakeRouter {
  navigate(params) {}
}

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;
  let store: any;
  let postService: PostsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsComponent ],
      providers: [PostsService, { provide: Router, useClass: FakeRouter }],
      imports: [
        HttpClientModule,
        RouterTestingModule,
        StoreModule.forRoot({ posts: postReducer }),
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    store = fixture.debugElement.injector.get(Store);
    postService = fixture.debugElement.injector.get(PostsService);
    store.dispatch({ type: SET_POSTS });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('redirect to /post in View Action', () => {
    const ROUTER = TestBed.get(Router);
    const spy = spyOn(ROUTER, 'navigate');
    const id = 1;
    component.view(id);
    expect(spy).toHaveBeenCalledWith([`/post/${id}`]);
  });

  it('redirect to /post in Edit Action', () => {
    const ROUTER = TestBed.get(Router);
    const spy = spyOn(ROUTER, 'navigate');
    const id = 1;
    component.edit(id);
    expect(spy).toHaveBeenCalledWith([`/edit/${id}`]);
  });

});
