import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  constructor(private router:Router) { }
  ngOnInit() {
  }
  
  signup(){
    this.router.navigateByUrl('/signup')
  }

  signin(){
    this.router.navigateByUrl('/user')
  }

 forgotPassword(){
    this.router.navigateByUrl('/user/forgot-password')
  }
}
