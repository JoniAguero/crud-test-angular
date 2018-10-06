import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePostComponent } from './create-post.component';
import { PostsService } from '../../shared/services/posts.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { StoreModule, Store } from '@ngrx/store';
import { postReducer } from '../../store/posts.reducer';
import {  SET_POSTS } from './../../store/posts.actions';

describe('CreatePostComponent', () => {

  let component: CreatePostComponent;
  let fixture: ComponentFixture<CreatePostComponent>;
  // let store: any;
  let postService: PostsService;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePostComponent ],
      providers: [ PostsService ],
      imports: [ // StoreModule.forRoot({ posts: postReducer }),
        RouterTestingModule, HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePostComponent);
    component = fixture.componentInstance;
    // store = fixture.debugElement.injector.get(Store);
    postService = fixture.debugElement.injector.get(PostsService);
    // store.dispatch({ type: SET_POSTS });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
