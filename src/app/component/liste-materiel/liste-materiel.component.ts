import { Component, OnInit, Input, Output } from '@angular/core';
import { MaterielService } from '../../service/materiel.service';
import { Materiel } from '../../entite/materiel';
import { Router } from '@angular/router';
import { EventEmitter } from 'events';
import { FormGroup, FormControl } from '@angular/forms';
import { TypeMateriel } from 'src/app/entite/typeMateriel';
import { TypeMaterielService } from 'src/app/service/type-materiel.service';

/*var $ = require('jquery');
var dt = require('datatables.net');*/

@Component({
  selector: 'app-liste-materiel',
  templateUrl: './liste-materiel.component.html',
  styleUrls: ['./liste-materiel.component.css'],
  providers: [MaterielService, TypeMaterielService]
})
export class ListeMaterielComponent implements OnInit {

  @Input() idClient:number;
  @Output() hide: EventEmitter
  materiels : Materiel[] = null;
  
  showModaleMateriel: boolean = false;
  isModalCreationMateriel: boolean = true;
  typeMateriels: TypeMateriel[] = null;

  formMateriel = new FormGroup({
    id: new FormControl(),
    nom: new FormControl(),
    numSerie: new FormControl(),
    idTypeMateriel: new FormControl()
  });
  
  constructor(private router: Router, private materielService: MaterielService, private typeMaterielService: TypeMaterielService) { }

  ngOnInit() {
    this.getMaterielsFromClient();
    this.typeMaterielService.getAllTypeMateriels().subscribe(data => this.typeMateriels = data);
    //$('#listMateriel').DataTable();
  }

  getMaterielsFromClient() {
    this.materielService.getMaterielsFromClient(this.idClient).subscribe(data => this.materiels = data);
  }

  goToDetail(idMateriel: number) {
    this.router.navigate(['/clients/' + this.idClient + '/materiels/' + idMateriel])
  }

  deleteMateriel(idMateriel:number, nom:string) {
    if(confirm("Voulez-vous vraiment supprimer le materiel " + nom + " ?")) {
      this.materielService.deleteMateriel(this.idClient, idMateriel).subscribe(data => this.getMaterielsFromClient());
    }
  }

  /***** MODALES *****/

  displayAjoutMateriel() {
    this.isModalCreationMateriel = true;
    this.formMateriel.reset();
    this.showModaleMateriel = true;
  }

  displayEditMateriel(idMateriel: number) {
    this.isModalCreationMateriel = false;
    this.formMateriel.reset();
    this.materielService.getMaterielByIdFromClient(this.idClient, idMateriel).subscribe(m => {
      this.formMateriel.patchValue({
        id :  m.id,
        nom: m.libelle,
        numSerie: m.numSerie,
        idTypeMateriel: m.typeMateriel.id
      });
    });
    this.showModaleMateriel = true;
  }

  onSubmitMateriel() {
    let tm: TypeMateriel = new TypeMateriel(this.formMateriel.value.idTypeMateriel);
    let m: Materiel = new Materiel(this.formMateriel.value.nom, this.formMateriel.value.numSerie, tm);
    
    if(this.isModalCreationMateriel) {
      this.materielService.createMateriel(this.idClient, m).subscribe(data => {
        this.getMaterielsFromClient();
        this.showModaleMateriel = false;
      });
    }
    else {
      m.id = this.formMateriel.value.id;
      this.materielService.editMateriel(this.idClient, m).subscribe(data => {
        this.getMaterielsFromClient();
        this.showModaleMateriel = false;
      });
    }
  }

}
