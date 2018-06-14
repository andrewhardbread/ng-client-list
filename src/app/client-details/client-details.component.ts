import {Component, OnDestroy, OnInit} from '@angular/core';
import {Client} from '../client.model';
import {ClientsService} from '../clients.service';
import {takeWhile} from 'rxjs/operators';


@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit, OnDestroy {

  client: Client;
  alive: boolean;

  constructor(
    private clientsService: ClientsService
  ) {
    this.alive = true;
  }

  ngOnInit() {
    this.clientsService.clientSubject
      .pipe(takeWhile(() => this.alive))
      .subscribe(
        (client: Client) => {
          this.client = client;
        }
      );
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
