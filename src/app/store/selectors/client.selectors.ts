import { createSelector } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity/src/models';

import { adapter } from '../adapters/client.adapter';

import { Client } from '../../models/client.model';

import { ClientState } from '../states/client.state';
import { AppState } from '../../app.state';

export const {
  selectEntities,
  selectAll,
} = adapter.getSelectors();


export const getClientState = (state: AppState) => state.clientState;

export const getSelectedIndex = createSelector(
  getClientState,
  (state: ClientState) => {
    return state.selectedClient;
  }
);

export const getAllClients = createSelector(
  getClientState,
  selectAll
);

const getClientDictionary = createSelector(
  getClientState,
  selectEntities
);

export const getSelectedClient = createSelector(
  getSelectedIndex,
  getClientDictionary,
  (index: string, clients: Dictionary<Client>) => {
    return clients[index];
  }
);
