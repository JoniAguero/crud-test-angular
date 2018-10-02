import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PostsService } from './posts.service';

import { Observable } from 'rxjs';
import { StoreModule } from '@ngrx/store';
import { postReducer } from '../../store/posts.reducer';


describe('PostsService', () => {

    let postsService: PostsService;
    let httpMock: HttpTestingController;

    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, StoreModule.forRoot({ posts: postReducer })],
            providers: [PostsService]
        });

        postsService = TestBed.get(PostsService);
        httpMock = TestBed.get(HttpTestingController);
    });

    it('should return an Observable when get called', async(() => {
        expect(TestBed.get(PostsService).getAllPosts()).toEqual(jasmine.any(Observable));
    }));

    // PENDIENTE
    xit('should resolve to list of names when get called', async(() => {

        const lengthData = 101;

        // let lengthPosts: number;
        // postsService.getAllPosts().subscribe((posts: any[]) => {
        //     lengthPosts = posts.length;
        // });

        // expect(lengthPosts).toEqual(lengthData);
    }));
});

