import { Component, Input, OnInit } from '@angular/core';
import { Client } from '../../../models/client.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.state';

import * as ClientActions from '../../../store/actions/client.actions';

@Component({
  selector: 'app-client-item',
  templateUrl: './client-item.component.html',
  styleUrls: ['./client-item.component.scss']
})
export class ClientItemComponent implements OnInit {

  @Input() client: Client;
  @Input() index: number;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
  }

  selectClient() {
    this.store.dispatch(new ClientActions.SelectClient(this.client.id));
  }
}
