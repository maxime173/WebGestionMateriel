import { Component, OnInit } from '@angular/core';
import { TypeMaterielService } from '../type-materiel.service';
import { TypeMateriel } from '../typeMateriel';

@Component({
  selector: 'app-ajout-materiel',
  templateUrl: './ajout-materiel.component.html',
  styleUrls: ['./ajout-materiel.component.css'],
  providers: [TypeMaterielService]
})
export class AjoutMaterielComponent implements OnInit {

  typeMateriels: TypeMateriel[] = null;

  constructor(private typeMaterielService: TypeMaterielService) { }

  ngOnInit() {
    this.getAllTypeMateriels();
  }

  getAllTypeMateriels() {
    this.typeMaterielService.getAllTypeMateriels().subscribe(data => this.typeMateriels = data);
  }

}
