import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `<ul class="nav nav-tabs">
              <li class="nav-item">
                <a class="nav-link" routerLinkActive="active-link" routerLink="/posts">All Posts</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" routerLinkActive="active-link" routerLink="/create">Create Post</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" routerLinkActive="active-link" routerLink="/about">About</a>
              </li>
            </ul>`
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
