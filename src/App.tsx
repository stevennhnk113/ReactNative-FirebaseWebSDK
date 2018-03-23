import * as React from 'react';
import { Platform, StyleSheet, View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import LoginView from './Views/LoginView';
import HomeView from './Views/HomeView';
import RegisterView from './Views/RegisterView';
import LoadingView from './Views/LoadingView';

const MainNavigationStack = StackNavigator(
	{
		LoadingView: { screen: LoadingView },
		LoginView: { screen: LoginView },
		RegisterView: { screen: RegisterView },
		HomeView: { screen: HomeView },
	},
	{
		headerMode: 'none'
	}
);

export default class App extends React.Component {
	render() {
		return <MainNavigationStack />;
	}
}
