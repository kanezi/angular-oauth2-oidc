import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { AuthenticatedResult } from 'angular-auth-oidc-client';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  
  isAuthenticated$: Observable<AuthenticatedResult>;
  
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.isAuthenticated$ = this.authService.isAuthenticated$;
  }

  isUserAuthenticated(): Observable<boolean> {
    return this.authService.isUserAuthenticated();
  }

  user(): Observable<any> {
    return this.authService.authenticatedUserData();
  }

  logout() {
    this.authService.logout();
  }
}
