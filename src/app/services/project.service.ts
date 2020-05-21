import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OpenSource } from '../interfaces/open-source';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private API_GITHUB = 'https://api.github.com/users/adkif/repos';
  private HTTP_OPTIONS = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) { }
  public getProjects(): Observable<OpenSource[]> {
    return this.http.get<OpenSource[]>(this.API_GITHUB, this.HTTP_OPTIONS);
  }
}
