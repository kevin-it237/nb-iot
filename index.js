import React from 'react'
import { Navigation } from "react-native-navigation";
import { Provider } from 'react-redux';

import configureStore from './src/store/configureStore';

const store = configureStore();

import AuthScreen from './src/screens/AuthScreen/AuthScreen';
import SplashScreen from './src/screens/SplashScreen/SplashScreen';
import Main from './src/screens/Main/Main'
import AccountScreen from './src/screens/AccountScreen/AccountScreen'
import CoverageScreen from './src/screens/CoverageScreen/CoverageScreen'
import LinkBudget from './src/screens/CoverageScreen/LinkBudget/LinkBudget'
import PropModel from './src/screens/CoverageScreen/PropagationModel/PropagationModel'

import CapacityPlanningScreen from './src/screens/CapacityPlanningScreen/CapacityPlanningScreen'
import DensityProcedureScreen from './src/screens/CapacityPlanningScreen/DensityProcedure/DensityProcedure'
import ServiceProcedureScreen from './src/screens/CapacityPlanningScreen/ServiceProcedure/ServiceProcedure'
import PlanningResultScreen from './src/screens/CapacityPlanningScreen/PlanningResult/PlanningResult'

import CustomerSpace from './src/screens/CustomerSpaceScreen/CustomerSpaceScreen'
import ServiceDetailsScreen from './src/screens/CustomerSpaceScreen/ServiceDetailsScreen/ServiceDetailsScreen'

/////// Register all Screens ///////

// Splash Screen
Navigation.registerComponent('nbiot.splash', () => SplashScreen);

// Profile Screen
Navigation.registerComponent('nbiot.profile', () => (props) => (
  <Provider store={store}>
      <AccountScreen {...props} />
  </Provider>
), () => AccountScreen);

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

// Coverage calculation Screen
Navigation.registerComponent('nbiot.coverage', () => (props) => (
  <Provider store={store}>
      <CoverageScreen {...props} />
  </Provider>
), () => CoverageScreen);

// LinkBudget calculation Screen
Navigation.registerComponent('nbiot.linkbudget', () => (props) => (
  <Provider store={store}>
      <LinkBudget {...props} />
  </Provider>
), () => LinkBudget);

// Propagation Model, Cell type and planing result Screen
Navigation.registerComponent('nbiot.propagationmodel', () => (props) => (
  <Provider store={store}>
      <PropModel {...props} />
  </Provider>
), () => PropModel);

// Capacity  planing result Screen
Navigation.registerComponent('nbiot.capacityplanning', () => (props) => (
  <Provider store={store}>
      <CapacityPlanningScreen {...props} />
  </Provider>
), () => CapacityPlanningScreen);

// Density procedure  planing result Screen
Navigation.registerComponent('nbiot.densityplanning', () => (props) => (
  <Provider store={store}>
      <DensityProcedureScreen {...props} />
  </Provider>
), () => DensityProcedureScreen);

// Density procedure  planing result Screen
Navigation.registerComponent('nbiot.serviceplanning', () => (props) => (
  <Provider store={store}>
      <ServiceProcedureScreen {...props} />
  </Provider>
), () => ServiceProcedureScreen);

//  planing result Screen
Navigation.registerComponent('nbiot.planningresults', () => (props) => (
  <Provider store={store}>
      <PlanningResultScreen {...props} />
  </Provider>
), () => PlanningResultScreen);

//  customer space screen
Navigation.registerComponent('nbiot.customerspace', () => (props) => (
  <Provider store={store}>
      <CustomerSpace {...props} />
  </Provider>
), () => CustomerSpace);

//  customer space service details
Navigation.registerComponent('nbiot.servicedetails', () => (props) => (
  <Provider store={store}>
      <ServiceDetailsScreen {...props} />
  </Provider>
), () => ServiceDetailsScreen);

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
    backgroundColor: '#0f63bc'
  },
  topBar: {
    backgroundColor: '#1565c0',
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