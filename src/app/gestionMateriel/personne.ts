export class Personne {
    public constructor (
        public id: number, 
        public nom: string, 
        public prenom: string, 
        public telephone: string, 
        public email: string) {}

    public static fromJson(json: Object): Personne {
        return new Personne(
            json['id'], 
            json['nom'],
            json['prenom'],
            json['telephone'],
            json['email']
        );
    }
}