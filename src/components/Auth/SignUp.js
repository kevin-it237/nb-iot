import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView, Dimensions } from 'react-native';
import { Text } from 'native-base';

import LoginButton from '../../components/Button/Button';
import Loader from '../../components/Loader/Loader';
import UserInput from '../Input/Input';

import { whiteColor } from '../../utils/colors';
import usernameImg from '../../assets/images/username.png';
import passwordImg from '../../assets/images/password.png';
import eyeImg from '../../assets/images/eye_black.png';

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showPass: true,
            press: false,
        };
    }

    showPass = () => {
        this.state.press === false
            ? this.setState({ showPass: false, press: true })
            : this.setState({ showPass: true, press: false });
    }

    render() {
        let submitBtn = (
            <LoginButton 
                onClick={this.props.onSignSubmitClick}
                disabled={!this.props.controls.email.valid || !this.props.controls.password.valid || !this.props.controls.username.valid}
                btnStyle={styles.loginbtn} 
                title="S'inscrire" />
        )
        if (this.props.spinner) {
            submitBtn = <Loader />
        }
        return (
            <View style={styles.wrapper}>
                <KeyboardAvoidingView behavior="padding" >
                    <UserInput
                        source={usernameImg}
                        placeholder="Adresse Email"
                        autoCapitalize={'none'}
                        returnKeyType={'done'}
                        autoCorrect={true}
                        touched={this.props.controls.email.touched}
                        valid={this.props.controls.email.valid}
                        value={this.props.controls.email.value}
                        onChangeText={(val) => this.props.update("email",val)}
                    />
                    <UserInput
                        source={usernameImg}
                        placeholder="Nom d'utilisateur"
                        autoCapitalize={'none'}
                        returnKeyType={'done'}
                        autoCorrect={true}
                        touched={this.props.controls.username.touched}
                        valid={this.props.controls.username.valid}
                        onChangeText={(val) => this.props.update("username",val)}
                    />
                    <UserInput
                        source={passwordImg}
                        secureTextEntry={this.state.showPass}
                        placeholder="Mot de passe"
                        returnKeyType={'done'}
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        touched={this.props.controls.password.touched}
                        valid={this.props.controls.password.valid}
                        value={this.props.controls.password.value}
                        onChangeText={(val) => this.props.update("password",val)}
                    />
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.btnEye}
                        onPress={this.showPass}>
                        <Image source={eyeImg} style={styles.iconEye} />
                    </TouchableOpacity>
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
    btnEye: {
        position: 'absolute',
        top: 175,
        right: 28,
    },
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
    loginbtn: {
        width: DEVICE_WIDTH - 40,
        marginTop: 30,
        borderRadius: 20
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
        color: whiteColor,
        fontFamily: 'Raleway'
    }
});

export default SignUp;