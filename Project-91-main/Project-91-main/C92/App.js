import 'react-native-gesture-handler';
import  React , {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import BottomTabNavigator from './components/bottomtab';

const Stack = createStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName='Home'
				screenOptions={{
					headerShown: false,
				}}>
				<Stack.Screen name='Home' component={Home} />
				<Stack.Screen name='BottomTab' component={BottomTabNavigator} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;