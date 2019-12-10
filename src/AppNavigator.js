import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Login from '../pages/Login';
import Home from '../pages/Home';

const AppNavigator = createStackNavigator(
  {
    Login: {screen: Login},
    Home: {screen: Home},
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
  },
);

const App = createAppContainer(AppNavigator);

export default App;
