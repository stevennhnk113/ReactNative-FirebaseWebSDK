import { StyleSheet, Platform, Dimensions } from 'react-native';

let StatusBarHeight;
switch (Platform.OS) {
	case 'ios':
		StatusBarHeight = 20;
		break;
	case 'android':
		StatusBarHeight = 24;
		break;
	default:
		StatusBarHeight = 0;
}

export const ThemeColor = "rgb(66, 134, 244)";
export const ThemeTextColor = "rgb(239, 245, 255)";

// Font
export const H1 = 50;
export const H2 = 40;
export const H3 = 25;
export const H4 = 23;
export const H5 = 20;
export const H6 = 18;
export const H7 = 15;

export const GlobalStylesSheet = StyleSheet.create({

});