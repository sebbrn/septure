import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  scrollToElement(selector: string) {
    document.querySelector(selector).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}
