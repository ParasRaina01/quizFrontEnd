
import { MatSelectModule } from '@angular/material/select'
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { QuizeDataService } from '../services/quize-data.service';


@Component({
  selector: 'app-choose-subject',
  templateUrl: './choose-subject.component.html',
  styleUrls: ['./choose-subject.component.css']
})

export class ChooseSubjectComponent implements OnInit {

  index = 0;
  subjects: string[] = [];
  topics: any;
  // subjects = ['Math', 'Science', 'English', 'History'];
  selectedSubject: string;

  constructor(private router: Router, private http: HttpClient, private userData: QuizeDataService) { }

  public getTopicName() { }


  goToQuiz() {
    console.log(this.selectedSubject);
      this.router.navigate(['/quiz']);

  }

  ngOnInit() {
   // this.subjects = []
    this.userData.topics().subscribe((data) => {
      console.log(data);
      this.topics = data
      for (var e of this.topics) {
        this.subjects.push(e.topicName);
      }
      console.log(this.subjects);
    });
  }

}

