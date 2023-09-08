import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitlabService {

  constructor(private http: HttpClient) { }


  readUser(): Observable<any> {
    return this.http.get<any>(`https://gitlab.com/api/v4/user`);
  }
}
