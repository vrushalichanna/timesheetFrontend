import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { RestService } from "../common/restService";

@Injectable()
export class authguard implements CanActivate {
    constructor(private restService: RestService, private router:Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let user = sessionStorage.getItem("loggedInUser");
        if(user)
        {
            return true;
        }
        else {
            this.router.navigate(['/login']);
        }
    }
}