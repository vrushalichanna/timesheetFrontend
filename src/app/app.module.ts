import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { ProjectManagementComponent } from './project-management/project-management.component';
import { RoleManagementComponent } from './role-management/role-management.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {SidebarModule} from 'primeng/sidebar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ListboxModule} from 'primeng/listbox';
import {ButtonModule} from 'primeng/button';
import {MenuModule } from 'primeng/menu';
import {DialogModule} from 'primeng/dialog';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { ConfirmationComponent } from './confirmation/confirmation.component';
// import {ConfirmationService} from 'primeng/api';

// import {MenuItem} from 'primeng/api';
// import {TableModule} from 'primeng/table';
// import {DropdownModule} from 'primeng/dropdown';
// import {VirtualScrollerModule} from 'primeng/virtualscroller';
// import { PaginatorModule } from 'primeng/paginator';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LandingComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    UserManagementComponent,
    ProjectManagementComponent,
    RoleManagementComponent,
    LoginComponent,
    SidebarComponent,
    ConfirmationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SidebarModule,
    ConfirmDialogModule,
    // ConfirmationService,
    ListboxModule,ButtonModule,
    MenuModule,
    DialogModule
    // TableModule,
    // VirtualScrollerModule,
    // PaginatorModule
    // DropdownModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
