import { Component, OnInit } from '@angular/core';
import { Client } from '../../entite/client';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ClientService } from '../../service/client.service';
import { Ville } from 'src/app/entite/ville';
import { VilleService } from '../../service/ville.service';

@Component({
  selector: 'app-liste-client',
  templateUrl: './liste-client.component.html',
  styleUrls: ['./liste-client.component.css']
})
export class ListeClientComponent implements OnInit {

  clients : Client[] = null;
  villes : Ville[] = null;

  showModaleClient: boolean = false;
  isModalCreationClient: boolean = true;

  formClient = new FormGroup({
    id: new FormControl(),
    nom: new FormControl(),
    adresse1: new FormControl(),
    adresse2: new FormControl(),
    idVille: new FormControl(),
    nomVille: new FormControl(),
    cpVille: new FormControl()
  });

  constructor(private router: Router, private clientService: ClientService, private villeService: VilleService) { }
  

  ngOnInit() {
    this.update();
  }

  update() {
    this.getAllClients();
    this.getAllVilles();
    this.showModaleClient = false;
  }

  getAllClients() {
    this.clientService.getAllClients().subscribe(data => this.clients = data);
  }

  getAllVilles() {
    this.villeService.getAllVilles().subscribe(data => { this.villes = data; });
  }

  goToDetail(idClient: number) {
    this.router.navigate(['/clients', idClient])
  }

  deleteClient(idClient:number, nom:string) {
    if(confirm("Voulez-vous vraiment supprimer le client " + nom + " ?")) {
      this.clientService.deleteClient(idClient).subscribe(data => this.update());
    }
  }

  /***** MODALES *****/

  displayAjoutClient() {
    this.isModalCreationClient = true;
    this.formClient.reset();
    this.formClient.patchValue({
      idVille: 0
    });
    this.showModaleClient = true;
  }

  displayEditClient(idClient: number) {
    this.isModalCreationClient = false;
    this.formClient.reset();
    this.clientService.getClientById(idClient).subscribe(c => {
      this.formClient.patchValue({
        id :  c.id,
        nom: c.nom,
        adresse1: c.adresse1,
        adresse2: c.adresse2,
        idVille: c.ville.id
      });
    });
    this.showModaleClient = true;
  }

  onSubmitClient() {
    let v: Ville = new Ville();

    if(+this.formClient.value.idVille < 1) {
      v.nom = this.formClient.value.nomVille;
      v.codePostal = this.formClient.value.cpVille;
    }
    else {
      v.id = this.formClient.value.idVille;
    }

    let c: Client = new Client(this.formClient.value.nom, this.formClient.value.adresse1, this.formClient.value.adresse2, v);
    
    if(this.isModalCreationClient) {
      this.clientService.createClient(c).subscribe(data => {
        this.update();
        this.showModaleClient = false;
      });
    }
    else {
      c.id = this.formClient.value.id;
      this.clientService.editClient(c).subscribe(data => this.update());
    }
  }
}
