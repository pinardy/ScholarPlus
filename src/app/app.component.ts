import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  levels = [
    { value: '0', viewValue: 'Least Visible' },
    { value: '1', viewValue: 'Default' },
    { value: '2', viewValue: 'Most Visible' }
  ];

  selectLevel(value) {
    console.log(value);
  }
}
