import { TypeMateriel } from './typeMateriel';

export class Materiel {
    public constructor (
        public id: number, 
        public libelle: string, 
        public numserie: string, 
        public idclient: number, 
        public idtype : number) {}

    public static fromJson(json: Object): 
    Materiel {
        return new Materiel(
            json['id'], 
            json['libelle'],
            json['numserie'],
            json['idclient'],
            json['idtype']
        );
    }
    }
