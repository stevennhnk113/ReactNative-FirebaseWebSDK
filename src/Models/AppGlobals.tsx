import AsyncStorageHelper from "../Helpers/AsyncStorageHelper";

import { UserDataModel, UserLoginDataModel } from "./DataModel/UserDataModel";
import { UserController } from "../Controller/DataController/UserController";

import * as Firebase from 'firebase';

class _AppGlobals {
	private _UserController: UserController;
	get UserController(): UserController {
		return this._UserController;
	}

	private _UserLoginDataModel: UserLoginDataModel;
	get UserLoginInfo(): UserLoginDataModel {
		return this._UserLoginDataModel
	}
	set UserLoginInfo(userLoginDataModel: UserLoginDataModel) {
		this._UserLoginDataModel = userLoginDataModel;
		if (this._IsRememberPassword) {
			console.log("Saving email and password");
			AsyncStorageHelper.SetUserEmailAddress(userLoginDataModel.EmailAddress);
			AsyncStorageHelper.SetUserPassword(userLoginDataModel.Password);
		}
	}

	private _IsRememberPassword: boolean
	get IsRememberPassword(): boolean {
		return this._IsRememberPassword;
	}
	set IsRememberPassword(isRemember: boolean) {
		this._IsRememberPassword = isRemember;
	}

	private _FirebaseApp: Firebase.app.App
	get FirebaseApp(): Firebase.app.App {
		return this._FirebaseApp;
	}

	//////////////////////////////
	public constructor() {
		this._UserController = new UserController();
		this.IsRememberPassword = false;

		// Use your Firebase configuratioh. 
		// Follow Project Read for instruction on where to get it
		this._FirebaseApp = Firebase.initializeApp({
			apiKey: "AIzaSyCMCCzhTuxtrkQAB5VQ9-h447EAEAC-mqs",
			authDomain: "testproject-bf510.firebaseapp.com",
			databaseURL: "https://testproject-bf510.firebaseio.com",
			projectId: "testproject-bf510",
			storageBucket: "testproject-bf510.appspot.com",
			messagingSenderId: "990196031625"
		});
	}

	public async GetUserLoginInfo() {
		let data = new UserLoginDataModel();
		if (await AsyncStorageHelper.GetRememberPassword()) {
			data.EmailAddress = await AsyncStorageHelper.GetUserEmailAddress();
			data.Password = await AsyncStorageHelper.GetUserPassword();

			if (data.EmailAddress === "" || data.Password === "") {
				data = new UserLoginDataModel();
				await this.SetIsRememberPassword(false);
			}
		}
		else {
			data.EmailAddress = "";
			data.Password = "";
		}
		return data;
	}
	public async SetUserLoginInfo(userLoginDataModel: UserLoginDataModel) {
		this._UserLoginDataModel = userLoginDataModel;
		if (await AsyncStorageHelper.GetRememberPassword()) {
			AsyncStorageHelper.SetUserEmailAddress(userLoginDataModel.EmailAddress);
			AsyncStorageHelper.SetUserPassword(userLoginDataModel.Password);
		}
		else {
			AsyncStorageHelper.SetUserEmailAddress("");
			AsyncStorageHelper.SetUserPassword("");
		}
	}

	public async GetIsRememberPassword(): Promise<boolean> {
		let result = await AsyncStorageHelper.GetRememberPassword();
		return result;
	}

	public async SetIsRememberPassword(isRememberPassword: boolean) {
		await AsyncStorageHelper.SetRememberPassword(isRememberPassword);
	}

	public async GetIsLoggedIn(): Promise<boolean> {
		let result = await AsyncStorageHelper.GetIsLoggedIn();
		return result;
	}

	public async SetIsLoggedIn(isRememberPassword: boolean) {
		await AsyncStorageHelper.SetIsLoggedIn(isRememberPassword);
	}

	public async GetUserID(): Promise<string> {
		let result = await AsyncStorageHelper.GetUserID();
		return result;
	}

	public async SetUserID(userID: string) {
		await AsyncStorageHelper.SetUserID(userID);
	}
}

let AppGlobals = new _AppGlobals();
export default AppGlobals;