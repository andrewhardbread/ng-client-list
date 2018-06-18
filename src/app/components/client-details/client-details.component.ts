import { Component, OnDestroy } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { takeWhile } from 'rxjs/operators';

import { Client } from '../../models/client.model';

import * as fromRoot from '../../store/reducers';
import { AppState } from '../../app.state';

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
      select(fromRoot.getSelectedClient),
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
