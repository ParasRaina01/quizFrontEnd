import { Injectable } from  "@angular/core" ;
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthServiceService } from "./auth-service.service";
import { User } from "./user.model";
@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate{
    constructor(private authService: AuthServiceService){

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
     boolean | Observable<boolean> | Promise<boolean>{
        return this.authService.user;
    }
}