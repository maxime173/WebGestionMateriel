import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VilleService } from '../ville.service';
import { Ville } from '../ville';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-client',
  templateUrl: './ajout-client.component.html',
  styleUrls: ['./ajout-client.component.css'],
  providers: [VilleService]
})
export class AjoutClientComponent implements OnInit {
  ajoutForm: FormGroup;
  submitted = false;
  villes : Ville[] = null;

  constructor(private router: Router, private villeService: VilleService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getAllVilles();
    this.ajoutForm = this.formBuilder.group({
      nom: ['', Validators.required],
      adresse1 : [''],
      adresse2: [''],
      ville: [''],
      codePostal : [''],
      
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

      console.log(this.ajoutForm.get("nom"));

      // display form values on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.ajoutForm.value, null, 4));
  }

  onReset() {
      this.submitted = false;
      this.ajoutForm.reset();
  }
  getAllVilles() {
    this.villeService.getAllVilles().subscribe(data => this.villes = data);
  }
  

  
}
