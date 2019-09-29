import { Component, OnInit, Input } from '@angular/core';
import { TypeMaterielService } from '../../service/type-materiel.service';
import { TypeMateriel } from '../../entite/typeMateriel';
import { FormControl, FormGroup } from '@angular/forms';
import { Materiel } from '../../entite/materiel';
import { MaterielService } from '../../service/materiel.service';

@Component({
  selector: 'app-ajout-materiel',
  templateUrl: './ajout-materiel.component.html',
  styleUrls: ['./ajout-materiel.component.css'],
  providers: [TypeMaterielService]
})
export class AjoutMaterielComponent implements OnInit {
  @Input() idClient:number;
  @Input() show: boolean;

  typeMateriels: TypeMateriel[] = null;

  formMateriel = new FormGroup({
    nom: new FormControl(),
    numSerie: new FormControl(),
    idTypeMateriel: new FormControl()
  });

  constructor(private typeMaterielService: TypeMaterielService, private materielService: MaterielService) { }

  ngOnInit() {
    this.getAllTypeMateriels();
  }

  getAllTypeMateriels() {
    this.typeMaterielService.getAllTypeMateriels().subscribe(data => this.typeMateriels = data);
  }

  onSubmit() {
    let tm: TypeMateriel = new TypeMateriel(this.form.value.type);
    let m: Materiel = new Materiel(this.form.value.libelle, this.form.value.numSerie, tm);
    console.log(m);
    this.materielService.createMateriel(this.idClient, m).subscribe(data => {
      console.log(data);
    });
  }

}
