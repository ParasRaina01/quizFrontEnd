import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Employee} from '../models/Employee'
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http:HttpClient) { }
  topics="http://10.113.113.44:7000/topics";
  subj1="http://10.113.113.44:7000/topics/";
  subj2="/scores";
  finalUrl:any;
  getData(sub:string):Observable<Employee>{
    this.finalUrl=this.subj1+sub+this.subj2;
    return this.http.get<Employee>(this.finalUrl);
  }
  gettopics(){
    return this.http.get(this.topics);
  }
}