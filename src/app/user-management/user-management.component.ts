import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
// import { ConfirmationService } from './confirmation-service';
// import { ConfirmationService } from './confirmation-service';
// import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  updateInfo: ArrayBuffer;
  userInfo: ArrayBuffer;
  // private confirmationService: ConfirmationService
  constructor(private http: HttpClient) { }
  cars: any;
  display: boolean = false;
  userForm:FormGroup = new FormGroup({
    userName:new FormControl( ''),
    emailId:new FormControl( ''),
    mobileNumber:new FormControl( ''),
    role:new FormControl( ''),
    defaultProject:new FormControl( ''),
    primaryContactNo:new FormControl(''),
    emergencyContactNo:new FormControl(''),
    secondaryContactNo:new FormControl(''),
    employeeId:new FormControl('')
  })
  display1:boolean = false;
  data: any = [];
  ngOnInit() {

   this.getUser();
   
  }
  getUser(){
    debugger
    this.http.get('assets/data.json')
    .subscribe(res => {
      console.log(res);
      this.data = res;
    this.userForm.patchValue({
      userName: this.data.userName,
      emailId: this.data.emailId,
      role: this.data.role,
      defaultProject: this.data.defaultProject,
      primaryContactNo: this.data.primaryContactNo,
      emergencyContactNo:this.data.emergencyContactNo,
      secondaryContactNo:this.data.secondaryContactNo,
      employeeId:this.data.employeeId
      });
    });

  }

  // updateUser(){
  //   this.http.put('').subscribe(res => {
  //     console.log(res);
  //     this.updateInfo=res;
  //   });
  // }

addnewUser(){
  // this.userForm.reset();
  // this.http.post(this.userForm.value).subscribe(res =>{
  //   this.userInfo = res;
  //   console.log(this.userInfo);
    
  // })
}


  addDialog() {
    this.display1 = true;
  }
  editDialog() {
    this.display = true;
  }

  confirm() {
    // this.confirmationService.confirm({
    //     message: 'Are you sure that you want to perform this action?',
    //     accept: () => {
    //         //Actual logic to perform a confirmation
    //     }
    // });

  }




}
