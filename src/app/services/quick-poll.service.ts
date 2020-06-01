import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class QuickPollService {

  constructor(private http:HttpClient) { }

  getPolls() {
    return this.http.get('/polls');
  }

  getPoll(id: number) {
    return this.http.get('/poll' + id);
  }

  createPoll(poll) {
    let body = JSON.stringify(poll);
    return this.http.post('/polls', body, httpOptions);
  }
}
