import { Component,OnInit } from '@angular/core';
import { FormGroup,  FormControl,Validators,ReactiveFormsModule} from '@angular/forms';
import {Routes,RouterModule} from '@angular/router';
import { AuthServiceService } from '../auth/auth-service.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit{
  registrationForm !: FormGroup;
  isRegistered = false;
  registrationError = null;
  constructor(private authService: AuthServiceService){

  }
  ngOnInit(){
    this.registrationForm = new FormGroup({
      'userName': new FormControl(null,Validators.required),
      'userEmail': new FormControl(null,[Validators.required,Validators.email]),
      'userPhoneNo': new FormControl(null,Validators.required),
      'userPassword': new FormControl(null,[Validators.required,Validators.minLength(8)]),
      // 'confirmPassword': new FormControl(null,[Validators.required,Validators.minLength(8)]),
      'dob': new FormControl('',Validators.required),
      'question': new FormControl('',Validators.required),
      'answer': new FormControl('', Validators.required)
    })
  }
  questions: any = ['first pet name', 'favourite teacher name', 'favourite icecream flavour'];
  onSubmit(){
    this.isRegistered = true;
    if(this.registrationForm.valid){
      this.authService.onSignUp(this.registrationForm.value).subscribe(result =>{
        if(result.success){
          console.log(result);
        }
      },
      error =>{
        console.log(error);
      })
      
    }
    console.log(this.registrationForm);
  }
}
