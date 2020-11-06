import React, { Component } from "react";
import { StyleSheet, Dimensions, View, SafeAreaView, ScrollView } from "react-native";
import { connect } from "react-redux";

import validate from "../../utils/validation";
// import { tryAuth } from '../../store/actions/index';

import Login from "../../components/Auth/Login";
import SignUp from "../../components/Auth/SignUp";

let ScreenHeight = Dimensions.get("window").height;

class AuthScreen extends Component {
  state = {
    isLoginScreen: true,
    loading: false,
    controls: {
      email: {
        value: "",
        valid: true,
        validationRules: {
          isEmail: true,
        },
        touched: false,
      },
      password: {
        value: "",
        valid: true,
        validationRules: {
          minLength: 6,
        },
        touched: false,
      },
      username: {
        value: "",
        valid: true,
        validationRules: {
          minLength: 6,
        },
        touched: false,
      },
    },
  };

  renderLogin = () => {
    this.setState({ isLoginScreen: true });
  };

  renderSignUp = () => {
    this.setState({ isLoginScreen: false });
  };

  onModalCloseHandler = () => {
    this.props.closeModal();
  };

  updateInputState = (key, value) => {
    this.setState((prevState) => {
      return {
        controls: {
          ...prevState.controls,
          [key]: {
            ...prevState.controls[key],
            value: value,
            valid: validate(value, prevState.controls[key].validationRules),
            touched: true,
          },
        },
      };
    });
  };

  onAuth = () => {};

  render() {
    let screenData = this.state.isLoginScreen ? (
      <Login
        onLoginSubmitClick={() =>
          onAuth(
            {
              email: this.state.controls.email.value,
              password: this.state.controls.password.value,
            },
            "signin"
          )
        }
        spinner={this.state.loading}
        update={this.updateInputState}
        controls={this.state.controls}
        onSignClick={() => this.renderSignUp()}
      />
    ) : (
      <SignUp
        onSignSubmitClick={() =>
          onAuth(
            {
              email: this.state.controls.email.value,
              username: this.state.controls.username.value,
              password: this.state.controls.password.value,
            },
            "signup"
          )
        }
        spinner={this.state.loading}
        update={this.updateInputState}
        controls={this.state.controls}
        onLoginClick={() => this.renderLogin()}
      />
    );

    if (this.props.token != null) {
      modal = null;
    }

    return (
      <View style={styles.view}>
        <SafeAreaView>
          <ScrollView>
              {screenData}
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}

const mapStateToProps = state => {
    return {
        spinner: state.uiLoading.loading,
        token: state.auth.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // onAuth: (authData, authMode) => dispatch(tryAuth(authData, authMode)),
    };
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#1565c0'
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen);
