import * as ClientActions from '../actions/client.actions';

import { ClientState } from '../states/client.state';
import { adapter } from '../adapters/client.adapter';

export const initialClientState: ClientState = adapter.getInitialState({
  selectedClient: null
});


export function reducer(state: ClientState = initialClientState, action: ClientActions.Action): ClientState {

  switch (action.type) {

    case ClientActions.Actions.LOAD_CLIENTS: {
      return adapter.addAll(action.payload, state);
    }

    case ClientActions.Actions.REMOVE_CLIENT:
      return adapter.removeOne(action.payload, state);

    case ClientActions.Actions.SELECT_CLIENT: {
      return { ...state, selectedClient: action.payload };
    }

    default:
      return state;

  }

}
