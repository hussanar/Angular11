import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EntryComponent } from './entry/entry.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-eleven';
  name = 'hussain'
  constructor(private router: Router) { }
  changeValue() {
    this.name = 'hussanar Abdul Hakkeem';
    this.router.navigate(['home']);
  }

}
