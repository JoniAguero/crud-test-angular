import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `<ul class="nav nav-tabs">
              <li class="nav-item">
                <a class="nav-link active" href="/posts">All Posts</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/create">Create Post</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about">About</a>
              </li>
            </ul>`
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
