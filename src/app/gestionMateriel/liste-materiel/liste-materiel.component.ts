import { Component, OnInit, Input } from '@angular/core';
import { MaterielService } from '../materiel.service';
import { Materiel } from '../materiel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-materiel',
  templateUrl: './liste-materiel.component.html',
  styleUrls: ['./liste-materiel.component.css'],
  providers: [MaterielService]
})
export class ListeMaterielComponent implements OnInit {

  @Input() idClient:number;
  materiels : Materiel[] = null;
  
  constructor(private router: Router, private materielService: MaterielService) { }

  ngOnInit() {
    this.getMaterielsFromClient();
  }

  getMaterielsFromClient() {
    this.materielService.getMaterielsFromClient(this.idClient).subscribe(data => this.materiels = data);
  }

  goToDetail(idMateriel: number) {
    this.router.navigate(['/materiels', idMateriel])
  }

}
