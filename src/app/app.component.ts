import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginResponse, OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  constructor(
    private oidcSecurityService: OidcSecurityService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.oidcSecurityService.checkAuthMultiple().subscribe((resp: LoginResponse[]) => {
      let success = resp.find(login => login.isAuthenticated);

      if (success?.configId) {
        this.router.navigate([success.configId]);
      }
    }
    );
  }


}
