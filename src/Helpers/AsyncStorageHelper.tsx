import { AsyncStorage } from 'react-native';

export default class AsyncStorageHelper {
	// Email Address
	public static async SetUserEmailAddress(emailAddress: string) {
		try {
			let setData = (emailAddress == null) ? "" : emailAddress;
			await AsyncStorage.setItem('EmailAddress', setData);
			return true;
		}
		catch (error) {
			return false;
		}
	}

	public static async GetUserEmailAddress() {
		try {
			var value = await AsyncStorage.getItem('EmailAddress');
			return (value == null) ? "" : value;
		} catch (error) {
			return "";
		}
	}

	// Password
	public static async SetUserPassword(userPassword: string) {
		try {
			let setData = (userPassword == null) ? "" : userPassword;
			await AsyncStorage.setItem('UserPassword', setData);
			return true;
		} catch (error) {
			return false;
		}
	}
	public static async GetUserPassword() {
		try {
			var value = await AsyncStorage.getItem('UserPassword');
			return (value == null) ? "" : value;
		} catch (error) {
			return "";
		}
	}

	// UserID
	public static async SetUserID(userID: string) {
		try {
			await AsyncStorage.setItem('UserID', userID);
			return true;
		} catch (error) {
			return false;
		}
	}

	public static async GetUserID() {
		try {
			var value = await AsyncStorage.getItem('UserID');
			return value;
		} catch (error) {
			return "";
		}
	}

	// Remember password
	public static async SetRememberPassword(isRememberPassword: boolean) {
		try {
			await AsyncStorage.setItem('IsRememberPassword', String(isRememberPassword));
			return true;
		} catch (error) {
			console.log("catched set remember");
			return false;
		}
	}
	public static async GetRememberPassword() {
		try {
			var value = await AsyncStorage.getItem('IsRememberPassword');
			return (value === "true") ? true : false;
		} catch (error) {
			return false;
		}
	}

	public static async SetIsLoggedIn(isLoggedIn: boolean) {
		try {
			await AsyncStorage.setItem('IsLoggedIn', String(isLoggedIn));
			return true;
		} catch (error) {
			return false;
		}
	}
	public static async GetIsLoggedIn() {
		try {
			var value = await AsyncStorage.getItem('IsLoggedIn');
			return (value === "true") ? true : false;
		} catch (error) {
			return false;
		}
	}
}