import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/modules/auth/pages/login/login.component';
import { RegisterComponent } from 'src/app/modules/auth/pages/register/register.component';

const routes: Routes = [{ path: '', component: LoginComponent },
{ path: 'register', component: RegisterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
