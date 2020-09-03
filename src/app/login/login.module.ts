import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { LoginRoutingModule } from './login-routing.module';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';



@NgModule({
    imports: [CommonModule, LoginRoutingModule,FormsModule, ReactiveFormsModule],
    declarations: [LoginComponent]
})
export class LoginModule {}
