import { Injectable} from '@angular/core';
import { HttpClient,HttpHeaders,HttpResponse } from '@angular/common/http';
import { Observable,Subject } from 'rxjs';

interface AuthResponseData{
  token:string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  user = new Subject();

  constructor(private http:HttpClient) {

   }
   onSignUp(obj: any): Observable<any>{
    return this.http.post('http://10.113.113.44:8083/createusers',obj);
   }

   onLogin(obj:any) : Observable<any>{
    return this.http.post('http://10.113.113.44:8083/authenticate',obj);
   }
}

