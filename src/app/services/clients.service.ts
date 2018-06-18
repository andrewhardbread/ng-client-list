import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Client } from '../models/client.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  dataUrl = 'http://localhost:3000/api/clients';

  constructor(
    private http: HttpClient
  ) {
  }

  getClients(): Observable<Client[]> {
    return this.http.get(this.dataUrl)
      .pipe(
        map((body: any) => body.data.docs)
      );
  }

}