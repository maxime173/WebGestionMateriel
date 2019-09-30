import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../../entite/contact';
import { ContactService } from '../../service/contact-service';
import { Router } from '@angular/router';
import { Fonction } from 'src/app/entite/fonction';
import { FormControl, FormGroup } from '@angular/forms';
import { FonctionService } from 'src/app/service/fonction.service';
import { Personne } from 'src/app/entite/personne';

/*var $ = require('jquery');
var dt = require('datatables.net');*/

@Component({
  selector: 'app-liste-contact',
  templateUrl: './liste-contact.component.html',
  styleUrls: ['./liste-contact.component.css'],
  providers: [ContactService]
})

export class ListeContactComponent implements OnInit {

  @Input() idClient:number;
  contacts : Contact[] = null;

  fonctions: Fonction[] = null;
  showModaleContact: boolean = false;
  isModalCreationContact: boolean = true;

  formContact: FormGroup = new FormGroup({
    id: new FormControl(),
    idPersonne: new FormControl(),
    nom: new FormControl(),
    prenom: new FormControl(),
    telephone: new FormControl(),
    email: new FormControl(),
    idFonction: new FormControl()
  });

  constructor(private router: Router, private contactService: ContactService, private fonctionService: FonctionService) { }

  ngOnInit() {
    this.getContactsFromClient();
    this.fonctionService.getAllFonctions().subscribe(f => this.fonctions = f);
    //$('#listContact').DataTable();
  }

  getContactsFromClient() {
    this.contactService.getContactsFromClient(this.idClient).subscribe(data => this.contacts = data);
  }

  deleteContact(idContact:number, contact: string) {
    if(confirm("Voulez-vous vraiment supprimer le contact " + contact + " ?")) {
      this.contactService.deleteContact(this.idClient, idContact).subscribe((response) => this.getContactsFromClient());
    }
  }

  /***** MODALE *****/

  displayAjoutContact() {
    this.isModalCreationContact = true;
    this.formContact.reset();
    this.showModaleContact = true;
  }

  displayEditContact(idContact: number) {
    this.isModalCreationContact = false;
    this.formContact.reset();
    this.contactService.getContactByIdFromClient(this.idClient, idContact).subscribe(c => {
      this.formContact.patchValue({
        id:  c.id,
        idPersonne: c.personne.id,
        nom: c.personne.nom,
        prenom: c.personne.prenom,
        telephone: c.personne.telephone,
        email: c.personne.email,
        idFonction: c.fonction.id
      });

    });
    this.showModaleContact = true;
  }

  onSubmitContact() {
    let f: Fonction = new Fonction(this.formContact.value.idFonction);
    let p: Personne = new Personne(this.formContact.value.nom, 
      this.formContact.value.prenom,
      this.formContact.value.telephone,
      this.formContact.value.email);
    let c: Contact = new Contact(f, p);
    
    if(this.isModalCreationContact) {
      this.contactService.createContact(this.idClient, c).subscribe(data => {
        this.getContactsFromClient();
        this.showModaleContact = false;
      });
    }
    else {
      c.id = this.formContact.value.id;
      this.contactService.editContact(this.idClient, c).subscribe(data => {
        this.getContactsFromClient();
        this.showModaleContact = false;
      });
    }
  }

}
