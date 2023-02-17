import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class QuizeDataService {
  url = 'http://10.113.113.44:6060/topics';  // to get topic name
  url2 = 'http://10.113.113.44:6060/questions/getquestions'; //get random question
  // url3 ='http://10.113.113.44:7000/questions/checkanswers/2/{questionId}/{correctanswer}' // to chexk the option
  url4 = '';

  constructor(private http: HttpClient) {}
  
  token:any;
  
  //API to get Subjects Name
  topics() {
    this.token = JSON.parse(sessionStorage.getItem('Auth_token'));
    let header = new HttpHeaders({
      'Content-Type':'application/json',
      'access-token': `${this.token.token}`
      // 'access-token': `Bearer ${this.token}`
      })
    return this.http.get(this.url,{headers:header});
  }

  //API to get A Question
  questions(subjectId){
    let header = new HttpHeaders({
      'Content-Type':'application/json',
      'access-token': `${this.token.token}`
      })
    return this.http.get(`http://10.113.113.44:6060/questions/getquestions/${subjectId}`,{headers:header});
  }

  //API for Checking Answer
  checkAnswer(questionId,correctanswer){
    let header = new HttpHeaders({
      'Content-Type':'application/json',
      'access-token': `${this.token.token}`
      })
    return this.http.post(`http://10.113.113.44:6060/questions/checkanswers/${questionId}/${correctanswer}`,{},{headers:header});
  }

  //API for End Test
  lastQuestion(subjectId){
    let header = new HttpHeaders({
      'Content-Type':'application/json',
      'access-token': `${this.token.token}`
      })
    return this.http.post(`http://10.113.113.44:6060/questions/endTest/${subjectId}`,{}, {headers:header});
  }

}
