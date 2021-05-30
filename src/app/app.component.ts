import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //name = 'Angular ' + VERSION.major;
  email: string;
  password: string;
  logInUser() {
    if (this.email == 'admin@gmail.com' && this.password == '123456') {
      console.log('welcome to dashboard User');
    } else {
      console.log('User Unauthorized');
    }
  }
}
