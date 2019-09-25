import { Component, OnInit, Input } from '@angular/core';
import { Incident } from 'src/app/entite/incident';
import { IncidentService } from 'src/app/service/incident.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-incident',
  templateUrl: './liste-incident.component.html',
  styleUrls: ['./liste-incident.component.css'],
  providers: [IncidentService]
})
export class ListeIncidentComponent implements OnInit {

  @Input() idMateriel:number;
  incidents: Incident[] = null;

  constructor(private router: Router, private incidentService: IncidentService) { }

  ngOnInit() {
    this.getInterfacesFromMateriel();
  }

  getInterfacesFromMateriel() {
    this.incidentService.getIncidentsFromMateriel(this.idMateriel).subscribe(data => this.incidents = data);
  }

}
