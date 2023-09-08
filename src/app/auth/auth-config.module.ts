import { NgModule } from '@angular/core';
import { AuthModule } from 'angular-auth-oidc-client';


@NgModule({
    imports: [AuthModule.forRoot({
        config: [
            {
                configId: 'google',
                authority: 'https://accounts.google.com',
                redirectUrl: window.location.origin + window.location.pathname,
                postLogoutRedirectUri: window.location.origin + window.location.pathname,
                clientId: '335079287740-saaefh4o0ku7g8k1e45rgd17plv52m6e.apps.googleusercontent.com',
                scope: 'openid profile email https://www.googleapis.com/auth/gmail.labels',
                responseType: 'id_token token',
                silentRenew: true,
                useRefreshToken: true,
                renewTimeBeforeTokenExpiresInSeconds: 30,
                secureRoutes: ['https://gmail.googleapis.com/gmail/v1']
            },
            {
                configId: 'gitlab',
                authority: 'https://gitlab.com',
                redirectUrl: window.location.origin + window.location.pathname,
                postLogoutRedirectUri: window.location.origin + window.location.pathname,
                clientId: 'a0c2afb968f70f4fd5361b8370d748f562a609edf7b3a1808f30d93bf53aae09',
                scope: 'openid read_user',
                responseType: 'code',
                silentRenew: true,
                useRefreshToken: true,
                renewTimeBeforeTokenExpiresInSeconds: 30,
                secureRoutes: ['https://gitlab.com/api']
            }
        ]
      })],
    exports: [AuthModule],
})
export class AuthConfigModule {}
