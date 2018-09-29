import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `<div class="jumbotron jumbotron-fluid">
              <div class="container">
                <h1 class="display-4">{{title}}</h1>
                <p class="lead">With Redux, RxJs, Unit Test, Integration Test, etc. - Author: Jonathan Agüero.</p>
              </div>
            </div>`,
})
export class HeaderComponent {

  constructor() { }

  title = 'Angular Posts';

}
