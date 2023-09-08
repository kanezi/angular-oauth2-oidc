import { Component, Input, OnInit } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {

  @Input() configId: string;


  authenticationResult$: Observable<any>;
  authenticatedUserData$: Observable<any>;
  accessToken$: Observable<string>;
  idToken$: Observable<string>;
  refreshToken$: Observable<string>;

  constructor(private oidcSecurityService: OidcSecurityService,
    private authService: AuthService) {
  }

  
  ngOnInit(): void {
    this.authenticationResult$ = this.oidcSecurityService.getAuthenticationResult(this.configId);
    this.authenticatedUserData$ = this.authService.authenticatedUserData();
    this.accessToken$ = this.oidcSecurityService.getAccessToken(this.configId);
    this.idToken$ = this.oidcSecurityService.getIdToken(this.configId);
    this.refreshToken$ = this.oidcSecurityService.getRefreshToken(this.configId);
  }
}
