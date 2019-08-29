export class Ville {
    public constructor (
        public id: number, 
        public codePostal: string, 
        public nom: string) {}

    public static fromJson(json: Object): 
    Ville {
        return new Ville(
            json['id'], 
            json['codePostal'],
            json['nom']
        );
    }
    }
