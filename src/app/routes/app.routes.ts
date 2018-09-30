import { Routes } from '@angular/router';
import { PostsComponent } from '../components/posts/posts.component';
import { PostComponent } from '../components/post/post.component';
import { CreatePostComponent } from '../components/create-post/create-post.component';
import { AboutComponent } from '../components/about/about.component';

export const ROUTES: Routes = [
    { path: 'posts', component: PostsComponent },
    { path: 'post/:id', component: PostComponent },
    { path: 'create', component: CreatePostComponent },
    { path: 'edit/:id', component: CreatePostComponent },
    { path: 'about', component: AboutComponent },
    { path: '', component: PostsComponent }
];

