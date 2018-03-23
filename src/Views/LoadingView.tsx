import * as React from 'React';

import { Platform, StyleSheet, View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { StackNavigator, NavigationScreenProp } from 'react-navigation';

import * as Styles from '../Helpers/StylesHelper';

import { UserController } from '../Controller/DataController/UserController';
import { UserLoginDataModel } from '../Models/DataModel/UserDataModel';
import { ResponseStatusDataModel, ResponseApiModel } from '../Models/DataModel/ResponseApiModel';
import { CheckBox } from 'react-native-elements';

import AppGlobals from '../Models/AppGlobals';
import BaseView from '../Views/BaseView';

export default class LoadingView extends BaseView{
	private UserController: UserController;
	private UserLoginData: UserLoginDataModel;
	private IsRememberPassword: boolean;

	constructor(props: any) {
		super(props, 'LoginView');

		this.state =
			{
				ErrorText: "",
				IsRememberPassword: false,
			};

		this.UserController = AppGlobals.UserController;
		this.UserLoginData = new UserLoginDataModel();
		this.IsRememberPassword = false;
	}

	private async LoginUser() {
		try {
			let loginStatus = await this.UserController.LoginUser(this.UserLoginData);
			switch (loginStatus) {
				case ResponseStatusDataModel.Success:
					console.log("Success");
					return;
				case ResponseStatusDataModel.MissingField:
					this.setState({ ErrorText: "Missing Field" });
					break;
				case ResponseStatusDataModel.ConnectionError:
					this.setState({ ErrorText: "Connection Error" });
					break;
				case ResponseStatusDataModel.AppError:
					this.setState({ ErrorText: "App Error" });
					break;
				case ResponseStatusDataModel.InvalidEmail:
				case ResponseStatusDataModel.WrongPassword:
					this.setState({ ErrorText: "Invalid Email or Wrong Password" });
					break;
				case ResponseStatusDataModel.UserDisabled:
					this.setState({ ErrorText: "User Disabled" });
					break;
				case ResponseStatusDataModel.Unknown:
					this.setState({ ErrorText: "Unknown" });
					break;
			}
		}
		catch
		{
			this.setState({ ErrorText: "Error" });
		}
	}

	render() {
		return (
			<View style={[styles.MainViewStyles]}>
				<View style={styles.OuterSpace}></View>
				<TouchableOpacity style={styles.Login} onPress={() => this.props.navigation.navigate('LoginView')}>
					<Text style={styles.Text}> Login </Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.Register} onPress={() => this.props.navigation.navigate('RegisterView')}>
					<Text style={styles.Text}> Register </Text>
				</TouchableOpacity>
				<View style={styles.OuterSpace}></View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	MainViewStyles: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: Styles.ThemeColor
	},
	OuterSpace: {
		flex: 3,
	},
	Login: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: "rgb(66, 25, 104)"
	},
	Register: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: "rgb(204, 27, 24)"
	},
	Text: {
		fontSize: Styles.H2,
		color: Styles.ThemeTextColor
	}
})