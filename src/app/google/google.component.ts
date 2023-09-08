import { Component } from '@angular/core';
import { GmailLabel } from './gmail-label';
import { map, switchMap } from 'rxjs';
import { GmailService } from './gmail.service';
import { AuthService } from '../auth/auth.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.less']
})
export class GoogleComponent {

  label: string;
  gmailUserLabels: GmailLabel[] = [];

  constructor(
    private authService: AuthService,
    private googleService: GmailService,
    private notification: NzNotificationService) { }

  fetchGmailLabels() {
    this.authService.authenticatedUserData('google').pipe(
      map(ud => ud?.sub),
      switchMap(userId => {
        return this.googleService.listLabels(userId).pipe(
          map((val: any) => val.labels)
        )
      }),
    ).subscribe(data => {
      this.gmailUserLabels = data.filter((val: GmailLabel) => val.type === 'user');
    });
  }

  createGmailLabel(newLabel: string) {

    this.authService.authenticatedUserData('google').pipe(
      map(ud => ud?.sub),
      switchMap(userId => {
        return this.googleService.createLabel(userId, newLabel)
      }),
    ).subscribe(data => {
      console.log("create Gmail label", data);
      this.gmailUserLabels = [...this.gmailUserLabels, data];
      this.notification.success("Created Label", newLabel);
    });

    this.label = '';
  }

  deleteGmailLabel(label: GmailLabel) {
    this.authService.authenticatedUserData('google').pipe(
      map(ud => ud?.sub),
      switchMap(userId => {
        return this.googleService.deleteLabel(userId, label.id)
      }),
    ).subscribe(data => {
      console.log("Gmail deleted label", data);
      this.gmailUserLabels = this.gmailUserLabels.filter(l => l != label);
      this.notification.success("Deleted Label", label.name);
    });

  }


}
