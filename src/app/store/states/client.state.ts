import { Client } from '../../models/client.model';

export interface ClientState {
  clients: Client[];
  selectedClient: number;
}

export const initialClientState: ClientState = {
  clients: [],
  selectedClient: null
};
