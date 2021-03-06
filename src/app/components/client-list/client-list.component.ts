import { Component, OnDestroy, OnInit } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { Client } from '../../models/client.model';

import * as ClientActions from '../../store/actions/client.actions';
import * as ClientSelectors from '../../store/selectors/client.selectors';

import { takeWhile } from 'rxjs/operators';

import { AppState } from '../../app.state';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit, OnDestroy {

  clients: Client[] = [];
  alive = true;

  constructor(
    private store: Store<AppState>
  ) {
    this.store
      .pipe(
        select(ClientSelectors.getAllClients),
        takeWhile( () => this.alive )
      )
      .subscribe(
        (clients: Client[]) => {
          this.clients = clients;
        }
      );
    this.store.dispatch(new ClientActions.RequestClients(''));
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.alive = false;
  }

  search(string: string) {
    this.store.dispatch(new ClientActions.RequestClients(string));
  }

}
