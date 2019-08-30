import { Component, OnInit, Input } from '@angular/core';
import { Materiel } from '../materiel';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MaterielService } from '../materiel.service';

@Component({
  selector: 'app-detail-materiel',
  templateUrl: './detail-materiel.component.html',
  styleUrls: ['./detail-materiel.component.css'],
  providers: [MaterielService]
})
export class DetailMaterielComponent implements OnInit {

  @Input() idClient:number;
  materiel: Materiel;

  constructor(private route: ActivatedRoute, private router: Router, private materielService: MaterielService) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.materielService.getMaterielById(id).subscribe(data => {
          this.materiel = data;
          console.log(this.materiel)
      }
          );
    });
  }

}
