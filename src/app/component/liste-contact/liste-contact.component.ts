import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../../entite/contact';
import { ContactService } from '../../service/contact-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-contact',
  templateUrl: './liste-contact.component.html',
  styleUrls: ['./liste-contact.component.css'],
  providers: [ContactService]
})
export class ListeContactComponent implements OnInit {

  @Input() idClient:number;
  contacts : Contact[] = null;

  constructor(private router: Router, private contactService: ContactService) { }

  ngOnInit() {
    this.getContactsFromClient();
  }

  getContactsFromClient() {
    this.contactService.getContactsFromClient(this.idClient).subscribe(data => this.contacts = data);
  }

  editContact(contact:Contact) {

  }

  deleteContact(idContact:number) {
    this.contactService.deleteContactById(this.idClient, idContact).subscribe((response) => {
      console.log("deleted")
    });
  }

}
