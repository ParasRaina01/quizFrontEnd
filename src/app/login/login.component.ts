import { Component,OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';
import { AuthServiceService } from '../auth/auth-service.service';
import {Router} from '@angular/router';
import { pipe,map,Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { throwError,catchError } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;

  constructor(private authService:AuthServiceService,
    private router: Router,
    private http:HttpClient){

  }
  auth_token = null;
  badCredentials = false;
  flag = true;
  loginValid = true;

  ngOnInit(){
    this.loginForm = new FormGroup({
      userEmail: new FormControl('', [Validators.required, Validators.email,Validators.pattern(
        '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$',
      ),]),
      userPassword: new FormControl('', [Validators.required,Validators.minLength(6)]
      )
    });
  }
  onSubmit(){
    console.log(this.loginForm);
    if(this.loginForm.valid){
      this.authService.onLogin(this.loginForm.value).subscribe((result :Response) =>{
        if(result){
          this.router.navigate(['/choosesubject']);   
          sessionStorage.setItem('Auth_token',JSON.stringify(result));
          this.auth_token = sessionStorage.getItem('Auth_token');
          this.loginValid = true;
          
        }
      },
      error=>{
        console.error();
        this.loginValid = false;
        this.badCredentials = true;
      })
  }
}
}
