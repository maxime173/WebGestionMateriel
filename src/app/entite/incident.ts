import { Status } from './status';

export class Incident {
    public constructor () {}
    public id: number;
    public libelle: string;
    public symptome: string;
    public resolution: string;
    public dateCreation: Date;
    public dateCloture: Date;
    public status: Status;

}
