import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizeDataService {
  url = 'http://10.113.113.44:7000/topics';
  url1 = 'http://10.113.113.44:7000/questions';
  
  constructor(private http: HttpClient) {
  }
  questions() {
    return this.http.get(this.url1);
  }
  topics(){
    return this.http.get(this.url);
  }
  
}
