import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: 'https://f9c1dd0378b8fc95251a9c14a3ec7ea7@o4508247324819456.ingest.us.sentry.io/4508247326588928',

  // uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // enableSpotlight: __DEV__,
});

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Detail" component={DetailScreen as any} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const AppWrapperSentry = Sentry.wrap(App);

export default AppWrapperSentry;
