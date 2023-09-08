import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {

  constructor(private authService: AuthService) { }

  loginWithGoogle(){
    this.authService.loginWithGoogle();

  }

  loginWithGitlab(){
    this.authService.loginWithGitlab();
  }

}
