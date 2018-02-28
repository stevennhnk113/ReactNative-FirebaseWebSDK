export class ResponseApiModel
{
    public Status: ResponseStatusDataModel | string;
    public Data: any;

    constructor();
    constructor(status: ResponseStatusDataModel | string, object: any)
    constructor(status?: ResponseStatusDataModel | string, object?: any)
    {
        this.Status = (status == undefined) ? ResponseStatusDataModel.Unknown : status;
        this.Data = object;
    }
}

export enum ResponseStatusDataModel
{
    Success = "Success",
    Fail = "Fail",
    Unknown = "Unknown",
    ConnectionError = "Connection Error",
    ServerError = "Server Error",   
    AppError = "App Error",

    Exist = "Exist",
    NotExist = "Not Exist",

    InvalidEmail = 'Invalid Email',
    UserDisabled = 'User Disabled',
    WrongPassword = 'Wrong Password',

    HasPermission = "Has Permission",
    NoPermission = "No Permission",

    MissingField = "Missing Field",
}

