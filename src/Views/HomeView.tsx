import * as React from 'React';

import AppGlobals from '../Models/AppGlobals';
import BaseView from '../Views/BaseView';

import * as Styles from '../Helpers/StylesHelper';

import { UserController } from '../Controller/DataController/UserController';

import { UserLoginDataModel } from '../Models/DataModel/UserDataModel';
import { ResponseStatusDataModel, ResponseApiModel } from '../Models/DataModel/ResponseApiModel';

import { Platform, StyleSheet, View, Text } from 'react-native';

import { Icon } from 'react-native-elements';

const IconColor = 'black';
const CameraOpenButtonSize = 75;

export default class HomeView extends BaseView {
	static navigationOptions = {};

	private UserLoginData: UserLoginDataModel;
	private UserController: UserController;

	constructor(props: any) {
		super(props, 'home');
	}

	private async LogoffUser() {
		this.setState({ IsLoggedIn: false });
		AppGlobals.SetIsLoggedIn(false);
	}

	render() {
		return (
			<View style={styles.container}>
				<Text> Write your code here </Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
});