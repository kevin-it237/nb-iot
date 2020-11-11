import React, {useState} from 'react'
import { StyleSheet, View } from 'react-native'
import Input from '../../../components/Input/Input'
import getTheme from '../../../../native-base-theme/components';
import material from '../../../../native-base-theme/variables/material';
import validate from "../../../utils/validation";
import {mainRoot} from '../../../routes/routes'
import { Navigation } from "react-native-navigation";
import {densityForm} from './densityProcedureForm'
import { Container, Content,  Button, StyleProvider, Text, Card, CardItem, Body } from "native-base";

const DensityProcedure = (props) => {

    const [form, setForm] = useState(densityForm)
    const [finalDevicesInCellSite, setFinalDevicesInCellSite] = useState(86)
    const [finalDevicesInCell, setFinalDevicesInCell] = useState(8556)
    const [finalNumberOfSite, setFinalNumberOfSite] = useState(564)

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

    const backToHome = () => {
        Navigation.setRoot(mainRoot)
    }

    const formInputs = []

    for (const key in form) {
        if (form.hasOwnProperty(key)) {
            const element = form[key];
            const input = (
                <View key={key} style={styles.inputWrapper}>
                    <Text style={styles.label}>{element.label}</Text>
                    <Input
                        customStyle={styles.inputStyle}
                        keyboardType={element.keyboardType}
                        placeholder={""}
                        autoCorrect={false}
                        selectionColor='white'
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
                    {formInputs}
                    <View style={styles.buttonsWrapper}>
                        <Button style={styles.button} primary>
                            <Text>Calculate</Text>
                        </Button>
                        <Button style={styles.button} primary onPress={backToHome}>
                            <Text>CANCEL</Text>
                        </Button>
                    </View>

                    {/* Rsults */}
                    <Card style={{marginBottom: 10}}>
                        <CardItem>
                            <Body>
                                <Text>Number of device within a Cell Site Sector</Text>
                                <Text style={{fontWeight: 'bold', marginTop: 15, fontSize: 20}}>{finalDevicesInCellSite}</Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card style={{marginBottom: 10}}>
                        <CardItem>
                            <Body>
                                <Text>Number of Device in a cell</Text>
                                <Text style={{fontWeight: 'bold', marginTop: 15, fontSize: 20}}>{finalDevicesInCell}</Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card style={{marginBottom: 25}}>
                        <CardItem>
                            <Body>
                                <Text>NUMBER OF SITES (eNodeB)</Text>
                                <Text style={{fontWeight: 'bold', marginTop: 15, fontSize: 20}}>{finalNumberOfSite}</Text>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        </StyleProvider>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        padding: 10
    },
    inputStyle: {
        borderColor: 'black',
        borderRadius: 10,
        paddingLeft: 20,
        backgroundColor: '#1565c0',
        marginTop: 5
    },
    button: {
        marginTop: 25,
        marginBottom: 25
    },
    label: {

    },
    inputWrapper: {
        marginTop: 20
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 0
    },
    buttonsWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
});

export default DensityProcedure
