import * as React from 'react';
import { Platform, StyleSheet, View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import LoginView from './Views/LoginView';
import HomeView from './Views/HomeView';

const MainNavigationStack = StackNavigator({
	LoginView: { screen: LoginView },
	HomeView: { screen: HomeView }
},
	{
		headerMode: 'none'
	});

export default class App extends React.Component {
	render() {
		return <MainNavigationStack />;
	}
}
