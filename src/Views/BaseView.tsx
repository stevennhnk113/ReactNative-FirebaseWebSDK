import * as React from 'React';
import { Platform, StyleSheet } from 'react-native';
import { StackNavigator, NavigationScreenProp, NavigationActions } from 'react-navigation';

import { Icon } from 'react-native-elements';

export default class BaseView extends React.Component<any, any>{
	constructor(props: any, name: string) {
		super(props);
		this.Setup();
	}

	public async Setup() { }

	public async NavigateBack() {
		const backAction = NavigationActions.back();
		this.props.navigation.dispatch(backAction);
	}
}