import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { ProjectManagementComponent } from './project-management/project-management.component';
import { RoleManagementComponent } from './role-management/role-management.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    component: LandingComponent,
    children: [
      { path: 'home ', component: HomeComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'management', component: UserManagementComponent },
      { path: 'project', component: ProjectManagementComponent },
      { path: 'role', component: RoleManagementComponent }
    ]
  },
  { path: 'login', component: LoginComponent }

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
