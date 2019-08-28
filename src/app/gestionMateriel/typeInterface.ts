
export class TypeInterface {
    public constructor (
        public id: number, 
        public libelle: string ) {}

    public static fromJson(json: Object): 
    TypeInterface {
        return new TypeInterface(
            json['id'], 
            json['libelle']
        );
    }
    }