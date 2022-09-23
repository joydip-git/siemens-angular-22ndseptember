import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  width = 400
  title = 'Welcome to Angular';
  names = ["anil", "sunil", "mahesh"]
  changeTitle(arg: string) {
    this.title = arg

    // for (let name of this.names) {
    //   const li = document.createElement('li')
    //   li.innerText = name
    // }
  }
}
