import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Client } from '../../entite/client';
import { ClientService } from '../../service/client.service';
import { FormControl, FormGroup } from '@angular/forms';
import { IncidentService } from 'src/app/service/incident.service';

@Component({
  selector: 'app-detail-client',
  templateUrl: './detail-client.component.html',
  styleUrls: ['./detail-client.component.css'],
  providers: [ClientService]
})
export class DetailClientComponent implements OnInit {

  client: Client;

  formExportIncident = new FormGroup({
    debut: new FormControl(),
    fin: new FormControl()
  });

  constructor(private route: ActivatedRoute, private router: Router, 
    private clientService: ClientService, private incidentService: IncidentService) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.clientService.getClientById(id).subscribe(data =>this.client = data); 
    });
  }

  onExportIncident() {
    let dateDebut: Date = this.formExportIncident.value.debut;
    let dateFin: Date = this.formExportIncident.value.fin;
    this.incidentService.exportIncidentFromClient(this.client.id, dateDebut, dateFin).subscribe(data => {

      console.log("reçu");
      var newBlob = new Blob([data], { type: "application/pdf" });
      
      console.log(newBlob.size);

      // Fix pour IE qui ne gère pas la suite
      if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(newBlob); 
        return;  
      }

      const pdf = window.URL.createObjectURL(newBlob);
      var link = document.createElement('a');
      link.href = pdf;

      link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
      //Libération de l'object url une fois le téléchargement commencé seulement
      setTimeout(function () { window.URL.revokeObjectURL(pdf); link.remove(); }, 100);

    });
  }

}
