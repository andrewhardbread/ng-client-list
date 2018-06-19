import { EntityState } from '@ngrx/entity';

import { Client } from '../../models/client.model';

export interface ClientState extends EntityState<Client> {
  selectedClient: string;
}
