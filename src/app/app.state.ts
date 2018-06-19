import { ClientState } from './store/states/client.state';
import { initialClientState } from './store/reducers';

export interface AppState {
  clientState: ClientState;
}

export const initialAppState: AppState = {
  clientState: initialClientState
};
