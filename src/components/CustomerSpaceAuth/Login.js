import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Dimensions } from 'react-native';
import { Text } from 'native-base';

import LoginButton from '../Button/Button';

import { whiteColor } from '../../utils/colors';
import UserInput from '../Input/Input';
import Loader from '../Loader/Loader';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            press: false,
        };
    }

    submit = () => {
        const {phoneNumber, pinCode} = this.props.controls
        const isValid = phoneNumber.value.length&&pinCode.value.length
        if(isValid) {
            this.props.onLoginSubmitClick()
        } else {
            alert('All fields are required')
        }
    }

    render() {
        let submitBtn = (
            <LoginButton 
                onClick={this.submit}
                btnStyle={styles.loginbtn} 
                title="Se connecter" />
        )
        if (this.props.spinner) {
            submitBtn = <Loader color={"#1565c0"} />
        }

        let data = []
        const inputs = this.props.controls
        for (const key in inputs) {
            if (inputs.hasOwnProperty(key)) {
                const element = inputs[key];
                data.push(
                    <UserInput
                        key={key}
                        customStyle={styles.inputStyle}
                        placeholder={element.label}
                        keyboardType={element.keyboardType}
                        secureTextEntry={element.secureTextEntry}
                        autoCapitalize={'none'}
                        returnKeyType={'done'}
                        autoCorrect={false}
                        touched={element.touched}
                        valid={element.valid}
                        value={element.value}
                        onChangeText={(val) => this.props.update(key, val)}
                    />
                )
            }
        }
        
        return (
            <View style={styles.wrapper}>
                <KeyboardAvoidingView behavior="padding" >
                    {data}
                    <View style={styles.loginbtnWrapper}>
                        {submitBtn}
                    </View>
                </KeyboardAvoidingView>
                <View style={styles.signup}>
                    <Text style={styles.signupText}>Pas encore inscrit ?</Text>
                    <TouchableOpacity style={{ marginRight: 5 }} onPress={this.props.onSignClick}>
                        <Text style={[styles.signupText, {textDecorationLine: "underline"}]}>Inscrivez vous ici</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
    iconEye: {
        width: 25,
        height: 25,
        tintColor: 'rgba(0,0,0,0.2)',
    },
    bgImage: {
        width: "100%",
        height: "100%"
    },
    inputStyle: {
        borderColor: 'black',
        borderRadius: 10,
        paddingLeft: 20,
        backgroundColor: '#1565c0',
        fontSize: 17,
    },
    wrapper: {
        width: DEVICE_WIDTH - 40,
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    loginbtn: {
        width: DEVICE_WIDTH - 40,
        marginTop: 30,
        borderRadius: 20,
        marginBottom: 10
    },
    loginbtnWrapper: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: whiteColor,
        fontFamily: 'Raleway'
    },
    signup: {
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
        alignItems: 'center',
    },
    signupText: {
        color: "#1565c0",
        fontFamily: 'Raleway'
    }
});


export default Login;