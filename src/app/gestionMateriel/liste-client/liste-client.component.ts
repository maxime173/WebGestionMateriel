import { Component, OnInit } from '@angular/core';
import { Client } from '../Client';
import { Router } from '@angular/router';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-liste-client',
  templateUrl: './liste-client.component.html',
  styleUrls: ['./liste-client.component.css']
})
export class ListeClientComponent implements OnInit {

  clients : Client[] = null;

  constructor(private router: Router, private clientService: ClientService) { }
  

  ngOnInit() {
    this.getAllClients();
  }

  getAllClients() {
    this.clientService.getAllClients().subscribe(data => this.clients = data);
  }
}
