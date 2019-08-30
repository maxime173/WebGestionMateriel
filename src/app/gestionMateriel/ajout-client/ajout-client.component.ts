import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VilleService } from '../ville.service';
import { Ville } from '../ville';
import { Router } from '@angular/router';
import { ClientService } from '../client.service';
import { HttpClient } from '@angular/common/http';
import { Client } from '../Client';


@Component({
  selector: 'app-ajout-client',
  templateUrl: './ajout-client.component.html',
  styleUrls: ['./ajout-client.component.css'],
  providers: [VilleService, ClientService]
})
export class AjoutClientComponent implements OnInit {
  ajoutForm: FormGroup;
  submitted = false;
  villes : Ville[] = null;
  body : Client;

  constructor(private router: Router, private villeService: VilleService, private formBuilder: FormBuilder , private http: HttpClient, private clientService: ClientService) { }

  ngOnInit() {
    this.getAllVilles();
    this.ajoutForm = this.formBuilder.group({
      nom: ['', Validators.required],
      adresse1 : [''],
      adresse2: [''],
      ville: [''],
      codePostal : [''],
      nomVille: [''],
      
  }, {

  });
  }
  get f() { return this.ajoutForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.ajoutForm.invalid) {
          return;

          
      }
    var body = 
   {
       "adresse1": this.ajoutForm.value.adresse1,
       "adresse2": this.ajoutForm.value.adresse2,
       "nom":this.ajoutForm.value.nom,
       "ville": {
        "codePostal": this.ajoutForm.value.codePostal,
        //"id": this.ajoutForm.value.ville,
        "nom": this.ajoutForm.value.nomVille
      }
   };
     // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.ajoutForm.value, null, 4));
      console.log(this.body);
     this.clientService.createClient(this.body)
      .subscribe((response)=>{
        console.log('repsonse ',response);
      // display form values on success
     
      
  })
}


  onReset() {
      this.submitted = false;
      this.ajoutForm.reset();
  }
  getAllVilles() {
    this.villeService.getAllVilles().subscribe(data => this.villes = data);
  }

  

  
}
