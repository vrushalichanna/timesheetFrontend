import { Injectable } from "@angular/core";
import { LoggedInUser } from 'src/app/login/login';

@Injectable()
export class SessionData {
 
    selectedMenu : any;
    loginUser:LoggedInUser;
    restId:string;
    

    setLoginUser(loginUser : LoggedInUser)
    {
        sessionStorage.setItem("loginUser", JSON.stringify(loginUser));
    }

    getLoginUser() : LoggedInUser
    {
        
        return  JSON.parse(sessionStorage.getItem("loginUser"));
    }
}