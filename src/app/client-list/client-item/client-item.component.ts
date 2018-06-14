import {Component, Input, OnInit} from '@angular/core';
import {Client} from '../../client.model';
import {ClientsService} from '../../clients.service';

@Component({
  selector: 'app-client-item',
  templateUrl: './client-item.component.html',
  styleUrls: ['./client-item.component.scss']
})
export class ClientItemComponent implements OnInit {

  @Input() client: Client;

  constructor(
    private clientsService: ClientsService
  ) { }

  ngOnInit() {
  }

  selectClient() {
    this.clientsService.clientSubject.next(this.client);
  }
}
