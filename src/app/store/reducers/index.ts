export * from './client.reducer';

import { AppState } from '../../app.state';
import { ClientState } from '../states/client.state';
import { Client } from '../../models/client.model';

import { createSelector } from '@ngrx/store';

export const getClientState = (state: AppState) => state.clientState;

export const getSelectedIndex = createSelector(
  getClientState,
  (state: ClientState) => {
    return state.selectedClient;
  }
);

export const getClients = createSelector(
  getClientState,
  (state: ClientState) => {
    return state.clients;
  }
);

export const getSelectedClient = createSelector(
  getSelectedIndex,
  getClients,
  (index: number, clients: Client[]) => {
    return clients[index];
  }
);
