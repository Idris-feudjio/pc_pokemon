import { AbstractRepository } from "../../../public/repositories/abstract_crud_repositories";
import { Trad } from "../trad_model";

export default class ServiceTrade extends AbstractRepository<Trad> {
    constructor(){
        super(Trad);
    }

}
