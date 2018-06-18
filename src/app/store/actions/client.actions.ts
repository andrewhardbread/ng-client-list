import { Action } from '@ngrx/store';
import { Client } from '../../models/client.model';

export const LOAD_CLIENTS = '[CLIENT] Load';
export const REQUEST_CLIENTS = '[CLIENT] Request';
export const SELECT_CLIENT = '[CLIENT] Select';

export class LoadClients implements Action {
  readonly type = LOAD_CLIENTS;

  constructor(public payload: Client[]) {}
}

export class RequestClients implements Action {
  readonly type = REQUEST_CLIENTS;

  constructor(public payload: string) {}
}

export class SelectClient implements Action {
  readonly type = SELECT_CLIENT;

  constructor(public payload: number) {}
}

export type Action = RequestClients | LoadClients | SelectClient;
