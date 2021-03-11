import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'di-demo';
  url = undefined;
  data: string;
  sendData(){
    // just to demonstrate handeling error which will be thrown here
    this.data = this.url.indexOf();
  }
}
