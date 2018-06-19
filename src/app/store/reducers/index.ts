import * as fromAdapter from '../adapters/client.adapter';

export * from './client.reducer';

import { AppState } from '../../app.state';
import { ClientState } from '../states/client.state';

import { createSelector } from '@ngrx/store';
import { Client } from '../../models/client.model';
import { Dictionary } from '@ngrx/entity/src/models';

export const getClientState = (state: AppState) => state.clientState;

export const getSelectedIndex = createSelector(
  getClientState,
  (state: ClientState) => {
    return state.selectedClient;
  }
);

export const getAllClients = createSelector(
  getClientState,
  fromAdapter.getAllClients
);

const getClientDictionary = createSelector(
  getClientState,
  fromAdapter.getClientDictionary
);

export const getSelectedClient = createSelector(
  getSelectedIndex,
  getClientDictionary,
  (index: string, clients: Dictionary<Client>) => {
    return clients[index];
  }
);
