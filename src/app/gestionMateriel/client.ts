
export class Client {
    public constructor (
        public id: number, 
        public nom: string, 
        public adrresse1: string, 
        public adresse2: string, 
        public idcpville : number) {}

    public static fromJson(json: Object): 
    Client {
        return new Client(
            json['id'], 
            json['nom'],
            json['adresse1'],
            json['adresse2'],
            json['idcpville']
        );
    }
    }
