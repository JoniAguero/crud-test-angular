import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `<ul class="nav nav-tabs">
              <li class="nav-item">
                <a class="nav-link active" href="/hola">All Posts</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/chau">Create Post</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#">Disabled</a>
              </li>
            </ul>`
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
