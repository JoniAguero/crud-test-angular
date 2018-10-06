import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostComponent } from './post.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PostsService } from '../../shared/services/posts.service';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

class FakeActivedRoute {

  private subject = new Subject();

  push(value) {
    this.subject.next(value);
  }

  get params() {
    return this.subject.asObservable();
  }

}

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;
  // let store: any;
  let postService: PostsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostComponent ],
      imports: [RouterTestingModule,
                HttpClientTestingModule],
      providers: [PostsService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    // store = fixture.debugElement.injector.get(Store);
    postService = fixture.debugElement.injector.get(PostsService);
    // store.dispatch({ type: SET_POSTS });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should catch id params', () => {
    component = fixture.componentInstance;
    const activatedRoute: FakeActivedRoute = TestBed.get(ActivatedRoute);
    activatedRoute.push({id: 1});
    expect(component.id).toBe(1);
  });

});
