import { Component } from '@angular/core';
import { GitlabService } from './gitlab.service';

@Component({
  selector: 'app-gitlab',
  templateUrl: './gitlab.component.html',
  styleUrls: ['./gitlab.component.less']
})
export class GitlabComponent {


  gitlabUserData: string = '';

  constructor(private gitlabService: GitlabService) { }

  getUserData() {
    this.gitlabService.readUser().subscribe(
      data => this.gitlabUserData = data
    );
  }


}
