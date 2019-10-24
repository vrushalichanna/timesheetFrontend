export class LoggedInUser{
  id:string;
  userId:string;
  password:string;
  emailId: string;
  phonenum : string;
  name : string;
  role : string[];
  clientId:number;
  branchId:number;
  userName:String;
  permission :  string[];
}

export class AdminMessage{
  username:string;
  message:string;
}