import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView, Dimensions } from 'react-native';
import { Text } from 'native-base';

import LoginButton from '../../components/Button/Button';
import Loader from '../../components/Loader/Loader';
import UserInput from '../Input/Input';

import { whiteColor } from '../../utils/colors';

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            press: false,
        };
    }

    submit = () => {
        const {fullName, phoneNumber, pinCode} = this.props.controls
        const isValid = fullName.value.length&&phoneNumber.value.length&&pinCode.value.length
        if(isValid) {
            this.props.onSignSubmitClick()
        } else {
            alert('All fields are required')
        }
    }

    render() {
        let submitBtn = (
            <LoginButton 
                onClick={this.submit}
                btnStyle={styles.loginbtn} 
                title="S'inscrire" />
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
                    <Text style={styles.signupText}>Déja inscrit ?</Text>
                    <TouchableOpacity style={{ marginRight: 5 }} onPress={this.props.onLoginClick}>
                        <Text style={[styles.signupText, {textDecorationLine: "underline"}]}>Connectez vous ici</Text>
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
    wrapper: {
        width: DEVICE_WIDTH - 40,
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    inputStyle: {
        borderColor: 'black',
        borderRadius: 10,
        paddingLeft: 20,
        backgroundColor: '#1565c0',
        fontSize: 17,
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
        fontFamily: 'Raleway',
        fontSize: 14
    },
    signup: {
        marginTop: 10,
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

export default SignUp;