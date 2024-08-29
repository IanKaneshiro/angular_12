import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Working with Forms!';
  userData: any = {};

  getData(formData: NgForm) {
    console.warn(formData.value);
    this.userData = formData.value;
  }
}
