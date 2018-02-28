import { UserDataModel, UserLoginDataModel } from '../../Models/DataModel/UserDataModel';
import { ResponseStatusDataModel, ResponseApiModel } from '../../Models/DataModel/ResponseApiModel';

import AppGlobals from '../../Models/AppGlobals';
import UserApiController from '../ApiController/UserApiController';
import BaseController from './BaseController';

export class UserController extends BaseController {
	private _IsUserLogin: Boolean;
	get IsUserLogin(): Boolean {
		return this._IsUserLogin;
	}

	public constructor() {
		super();
	}

	public async LoginUser(userLoginDataModel?: UserLoginDataModel): Promise<ResponseStatusDataModel> {
		let isUserLoggedIn = await AppGlobals.GetIsLoggedIn();
		if (isUserLoggedIn) {
			let userID = await AppGlobals.GetUserID();
			return await this.ReadUser(userID);
		}
		else 
		{
			if (userLoginDataModel == null) {
				return ResponseStatusDataModel.AppError;
			}

			userLoginDataModel.EmailAddress = userLoginDataModel.EmailAddress.trim();
			userLoginDataModel.Password = userLoginDataModel.Password.trim();

			if (userLoginDataModel.EmailAddress === "" || userLoginDataModel.Password === "") {
				return ResponseStatusDataModel.MissingField;
			}

			try {
				let loginResult = await AppGlobals.FirebaseApp.auth().signInWithEmailAndPassword(userLoginDataModel.EmailAddress, userLoginDataModel.Password);

				AppGlobals.UserLoginInfo = userLoginDataModel;
				return await this.ReadUser(loginResult.user.uid);
			}
			catch (error) {
				switch (error.code) {
					case 'auth/invalid-email':
						return ResponseStatusDataModel.InvalidEmail;
					case 'auth/user-disabled':
						return ResponseStatusDataModel.UserDisabled;
					case 'auth/user-not-found':
						return ResponseStatusDataModel.NotExist;
					case 'auth/wrong-password':
						return ResponseStatusDataModel.WrongPassword;
					default:
						return ResponseStatusDataModel.Unknown;
				}
			}
		}
	}

	public async ReadUser(userID?: string): Promise<ResponseStatusDataModel> {
		if (userID == null) {
			userID = await AppGlobals.GetUserID();
		}

		if (userID === '') {
			return ResponseStatusDataModel.Fail;
		}
		// Todo: get user from database
	}
}