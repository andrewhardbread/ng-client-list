import {Component, OnInit} from '@angular/core';
import {Client} from '../client.model';
import {ClientsService} from '../clients.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {
  query: string;
  clients: Client[] = [];
  receivedClients: Client[];

  constructor(
    private clientsService: ClientsService
  ) {}

  ngOnInit() {
    this.clientsService.getClients()
      .subscribe(
        (response: any) => {
          this.clients = response.data.docs;
          this.receivedClients = response.data.docs;
        }
      );
  }

  search() {
    this.clients = this.receivedClients
      .filter(
        (client: Client) => {
          return Object.values(client).some(
            (obj) => Object.values(obj).toString().includes(this.query)
          );
        }
      );
  }

}
