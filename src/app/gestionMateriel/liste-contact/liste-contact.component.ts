import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-contact',
  templateUrl: './liste-contact.component.html',
  styleUrls: ['./liste-contact.component.css'],
  providers: [ContactService]
})
export class ListeContactComponent implements OnInit {

  contacts : Contact[] = null;

  constructor(private router: Router, private contactService: ContactService) { }

  ngOnInit() {
    this.getAllContacts();
  }

  getAllContacts() {
    this.contactService.getAllContacts().subscribe(data => this.contacts = data);
  }

}
