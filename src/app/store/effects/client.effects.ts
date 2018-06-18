import { Injectable } from '@angular/core';

import { Actions, Effect } from '@ngrx/effects';

import { ClientsService } from '../../services/clients.service';

import * as ClientActions from '../actions/client.actions';
import { map, switchMap } from 'rxjs/operators';
import { Client } from '../../models/client.model';


@Injectable()
export class ClientEffects {

  constructor(
    private actions$: Actions,
    private clientsService: ClientsService
  ) {}

  @Effect()
  loadClients$ = this.actions$.ofType(ClientActions.REQUEST_CLIENTS)
    .pipe(
      switchMap((action: ClientActions.Action) => {
        console.log(action.type);
        return this.clientsService.getClients();
      }),
      map((clients: Client[]) => {
        console.log('got clients');
        return new ClientActions.LoadClients(clients);
      })
    );
}
