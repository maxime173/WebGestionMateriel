import { Component, OnInit, Input } from '@angular/core';
import { Incident } from 'src/app/entite/incident';
import { IncidentService } from 'src/app/service/incident.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-liste-incident',
  templateUrl: './liste-incident.component.html',
  styleUrls: ['./liste-incident.component.css'],
  providers: [IncidentService]
})
export class ListeIncidentComponent implements OnInit {

  @Input() idMateriel:number;
  incidents: Incident[] = null;

  showModaleIncident: boolean = false;
  isModalCreationIncident: boolean = true;

  formIncident: FormGroup = new FormGroup({
    libelle: new FormControl(),
    symptome: new FormControl(),
    resolution: new FormControl(),
    id: new FormControl()
  });

  constructor(private router: Router, private incidentService: IncidentService) { }

  ngOnInit() {
    this.getIncidentsFromMateriel();
  }

  getIncidentsFromMateriel() {
    this.incidentService.getIncidentsFromMateriel(this.idMateriel).subscribe(data => this.incidents = data);
  }

  cloreTicket(idIncident: number) {
    this.incidentService.cloreIncidentFromMateriel(this.idMateriel, idIncident).subscribe(data => this.getIncidentsFromMateriel());
  }

  /***** MODALE *****/

  displayAjoutIncident() {
    this.isModalCreationIncident = true;
    this.formIncident.reset();
    this.showModaleIncident = true;
  }

  displayEditIncident(idIncident: number) {
    this.isModalCreationIncident = false;
    this.formIncident.reset();
    this.incidentService.getIncidentByIdFromMateriel(this.idMateriel, idIncident).subscribe(i => {
      this.formIncident.patchValue({
        libelle: i.libelle,
        symptome : i.symptome,
        resolution : i.resolution,
        id :  i.id
      })
    });
    this.showModaleIncident = true;
  }

  onSubmitIncident() {
    let i: Incident = new Incident();
    i.libelle = this.formIncident.value.libelle;
    i.symptome = this.formIncident.value.symptome;

    if(this.isModalCreationIncident) {
      this.incidentService.createIncident(this.idMateriel, i).subscribe(data => {
        this.getIncidentsFromMateriel();
        this.showModaleIncident = false;
      });
    }
    else {
      i.resolution = this.formIncident.value.resolution;
      i.id = this.formIncident.value.id;
      this.incidentService.editIncident(this.idMateriel, i).subscribe(data => {
        this.getIncidentsFromMateriel();
        this.showModaleIncident = false;
      });
    }
  }

}
