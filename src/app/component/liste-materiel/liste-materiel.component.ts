import { Component, OnInit, Input, Output } from '@angular/core';
import { MaterielService } from '../../service/materiel.service';
import { Materiel } from '../../entite/materiel';
import { Router } from '@angular/router';
import { EventEmitter } from 'events';

/*var $ = require('jquery');
var dt = require('datatables.net');*/

@Component({
  selector: 'app-liste-materiel',
  templateUrl: './liste-materiel.component.html',
  styleUrls: ['./liste-materiel.component.css'],
  providers: [MaterielService]
})
export class ListeMaterielComponent implements OnInit {

  @Input() idClient:number;
  @Output() hide: EventEmitter
  materiels : Materiel[] = null;
  showAjoutMateriel: boolean = false;
  
  constructor(private router: Router, private materielService: MaterielService) { }

  ngOnInit() {
    this.getMaterielsFromClient();
    //$('#listMateriel').DataTable();
  }

  getMaterielsFromClient() {
    this.materielService.getMaterielsFromClient(this.idClient).subscribe(data => this.materiels = data);
  }

  goToDetail(idMateriel: number) {
    this.router.navigate(['/clients/' + this.idClient + '/materiels/' + idMateriel])
  }

  displayAjoutMateriel() {
    this.showAjoutMateriel = true;
  }

}
