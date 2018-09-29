import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `<ul class="nav nav-tabs">
              <li class="nav-item">
                <a class="nav-link active" href="/hola">Active</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/chau">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#">Disabled</a>
              </li>
            </ul>`,
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
