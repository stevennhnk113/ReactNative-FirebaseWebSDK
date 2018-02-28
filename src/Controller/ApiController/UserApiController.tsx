import { BaseApiController } from "./BaseApiController";
import { UserDataModel, UserLoginDataModel } from "../../Models/DataModel/UserDataModel";
import { ResponseApiModel, ResponseStatusDataModel } from "../../Models/DataModel/ResponseApiModel";
import { RequestApiModel } from "../../Models/DataModel/RequestApiModel";

class _UserApiController extends BaseApiController
{
	public async ReadUser(userID: string) : Promise<ResponseApiModel>
	{
		//console.log("Api ReadUser");
		if (userID == null || userID === "")
		{
			return new ResponseApiModel(ResponseStatusDataModel.AppError, null);
		}
	}
}

let UserApiController = new _UserApiController();
export default UserApiController;