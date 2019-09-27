import { Component, OnInit, Input } from '@angular/core';
import { InterfaceService } from '../../service/interface.service';
import { Router } from '@angular/router';
import { Interface } from '../../entite/interface';
import { FormGroup, FormControl } from '@angular/forms';
import { TypeInterface } from 'src/app/entite/typeInterface';
import { AdresseIp } from 'src/app/entite/adresseIp';
import { TypeAffectation } from 'src/app/entite/typeAffectation';
import { TypeInterfaceService } from 'src/app/service/type-interface.service';
import { TypeAffectationService } from 'src/app/service/type-affectation.service';

@Component({
  selector: 'app-liste-interface',
  templateUrl: './liste-interface.component.html',
  styleUrls: ['./liste-interface.component.css'],
  providers: [InterfaceService]
})
export class ListeInterfaceComponent implements OnInit {

  @Input() idMateriel:number;
  interfaces: Interface[] = null;

  typeInterfaces: TypeInterface[] = null;
  typeAffectations: TypeAffectation[] = null;
  showModaleInterface: boolean = false;
  isModalCreationInterface: boolean = true;

  formInterface: FormGroup = new FormGroup({
    id: new FormControl(),
    nom: new FormControl(),
    mac: new FormControl(),
    idTypeIf: new FormControl(),
    ipv4: new FormControl(),
    ipv6: new FormControl(),
    masque: new FormControl(),
    idTypeAff: new FormControl()
  });

  constructor(
    private router: Router, 
    private interfaceService: InterfaceService, 
    private typeInterfaceService: TypeInterfaceService, 
    private typeAffectationService: TypeAffectationService ) { }

  ngOnInit() {
    this.getInterfacesFromMateriel();
    this.typeAffectationService.getAllTypeAffectations().subscribe(ta => this.typeAffectations = ta);
    this.typeInterfaceService.getAllTypeInterfaces().subscribe(ti => this.typeInterfaces = ti);
  }

  getInterfacesFromMateriel() {
    this.interfaceService.getInterfacesFromMateriel(this.idMateriel).subscribe(data => this.interfaces = data);
  }

  deleteInterface(idInterface:number, nom:string) {
    if(confirm("Voulez-vous vraiment supprimer l'interface " + nom + " ?")) {
      this.interfaceService.deleteInterface(this.idMateriel, idInterface).subscribe(data => this.getInterfacesFromMateriel());
    }
  }

  /***** MODALE *****/

  displayAjoutInterface() {
    this.isModalCreationInterface = true;
    this.formInterface.reset();
    this.showModaleInterface = true;
  }

  displayEditInterface(idInterface: number) {
    this.isModalCreationInterface = false;
    this.formInterface.reset();
    this.interfaceService.getInterfaceByIdFromMateriel(this.idMateriel, idInterface).subscribe(i => {
      this.formInterface.patchValue({
        id :  i.id,
        mac : i.mac,
        nom: i.nom,
        idTypeIf: i.typeif.id
      });
      
      if(i.adresse != null) {
        this.formInterface.patchValue({
          ipv4 :  i.adresse.ipv4,
          ipv6 : i.adresse.ipv6,
          masque: i.adresse.masque,
          idTypeAff: i.adresse.typeAffectation.id
        });
      }

    });
    this.showModaleInterface = true;
  }

  onSubmitInterface() {
    let ti: TypeInterface = new TypeInterface(this.formInterface.value.idTypeIf);
    let i: Interface = new Interface(this.formInterface.value.nom, ti);

    i.mac = this.formInterface.value.mac;

    //Si une adresse ip est renseignée
    if(this.formInterface.value.ipv4 != null) {
      let ta: TypeAffectation = new TypeAffectation(this.formInterface.value.idTypeAff);
      let a: AdresseIp = new AdresseIp(this.formInterface.value.ipv4, this.formInterface.value.masque, ta);
      a.ipv6 = this.formInterface.value.ipv6;
      i.adresse = a;
    }
    
    if(this.isModalCreationInterface) {
      this.interfaceService.createInterface(this.idMateriel, i).subscribe(data => {
        this.getInterfacesFromMateriel();
        this.showModaleInterface = false;
      });
    }
    else {
      i.id = this.formInterface.value.id;
      this.interfaceService.editInterface(this.idMateriel, i).subscribe(data => {
        this.getInterfacesFromMateriel();
        this.showModaleInterface = false;
      });
    }
  }

}
