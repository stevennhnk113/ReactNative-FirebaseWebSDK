import { BaseDataModel } from "../DataModel/BaseDataModel";

export class UserDataModel extends BaseDataModel
{
    public FirstName: string;
    public LastName: string;

    public EmailAddress: string;
    public PhoneNumber: string;

    public DOB: Date;

    constructor()
    {
        super();
        this.ID = "";

        this.FirstName = "";
        this.LastName = "";

        this.EmailAddress = "";
        this.PhoneNumber = "";
    
        this.DOB = new Date(1, 1, 1);
    }


    ConvertToPlainObject(): any
    {
        var data = Object.assign({}, this);
        return data;
    }
}

export class UserLoginDataModel
{
    EmailAddress: string;
    Password: string;

    constructor()
    {
        this.EmailAddress = "";
        this.Password = "";
    }
}

export class UserRegisterDataModel
{
    EmailAddress: string;
    ConfirmEmailAddress: string;
    Password: string;
    ConfirmPassword: string;

    constructor()
    {
        this.EmailAddress = "";
        this.ConfirmEmailAddress = "";
        this.Password = "";
        this.ConfirmPassword = "";
    }
}

export class UsernameIDPair extends BaseDataModel
{
    public FirstName: string;
    public LastName: string;

    constructor(lastName: string, firstName: string, ID: string)
    {
        super();
        this.FirstName = firstName;
        this.LastName = lastName;
        this.ID = ID;
    }

    ConvertToPlainObject()
    {
        return Object.assign({}, this);
    }
}