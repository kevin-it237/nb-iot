import React from 'react'
import { Navigation } from "react-native-navigation";
import { Provider } from 'react-redux';

import configureStore from './src/store/configureStore';

const store = configureStore();

import AuthScreen from './src/screens/AuthScreen/AuthScreen';
import SplashScreen from './src/screens/SplashScreen/SplashScreen';
import Main from './src/screens/Main/Main'


/////// Register all Screens ///////

// Splash Screen
Navigation.registerComponent('nbiot.splash', () => SplashScreen);

// Login Screen
Navigation.registerComponent('nbiot.login', () => (props) => (
    <Provider store={store}>
        <AuthScreen {...props} />
    </Provider>
), () => AuthScreen);

// Login Screen
Navigation.registerComponent('nbiot.home', () => (props) => (
    <Provider store={store}>
        <Main {...props} />
    </Provider>
), () => Main);

/////// End Register all Screens ///////

const splashRoot = {
  root: {
    component: {
      name: 'nbiot.splash'
    }
  }
};

Navigation.events().registerAppLaunchedListener(async () => {
    Navigation.setRoot(splashRoot);
});

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: 'black'
  },
  topBar: {
    title: {
      color: 'white'
    },
    backButton: {
      color: 'white'
    },
    background: {
      color: '#1565c0'
    }
  }
});