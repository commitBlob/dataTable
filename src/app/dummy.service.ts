import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DummyService {

  constructor(private http: HttpClient) {
  }

  getData(): Observable<any> {
    return this.http.get('./assets/data/demo-data.json');
  }
}
