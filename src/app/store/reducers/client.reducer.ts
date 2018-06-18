import * as ClientActions from '../actions/client.actions';

import { ClientState, initialClientState } from '../states/client.state';


export function reducer(state: ClientState = initialClientState, action: ClientActions.Action): ClientState {

  switch (action.type) {

    case ClientActions.LOAD_CLIENTS: {
      return { ...state, clients: action.payload ? [...action.payload] : []};
    }

    case ClientActions.SELECT_CLIENT: {
      return { ...state, selectedClient: action.payload };
    }

  }

}
