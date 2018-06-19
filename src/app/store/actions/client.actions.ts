import { Action } from '@ngrx/store';
import { Client } from '../../models/client.model';

export enum Actions {
  LOAD_CLIENTS = '[CLIENT] Load',
  REQUEST_CLIENTS = '[CLIENT] Request',
  SELECT_CLIENT = '[CLIENT] Select',
  REMOVE_CLIENT = '[CLIENT] Remove'
}

export class LoadClients implements Action {
  readonly type = Actions.LOAD_CLIENTS;

  constructor(public payload: Client[]) {}
}

export class RemoveClient implements Action {
  readonly type = Actions.REMOVE_CLIENT;

  constructor(public payload: string) {}
}

export class RequestClients implements Action {
  readonly type = Actions.REQUEST_CLIENTS;

  constructor(public payload: string) {}
}

export class SelectClient implements Action {
  readonly type = Actions.SELECT_CLIENT;

  constructor(public payload: string) {}
}

export type Action =
  RequestClients
  | LoadClients
  | RemoveClient
  | SelectClient;
