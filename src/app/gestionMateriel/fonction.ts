export class Fonction {
    public constructor (
        public id: number, 
        public libelle: string) {}

    public static fromJson(json: Object): Fonction {
        return new Fonction(
            json['id'], 
            json['libelle']
        );
    }
}