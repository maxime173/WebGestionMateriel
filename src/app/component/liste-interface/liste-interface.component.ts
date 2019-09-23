import { Component, OnInit, Input } from '@angular/core';
import { InterfaceService } from '../../service/interface.service';
import { Router } from '@angular/router';
import { Interface } from '../../entite/interface';

@Component({
  selector: 'app-liste-interface',
  templateUrl: './liste-interface.component.html',
  styleUrls: ['./liste-interface.component.css'],
  providers: [InterfaceService]
})
export class ListeInterfaceComponent implements OnInit {

  @Input() idMateriel:number;
  interfaces: Interface[] = null;

  constructor(private router: Router, private interfaceService: InterfaceService) { }

  ngOnInit() {
    this.getInterfacesFromMateriel();
  }

  getInterfacesFromMateriel() {
    this.interfaceService.getInterfacesFromMateriel(this.idMateriel).subscribe(data => this.interfaces = data);
  }

}
