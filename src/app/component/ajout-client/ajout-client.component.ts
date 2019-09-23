import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { VilleService } from '../../service/ville.service';
import { Ville } from '../../entite/ville';
import { Router } from '@angular/router';
import { ClientService } from '../../service/client.service';
import { HttpClient } from '@angular/common/http';
import { Client } from '../../entite/client';


@Component({
  selector: 'app-ajout-client',
  templateUrl: './ajout-client.component.html',
  styleUrls: ['./ajout-client.component.css'],
  providers: [VilleService, ClientService]
})
export class AjoutClientComponent implements OnInit {
  submitted = false;
  villes : Ville[] = null;
  form = new FormGroup({
    nom :new FormControl(),
    adresse1 : new FormControl(),
    adresse2 : new FormControl(),
    ville : new FormControl(),
    codePostal : new FormControl(),
    nomVille : new FormControl(),
  })


  constructor(private router: Router, private villeService: VilleService, private formBuilder: FormBuilder , private http: HttpClient, private clientService: ClientService) { }

  ngOnInit() {
    this.getAllVilles(); 
  }
    
  getAllVilles() {
    this.villeService.getAllVilles().subscribe(data => {
      this.villes = data;
      console.log(data);
      })
  }

  onSubmit() {
    let v: Ville = new Ville();
    if(this.form.value.ville != 0) {
      v.id = this.form.value.ville;
    }
    else {
      v.codePostal = this.form.value.codePostal;
      v.nom = this.form.value.nomVille
      //mettre le nom et code postal
    }
    let c: Client = new Client(this.form.value.nom, this.form.value.adresse1, this.form.value.adresse2, v);
    console.warn(c);
    alert(c);
    this.clientService.createClient(c).subscribe(data => {
      console.log(data);
    });
    
  }
}



  

  

