import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements OnInit {
  userDetails;

  constructor(private router: Router, private service: UserService) { }

  ngOnInit(): void {
  this.service.getUserProfile().subscribe(
    res => {
      this.userDetails = res;
     },
    err=>{
      console.log(err)
    }
  );
  }
  OnLogout(){
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);

  }
}
