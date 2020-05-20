import { Component, OnInit } from '@angular/core';
import { NgModel } from "@angular/forms";
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles:[],
})
export class LoginComponent implements OnInit {
formModel={
  Username : '',
  Password: ''
}
  constructor(public service: UserService) { }

  ngOnInit(): void {
  }

}
