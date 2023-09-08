import { Component } from '@angular/core';
import { GitlabService } from './gitlab.service';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gitlab',
  templateUrl: './gitlab.component.html',
  styleUrls: ['./gitlab.component.less']
})
export class GitlabComponent {


  gitlabUserData: string = '';

  constructor(private authService: AuthService,
     private gitlabService: GitlabService,
     private router: Router) { }

  getUserData() {
    this.gitlabService.readUser().subscribe(
      data => this.gitlabUserData = data
    );
  }


  forceRefresh() {
    this.authService.forceRefreshSession('gitlab').subscribe(
      data => {
        // hack to refresh token values without reloading the page (so network calls remain in developer toolbar for showcase)
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate([`/gitlab`]).then(() => {
            console.log(`After navigation I am on:${this.router.url}`)
          })
        })
      }
    );
  }


}
