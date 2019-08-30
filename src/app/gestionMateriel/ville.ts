export class Ville {
    public constructor () {}
    public id: number;
    public codePostal: string;
    public nom: string;

    public static fromJson(json: Object): Ville {
        let v: Ville = new Ville();
        v.id = json['id'];
        v.codePostal = json['codePostal'];
        v.nom = json['nom'];
        return v;
    }
}
