import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostsService } from './shared/services/posts.service';
import { PostComponent } from './components/post/post.component';

import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CreatePostComponent } from './components/create-post/create-post.component';

const routes: Routes = [
  { path: 'posts', component: PostsComponent },
  { path: 'post/:id', component: PostComponent },
  { path: 'create', component: CreatePostComponent },
  { path: 'edit/:id', component: CreatePostComponent },
  { path: 'about', component: AboutComponent },
  { path: '', component: PostsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    PostsComponent,
    PostComponent,
    AboutComponent,
    CreatePostComponent,
  ],
  imports: [
    BrowserModule, CommonModule, HttpClientModule, RouterModule.forRoot(routes),
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
