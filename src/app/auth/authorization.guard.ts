import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AuthService } from './auth.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';

export const isAuthenticatedGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const messageService = inject(NzMessageService);
  
   return authService.isUserAuthenticated().pipe(
     map(isAuthenticated => {
       if (!isAuthenticated) {
         messageService.error("Please log in!");
         router.navigate([""]);
         return false;
       }
       return true;
     })
  )
}