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

export default class RegisterView extends BaseView{
	private UserLoginData: UserLoginDataModel;

	constructor(props: any) {
		super(props, 'LoginView');

		this.state =
			{
				ErrorText: "",
				IsRememberPassword: false,
			};

		this.UserLoginData = new UserLoginDataModel();
	}

	private async OnEndEditingPassword(text: string)
	{
		console.log("password");
		this.UserLoginData.Password = text;
	}

	private async OnEndEditingEmail(text: string)
	{
		console.log("email");
		this.UserLoginData.EmailAddress = text;
	}

	render() {
		return (
			<View style={[styles.MainViewStyles]}>
				<View style={styles.OuterSpace}></View>
				<View style={styles.Login}>
					<TextInput 
						style={styles.Text}
						onEndEditing={(e) => {this.OnEndEditingEmail(e.nativeEvent.text);}}
						placeholder='Email'
						underlineColorAndroid='transparent'
						placeholderTextColor='black'/>
					<TextInput
						style={styles.Text}
						onEndEditing={(e) => {this.OnEndEditingPassword(e.nativeEvent.text);}}
						placeholder='Password'
						underlineColorAndroid='transparent'
						placeholderTextColor='black'/>
				</View>

				<TouchableOpacity style={styles.Register} onPress={() => AppGlobals.UserController.RegisterUser(this.UserLoginData)}>
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
		backgroundColor: "rgb(188, 209, 242)"
	},
	Register: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: "rgb(204, 27, 24)"
	},
	Text: {
		fontSize: Styles.H4,
		color: 'black',
	}
})