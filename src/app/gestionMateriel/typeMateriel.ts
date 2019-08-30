
export class TypeMateriel {
    public constructor (
        public id: number) {}
    
    public libelle: string

    public static fromJson(json: Object): TypeMateriel {
        let tm = new TypeMateriel(json['id']);
        tm.libelle = json['libelle'];
        return tm;
    }
}
