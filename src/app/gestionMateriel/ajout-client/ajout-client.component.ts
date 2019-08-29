import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-ajout-client',
  templateUrl: './ajout-client.component.html',
  styleUrls: ['./ajout-client.component.css']
})
export class AjoutClientComponent implements OnInit {
  ajoutForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.ajoutForm = this.formBuilder.group({
      nom: ['', Validators.required],
      adresse1 : ['', Validators.required],
      adresse2: ['', Validators.required],
      ville: ['', Validators.required],
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

      // display form values on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.ajoutForm.value, null, 4));
  }

  onReset() {
      this.submitted = false;
      this.ajoutForm.reset();
  }
}
