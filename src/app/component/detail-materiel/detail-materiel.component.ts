import { Component, OnInit, Input } from '@angular/core';
import { Materiel } from '../../entite/materiel';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MaterielService } from '../../service/materiel.service';

@Component({
  selector: 'app-detail-materiel',
  templateUrl: './detail-materiel.component.html',
  styleUrls: ['./detail-materiel.component.css'],
  providers: [MaterielService]
})
export class DetailMaterielComponent implements OnInit {

  idClient:number;
  materiel: Materiel;
  urlImg: String;

  constructor(private route: ActivatedRoute, private router: Router, private materielService: MaterielService) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.idClient = +params['idClient'];
      let id = +params['id'];
      this.materielService.getMaterielByIdFromClient(this.idClient, id).subscribe(data => {
        this.materiel = data;
        this.urlImg =  this.materielService.getUrlQrCode(this.idClient, id);
      });
    });
  }

}
