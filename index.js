import React from 'react'
import { Navigation } from "react-native-navigation";
import { Provider } from 'react-redux';

import configureStore from './src/store/configureStore';

const store = configureStore();

import AuthScreen from './src/screens/AuthScreen/AuthScreen';


/////// Register all Screens ///////

// Login Screen
Navigation.registerComponent('nbiot.login', () => (props) => (
    <Provider store={store}>
        <AuthScreen {...props} />
    </Provider>
), () => AuthScreen);

/////// End Register all Screens ///////

Navigation.events().registerAppLaunchedListener(() => {
   Navigation.setRoot({
     root: {
       stack: {
        options:{ topBar: { visible: false, height: 0, } },
         children: [
           {
             component: {
               name: 'nbiot.login'
             }
           }
         ]
       }
     }
  });
});
