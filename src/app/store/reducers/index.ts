import { AppState } from '../../app.state';

export * from './client.reducer';

import { ClientState } from '../states/client.state';

import { createSelector } from '@ngrx/store';

import { Client } from '../../models/client.model';

export const getClientState = (state: AppState) => state.clientState;

export const getSelectedIndex = createSelector(
  getClientState,
  (state: ClientState) => {
    return state ? state.selectedClient : 0;
  }
);

export const getClients = createSelector(
  getClientState,
  (state: ClientState) => {
    return state ? state.clients : [];
  }
);

export const getSelectedClient = createSelector(
  getSelectedIndex,
  getClients,
  (index: number, clients: Client[]) => {
    return clients[index];
  }
);
