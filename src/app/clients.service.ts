import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {Client} from './client.model';


@Injectable()
export class ClientsService {

  dataUrl = 'http://localhost:3000/api/clients';
  clientSubject: Subject<Client>;

  constructor(
    private http: HttpClient
  ) {
    this.clientSubject = new Subject<Client>();
  }

  getClients(): Observable<any> {
    return this.http.get(this.dataUrl);
  }

}
