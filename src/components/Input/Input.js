import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, TextInput, Image, Dimensions } from 'react-native';

export default class UserInput extends Component {
    render() {
        return (
            <View style={styles.inputWrapper}>
                <Image source={this.props.source} style={styles.inlineImg} />
                <TextInput
                    style={[styles.input, !this.props.valid && this.props.touched?styles.invalid:null]}
                    placeholder={this.props.placeholder}
                    secureTextEntry={this.props.secureTextEntry}
                    autoCorrect={this.props.autoCorrect}
                    autoCapitalize={this.props.autoCapitalize}
                    returnKeyType={this.props.returnKeyType}
                    placeholderTextColor="white"
                    underlineColorAndroid="transparent"
                    {...this.props}
                />
            </View>
        );
    }
}

UserInput.propTypes = {
    source: PropTypes.number.isRequired,
    placeholder: PropTypes.string.isRequired,
    secureTextEntry: PropTypes.bool,
    autoCorrect: PropTypes.bool,
    autoCapitalize: PropTypes.string,
    returnKeyType: PropTypes.string,
};

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        height: 50,
        width: '100%',
        paddingLeft: 45,
        borderRadius: 20,
        color: '#ffffff',
        marginTop: 20
    },
    inputWrapper: {
        flex: 1,
        justifyContent: 'center'
    },
    inlineImg: {
        position: 'absolute',
        zIndex: 99,
        width: 22,
        height: 22,
        left: 15,
        top: 34,
    },
    invalid: {
        backgroundColor: 'rgba(236, 38, 39, 0.2)'
    },
});
