import React, { Component } from "react";
import { StyleSheet, View, SafeAreaView, ScrollView, Image } from "react-native";
import { connect } from "react-redux";
import { Navigation } from "react-native-navigation";
import getTheme from '../../../../native-base-theme/components';
import material from '../../../../native-base-theme/variables/material';
import {customerAuthRoute, customerRoute} from '../../../routes/routes'
import validate from "../../../utils/validation";
import {StyleProvider, Toast} from 'native-base'

import Login from "../../../components/CustomerSpaceAuth/Login";
import SignUp from "../../../components/CustomerSpaceAuth/SignUp";

class CustomerSpaceAuth extends Component {
  state = {
    isLoginScreen: true,
    loading: false,
    logins: {
        phoneNumber: {
            label: "Phone Number",
            keyboardType: 'numeric',
            value: "",
            valid: true,
            validationRules: {
                minLength: 6,
            },
            touched: false,
        },
        pinCode: {
            label: "Enter your PIN Code",
            keyboardType: 'numeric',
            value: "",
            valid: true,
            secureTextEntry: true,
            validationRules: {
                minLength: 4,
            },
            touched: false,
        },
    },
    signs: {
      fullName: {
        label: "Full Name",
        value: "",
        valid: true,
        validationRules: {
            minLength: 6,
        },
        touched: false,
      },
      phoneNumber: {
        label: "Phone Number",
        value: "",
        keyboardType: 'numeric',
        valid: true,
        validationRules: {
            minLength: 6,
        },
        touched: false,
      },
      pinCode: {
        label: "Enter a PIN code",
        keyboardType: 'numeric',
        value: "",
        valid: true,
        validationRules: {
          minLength: 4,
        },
        touched: false,
      },
      // pinCode2: {
      //   label: "Confirm PIN code",
      //   keyboardType: 'numeric',
      //   value: "",
      //   valid: true,
      //   validationRules: {
      //     minLength: 4,
      //   },
      //   touched: false,
      // },
    },
  };

  renderLogin = () => {
    this.setState({ isLoginScreen: true });
  };

  renderSignUp = () => {
    this.setState({ isLoginScreen: false });
  };

  // For login
  updateInputState = (key, value) => {
    this.setState((prevState) => {
      return {
        ...this.state,
        logins: {
          ...prevState.logins,
          [key]: {
            ...prevState.logins[key],
            value: value,
            valid: validate(value, prevState.logins[key].validationRules),
            touched: true,
          },
        },
      };
    });
  };

  // for sign up
  updateInputState2 = (key, value) => {
    this.setState((prevState) => {
      return {
        ...this.state,
        signs: {
          ...prevState.signs,
          [key]: {
            ...prevState.signs[key],
            value: value,
            valid: validate(value, prevState.signs[key].validationRules),
            touched: true,
          },
        },
      };
    });
  };

  signUp = () => {
    this.setState({loading: true})
    const {fullName, phoneNumber, pinCode} = this.state.signs
    const user = {
      fullName: fullName.value, 
      phoneNumber: phoneNumber.value, 
      pinCode: pinCode.value}
    fetch("https://kamerfood-52bd2.firebaseio.com/customers.json", {
        method: 'POST',
        'body': JSON.stringify(user)})
    .then(data => {
        // Clear state
        this.setState({loading: false})
        Navigation.push(this.props.componentId, customerRoute)
    }).catch(err => {
        this.setState({loading: false})
        Toast.show({
          text: 'Connection Error',
          buttonText: 'Okay'
        })
    })
  }

  login = () => {
    this.setState({loading: true})
    const {phoneNumber, pinCode} = this.state.logins
    const user = {
      phoneNumber: phoneNumber.value, 
      pinCode: pinCode.value}
    fetch(`https://kamerfood-52bd2.firebaseio.com/customers.json`, {method: 'GET'})
    .then(data => data.json())
    .then(data => {
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          const element = data[key];
          if(element.phoneNumber == user.phoneNumber && element.pinCode == user.pinCode) {
            Navigation.push(this.props.componentId, customerRoute)
          } else {
            // alert('Account Not found')
          }
          this.setState({loading: false})
        }
      }
    }).catch(err => {
        this.setState({loading: false})
        Toast.show({
          text: 'Connection Error',
          buttonText: 'Okay'
        })
    })
  }

  render() {
    let screenData = this.state.isLoginScreen ? (
      <Login
        onLoginSubmitClick={this.login}
        spinner={this.state.loading}
        update={this.updateInputState}
        controls={this.state.logins}
        onSignClick={() => this.renderSignUp()}
      />
    ) : (
      <SignUp
        onSignSubmitClick={this.signUp}
        spinner={this.state.loading}
        update={this.updateInputState2}
        controls={this.state.signs}
        onLoginClick={() => this.renderLogin()}
      />
    );

    return (
        <StyleProvider style={getTheme(material)}>
            <View style={styles.view}>
                <SafeAreaView>
                <ScrollView>
                    {screenData}
                </ScrollView>
                </SafeAreaView>
            </View>
        </StyleProvider>
    );
  }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token
    }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
  },
  logoWrapper: {
    alignItems: 'center',
    marginBottom: 20
  },
  logo: {
    width: 80,
    height: 80,
  },
});

export default connect(mapStateToProps)(CustomerSpaceAuth);
