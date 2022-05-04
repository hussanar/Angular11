import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  title: any = "Angular reactive form control"
  loginForm = new FormGroup({
    user: new FormControl(''),
    password: new FormControl('')

  })
  constructor() { }
  loginUser() {
    console.log(this.loginForm.value)
  }

  ngOnInit(): void {
  }

} 
