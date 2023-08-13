import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, mapToCanActivateChild } from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "src/app/user/user.service";

@Injectable({providedIn: 'root'})
export class AuthActivate implements CanActivate {
    constructor(private userSevice: UserService) {}

    canActivate(
       route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
        ): 
        | Observable<boolean | UrlTree> 
        | Promise<boolean | UrlTree> 
        | boolean 
        | UrlTree {
            return this.userSevice.isLogged;
        }
      
}