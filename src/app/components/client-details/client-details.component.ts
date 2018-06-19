import { Component, OnDestroy } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { takeWhile } from 'rxjs/operators';

import { Client } from '../../models/client.model';

import { AppState } from '../../app.state';

import * as ClientSelectors from '../../store/selectors/client.selectors';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnDestroy {

  selectedClient: Client;
  alive = true;

  constructor(
    private store: Store<AppState>
  ) {

    this.store.pipe(
      select(ClientSelectors.getSelectedClient),
      takeWhile(() => this.alive)
    ).subscribe(
      (client: Client) => {
              this.selectedClient = client;
            }
      );
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
