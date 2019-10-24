import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements OnInit {

  constructor( ) { }
  visibleSidebar1=true; 
  opened = true;   
  visibleSidebar2
  visibleSidebar3;
  visibleSidebar4;
  visibleSidebar5;
  public items: MenuItem[];

  ngOnInit() {
    this.items = [
      { label: 'Dashboard',url:'/user/dashboard',icon:'pi pi-list' },
      { label: 'User Management' ,url:'/user/management',icon:'pi pi-user'},
      { label: 'progect Management',url:'/user/project',icon:'pi pi-star'},
      { label: 'Role Management',url:'/user/role',icon:'pi pi-cog'},
      
      {
      label: 'File',icon: 'fa fa-plus'
      // items: [
      //     {label: 'New', icon: 'fa fa-plus'},
      //     {label: 'Open', icon: 'fa fa-download'}
      // ]
  },
  { label: 'Edit', icon: 'fa fa-refresh' },
    ]
  }
  openTab() {
    this.opened = true;
  }
  openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  
  closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }

}
