export class TypeMateriel {
    public constructor (
        public id: number, 
        public libelle: string ) {}

    public static fromJson(json: Object): 
    TypeMateriel {
        return new TypeMateriel(
            json['id'], 
            json['libelle']
        );
    }
}
