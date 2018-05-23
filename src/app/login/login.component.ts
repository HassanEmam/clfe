import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  userLogin: FormGroup
  loadin: boolean;
  constructor(private fb:FormBuilder, private router:Router, private userService: UserService) { 
    
  }

  ngOnInit() {
    this.loadin = false;
    this.userLogin= this.fb.group({
      username: ['', Validators.required],
      password:['', Validators.required]
    })
  }

  onLogin() {
    this.loadin = true;
    console.log(this.userLogin.value);
    this.userService.loginUser(this.userLogin.value).subscribe(
      response =>{
        console.log('response', response);
      },
      error => {
        console.log('error', error);
      }
    );
  }
  // goToHome() {
  //   this.router.navigate(['home']);
  // }
}
