import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticatedResult, OidcSecurityService } from 'angular-auth-oidc-client';
import { Observable, filter, map, mergeMap, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private oidcSecurityService: OidcSecurityService,
    private router: Router) { }

    get isAuthenticated$(): Observable<AuthenticatedResult> {
      return this.oidcSecurityService.isAuthenticated$;
    };

  loginWithGoogle() {
    this.oidcSecurityService.authorize("google");
  }

  loginWithGitlab() {
    this.oidcSecurityService.authorize("gitlab");
  }

  logout() {
    this.oidcSecurityService.logoff();
    this.oidcSecurityService.logoffLocalMultiple();
    this.router.navigate([""]);
  }

  isUserAuthenticated(): Observable<boolean> {
    return this.oidcSecurityService.isAuthenticated$.pipe(
      take(1),
      map(ar => !!ar.allConfigsAuthenticated.find(ac => ac.isAuthenticated))
    );
  }

  authenticatedUserData(configId?: string): Observable<any> {
    return this.oidcSecurityService.userData$.pipe(
      take(1),
      mergeMap(udr => udr.allUserData),
      filter(ud => (configId != null && ud.configId === configId) || ud.userData != null),
      map(ud => ud.userData)
    );
  }

}
