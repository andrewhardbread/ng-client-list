import { ClientState, initialClientState } from './store/states/client.state';

export interface AppState {
  clientState: ClientState;
}

export const initialAppState: AppState = {
  clientState: initialClientState
};
