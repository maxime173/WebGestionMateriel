import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-detail-client',
  templateUrl: './detail-client.component.html',
  styleUrls: ['./detail-client.component.css'],
  providers: [ClientService]
})
export class DetailClientComponent implements OnInit {

  client: Client;

  constructor(private route: ActivatedRoute, private router: Router, private clientService: ClientService) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.clientService.getClientById(id).subscribe(data =>this.client = data); 
    });
  }

}
