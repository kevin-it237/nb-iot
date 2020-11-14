import React, {useState} from 'react'
import { StyleSheet, View } from 'react-native'
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import {linkbudgetRoute} from '../../routes/routes'
import { Navigation } from "react-native-navigation";
import Input from '../../components/Input/Input'
import validate from "../../utils/validation";
import {inputs} from './form'
import { Container, Content,  Button, StyleProvider, Text } from "native-base";

const AccountScreen = (props) => {

    const [form, setForm] = useState(inputs)

    updateInputState = (key, value) => {
        setForm({
            ...form,
            [key]: {
                ...form[key],
                value: value,
                valid: validate(value, form[key].validationRules),
                touched: true,
            },
        })
    };

    const formInputs = []

    const goToLinkBudget = () => {
        // save data to localstorage
        if(form['targetArea'].value.length) {
            Navigation.push(props.componentId, linkbudgetRoute({targetParams: form}));
        } else {
            alert('Target Area is required')
        }
    }
   
    for (const key in form) {
        if (form.hasOwnProperty(key)) {
            const element = form[key];
            const input = (
                <View key={key} style={styles.inputWrapper}>
                    <Text style={styles.label}>{element.label}</Text>
                    <Input
                        keyboardType={element.keyboardType}
                        customStyle={styles.inputStyle}
                        selectionColor='white'
                        placeholder={""}
                        autoCorrect={false}
                        touched={element.touched}
                        valid={element.valid}
                        value={element.value}
                        onChangeText={(val) => updateInputState(key, val)} />
                </View>
            )
            formInputs.push(input)
        }
    }

    return (
        <StyleProvider style={getTheme(material)}>
            <Container>
                <Content style={styles.mainContainer} padder>
                    <View style={styles.titleWrap}>
                        <Text style={styles.title}>Systems And Target Parameters</Text>
                    </View>
                    {formInputs}
                    <View style={styles.buttonWrapper}>
                        <Button style={styles.button} onPress={goToLinkBudget} primary>
                            <Text>Next</Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        </StyleProvider>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        padding: 10
    },
    buttonWrapper: {
        flexDirection: 'row',
        justifyContent: "center"
    },
    titleWrap: {
        borderStyle: 'solid', 
        marginBottom: 15,
        borderWidth: 2, 
        paddingVertical: 10, 
        paddingHorizontal: 10, borderRadius: 5},
    inputStyle: {
        borderColor: 'black',
        borderRadius: 10,
        paddingLeft: 20,
        backgroundColor: '#1565c0',
        marginTop: 5,
        fontSize: 17
    },
    button: {
        marginTop: 5,
        marginBottom: 25
    },
    label: {

    },
    inputWrapper: {
        marginBottom: 20
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

export default AccountScreen
