import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GoogleComponent } from './google/google.component';
import { GitlabComponent } from './gitlab/gitlab.component';
import { isAuthenticatedGuard } from './auth/authorization.guard';

const routes: Routes = [
  {path: '', component: LoginComponent, pathMatch: 'full'},
  {path: 'google', component: GoogleComponent, canActivate: [isAuthenticatedGuard]},
  {path: 'gitlab', component: GitlabComponent, canActivate: [isAuthenticatedGuard]},
  {path: '**', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
