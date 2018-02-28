import { BaseDataModel } from './BaseDataModel';

export class PhysicalAddressDataModel extends BaseDataModel
{
    Address1: string;
    Address2: string;
    City: string;
    Country: string;
    PostalCode: string;

    constructor()
    {
        super();
        this.Address1 = "";;
        this.Address2 = "";
        this.City = "";
        this.Country = "";
        this.PostalCode = "";
    }

    ConvertToPlainObject()
    {
        return Object.assign({}, this);
    }
}