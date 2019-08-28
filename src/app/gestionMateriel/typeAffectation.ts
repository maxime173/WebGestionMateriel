export class TypeAffectation {
    public constructor (
        public id: number, 
        public libelle: string ) {}

    public static fromJson(json: Object): 
    TypeAffectation {
        return new TypeAffectation(
            json['id'], 
            json['libelle']
        );
    }
    }