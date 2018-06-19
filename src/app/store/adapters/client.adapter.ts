import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';

import { Client } from '../../models/client.model';

export const adapter: EntityAdapter<Client> = createEntityAdapter<Client>({
  sortComparer: false
});

export const {
  selectEntities: getClientDictionary,
  selectAll: getAllClients,
} = adapter.getSelectors();
