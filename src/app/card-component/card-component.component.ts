import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { RouterLinkWithHref } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { QuizeDataService } from '../services/quize-data.service';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css']
})

export class CardComponentComponent implements OnInit {

  longText: string[] = [];
  options: string[][] = [];

  counter: number = 0;
  buttonName: string = 'Next Question';
  quizForm: FormGroup;

  user: any;
  userr = [];
  alloption: string[] = [];

  selectedOption: number;


  constructor(formbuilder: FormBuilder, private userData: QuizeDataService, private router: Router) {
    this.userData.questions().subscribe((data) => {
      //console.log(data);

      this.user = data;
      this.userr = this.user;

      //const length = this.userr.length;
      //console.log(this.user.option1);
       for (var e of this.userr) {

      this.alloption = [];
      this.alloption.push(e.option1);
      this.alloption.push(e.option2);
      this.alloption.push(e.option3);
      this.alloption.push(e.option4);
      this.options.push(this.alloption);
      // console.log(this.alloption);
      this.longText.push(e.description);
      }
    })
  }
  ngOnInit() {
    this.quizForm = new FormGroup({
      'option': new FormControl(''),
    });
  }

  onSubmit() {

    if (this.counter === 9) {
      // alert("Are you sure you want to add: \n" +this.redirURL + "?");
      this.router.navigate(['/greeting']);

    }

    if (this.counter === 8) {
      this.buttonName = 'Submit';
    }
    this.counter += 1;
    this.quizForm.reset();
     console.log(this.quizForm.value.option);
  }
}

