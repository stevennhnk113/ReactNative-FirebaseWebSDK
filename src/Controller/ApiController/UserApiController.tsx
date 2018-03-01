import { BaseApiController } from "./BaseApiController";
import { UserDataModel, UserLoginDataModel } from "../../Models/DataModel/UserDataModel";
import { ResponseApiModel, ResponseStatusDataModel } from "../../Models/DataModel/ResponseApiModel";
import { RequestApiModel } from "../../Models/DataModel/RequestApiModel";

class _UserApiController extends BaseApiController
{
	constructor(){
		super('Users');
	}

	public async ReadUser(userID: string) : Promise<ResponseApiModel>
	{
		//console.log("Api ReadUser");
		if (userID == null || userID === "")
		{
			return new ResponseApiModel(ResponseStatusDataModel.AppError, null);
		}

		let result = this.Collection.child(userID).once;
	}

	public async CreateUser(user: UserDataModel) : Promise<ResponseApiModel>
	{
		//console.log("Api ReadUser");
		if (user.ID == null || user.ID === "")
		{
			return new ResponseApiModel(ResponseStatusDataModel.AppError, null);
		}

		await this.Collection.child(user.ID).set(user);
	}
}

let UserApiController = new _UserApiController();
export default UserApiController;