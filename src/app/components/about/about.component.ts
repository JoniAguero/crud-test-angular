import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: ` <h2>About Us</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur malesuada porta. Integer et ipsum vitae
                erat sodales varius. In malesuada gravida sapien et fermentum. Nulla in lorem aliquam, dapibus nisl vel, vestibulum
                velit. Phasellus ornare turpis quis orci interdum, et faucibus ipsum fermentum. Aliquam posuere porttitor elit, non
                placerat sapien porttitor et. Quisque viverra ut nibh sit amet ornare. Curabitur tristique purus diam, in semper nunc
                rhoncus a. Sed porta et turpis vel aliquet. Morbi quis eleifend massa. Nunc mollis neque at elit mollis vehicula.
                Mauris sit amet maximus est, a fringilla nulla.
              </p>`,
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
