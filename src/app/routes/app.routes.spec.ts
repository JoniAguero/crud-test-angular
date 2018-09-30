import { ROUTES } from './app.routes';
import { PostComponent } from '../components/post/post.component';
import { PostsComponent } from '../components/posts/posts.component';
import { CreatePostComponent } from '../components/create-post/create-post.component';
import { AboutComponent } from '../components/about/about.component';

describe('Test de Rutas', () => {

    it('ROUTE -> /posts', () => {
        expect(ROUTES).toContain({
            path: 'posts',
            component: PostsComponent
        });
    });

    it('ROUTE -> /posts', () => {
        expect(ROUTES).toContain({
            path: '',
            component: PostsComponent
        });
    });

    it('ROUTE -> /post/:id', () => {
        expect(ROUTES).toContain({
            path: 'post/:id',
            component: PostComponent
        });
    });

    it('ROUTE -> /create', () => {
        expect(ROUTES).toContain({
            path: 'create',
            component: CreatePostComponent
        });
    });

    it('ROUTE -> /about', () => {
        expect(ROUTES).toContain({
            path: 'about',
            component: AboutComponent
        });
    });

});
