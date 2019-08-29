import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact-service';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-liste-contact',
  templateUrl: './liste-contact.component.html',
  styleUrls: ['./liste-contact.component.css'],
  providers: [ContactService]
})
export class ListeContactComponent implements OnInit {

  contacts : Contact[] = null;

  constructor(private route: ActivatedRoute, private router: Router, private contactService: ContactService) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.getContactsFromClient(id); // on utilise le service pour récupérer un super héros en fonction de son identifiant.
    });
  }

  getContactsFromClient(idClient:number) {
    this.contactService.getContactsFromClient(idClient).subscribe(data => this.contacts = data);
  }

  editContact(idClient:number, contact:Contact) {

  }

  deleteContact(idClient:number, idContact:number) {
    this.contactService.deleteContactById(idClient, idContact);
  }

}
