import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormBuilder,FormControl,FormArray,Validators,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit{
  newPassword = '';
  flag = false;
  noMatching = null;
  resetPasswordForm: FormGroup;
  constructor(
    private router: Router,
    private http: HttpClient) { }
  questions = ['first pet name', 'favourite teacher name', 'favourite icecream flavour'];
  ngOnInit() {
    this.resetPasswordForm = new FormGroup({
      'userEmail': new FormControl('', [Validators.required, Validators.email]),
      'question': new FormControl('',Validators.required),
      'answer': new FormControl('',Validators.required),
      'newPassword': new FormControl('',[Validators.required,Validators.minLength(6)])
    });
  }
  onResetPassword(){
    if(this.resetPasswordForm.valid){
      this.http.put('http://10.113.113.44:8083/forgotpassword', this.resetPasswordForm.value).subscribe(
      (data) => {
        console.log(data);
        this.resetPasswordForm.reset();
        this.router.navigate(['/login']);
      },
      error=>{
        console.log(error);
      }
    );
    }

  }
}
