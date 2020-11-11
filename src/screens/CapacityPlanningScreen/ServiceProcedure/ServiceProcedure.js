import React, {useState} from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import Input from '../../../components/Input/Input'
import getTheme from '../../../../native-base-theme/components';
import material from '../../../../native-base-theme/variables/material';
import validate from "../../../utils/validation";
import {mainRoot, planningResultsRoute} from '../../../routes/routes'
import { Navigation } from "react-native-navigation";
import {serviceForm} from './serviceProcedureForm'
import { Container, Content,  Button, StyleProvider, Text, Card, CardItem, Body } from "native-base";

const DEVICE_WIDTH = Dimensions.get('window').width;

const ServiceProcedure = (props) => {

    const [form, setForm] = useState(serviceForm)
    const [finalNumber, setFinalNumber] = useState(89556)

    updateInputState = (key, value, option) => {
        setForm({
            ...form,
            [key]: {
                ...form[key],
                value: {...form[key].value, [option]: value },
                valid: validate(value, form[key].validationRules),
                touched: true,
            },
        })
    };

    const planingResult = () => {
        Navigation.push(props.componentId, planningResultsRoute({a: ""}))
    }

    const formInputs = []
    const formInputs2 = []
    const formInputs3 = []

    for (const key in form) {
        if (form.hasOwnProperty(key)) {
            const element = form[key];
            const input = (
                <View key={key} style={styles.line}>
                    <View style={styles.lineItemText}><Text>{element.label}</Text></View>
                    <View style={styles.lineItem}>
                        <Input
                            keyboardType='numeric'
                            selectionColor='white'
                            customStyle={styles.inputStyle}
                            placeholder={""}
                            autoCorrect={false}
                            touched={element.touched}
                            valid={element.valid}
                            value={element.value.dl}
                            onChangeText={(val) => updateInputState(key, val, 'ptf')} />
                    </View>
                    <View style={styles.lineItem}>
                        <Input
                            keyboardType='numeric'
                            selectionColor='white'
                            customStyle={styles.inputStyle}
                            placeholder={""}
                            autoCorrect={false}
                            touched={element.touched}
                            valid={element.valid}
                            value={element.value.ul}
                            onChangeText={(val) => updateInputState(key, val, 'end')} />
                    </View>
                </View>
            )
            formInputs.push(input)
        }
    }

    for (const key in form) {
        if (form.hasOwnProperty(key)) {
            const element = form[key];
            const input = (
                <View key={key} style={styles.line}>
                    <View style={styles.lineItemText}><Text>{element.label}</Text></View>
                    <View style={styles.lineItem}>
                        <Input
                            keyboardType='numeric'
                            selectionColor='white'
                            customStyle={styles.inputStyle}
                            placeholder={""}
                            autoCorrect={false}
                            touched={element.touched}
                            valid={element.valid}
                            value={element.value.dl}
                            onChangeText={(val) => updateInputState(key, val, 'npd')} />
                    </View>
                    <View style={styles.lineItem}>
                        <Input
                            keyboardType='numeric'
                            selectionColor='white'
                            customStyle={styles.inputStyle}
                            placeholder={""}
                            autoCorrect={false}
                            touched={element.touched}
                            valid={element.valid}
                            value={element.value.ul}
                            onChangeText={(val) => updateInputState(key, val, 'bm')} />
                    </View>
                </View>
            )
            formInputs2.push(input)
        }
    }

    for (const key in form) {
        if (form.hasOwnProperty(key)) {
            const element = form[key];
            const input = (
                <View key={key} style={styles.line}>
                    <View style={styles.lineItemText}><Text>{element.label}</Text></View>
                    <View style={styles.lineItem}>
                        <Input
                            keyboardType='numeric'
                            selectionColor='white'
                            customStyle={styles.inputStyle}
                            placeholder={""}
                            autoCorrect={false}
                            touched={element.touched}
                            valid={element.valid}
                            value={element.value.dl}
                            onChangeText={(val) => updateInputState(key, val, 'sm')} />
                    </View>
                    <View style={styles.lineItem}>
                        <Input
                            keyboardType='numeric'
                            selectionColor='white'
                            customStyle={styles.inputStyle}
                            placeholder={""}
                            autoCorrect={false}
                            touched={element.touched}
                            valid={element.valid}
                            value={element.value.ul}
                            onChangeText={(val) => updateInputState(key, val, 'np')} />
                    </View>
                </View>
            )
            formInputs3.push(input)
        }
    }

    return (
        <StyleProvider style={getTheme(material)}>
            <Container>
                <Content style={styles.mainContainer} padder>
                    <View>
                        <Text style={styles.title}>Traffic Model</Text>
                    </View>

                     {/* Form start here */}
                    <View style={styles.line}>
                        <View style={styles.lineItemText}><Text style={styles.boldText}>Service NB-IOT</Text></View>
                        <View style={styles.lineItem}><Text style={styles.boldText}>Transmiss° Freq at BH</Text></View>
                        <View style={styles.lineItem}><Text style={styles.boldText}>End Device Number</Text></View>
                    </View>
                    {formInputs}

                    <View style={styles.line}>
                        <View style={styles.lineItemText}><Text style={styles.boldText}>Service NB-IOT</Text></View>
                        <View style={styles.lineItem}><Text style={styles.boldText}>Nb Packets/ day/device</Text></View>
                        <View style={styles.lineItem}><Text style={styles.boldText}>Brustiness Margin</Text></View>
                    </View>
                    {formInputs2}

                    <View style={styles.line}>
                        <View style={styles.lineItemText}><Text style={styles.boldText}>Service NB-IOT</Text></View>
                        <View style={styles.lineItem}><Text style={styles.boldText}>Security Margin</Text></View>
                        <View style={styles.lineItem}><Text style={styles.boldText}>Number of Packets</Text></View>
                    </View>
                    {formInputs3}

                    <Card style={{marginTop: 20}}>
                        <CardItem>
                            <Body>
                                <Text>TOTAL NUMBER OF PACKETS PER DAY</Text>
                                <Text style={{fontWeight: 'bold', marginTop: 15, fontSize: 20}}>{finalNumber}</Text>
                            </Body>
                        </CardItem>
                    </Card>

                    <View style={styles.buttonsWrapper}>
                        <Button style={styles.button} primary>
                            <Text>Calculate</Text>
                        </Button>
                        <Button style={styles.button} primary onPress={planingResult}>
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
    },
    line: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginTop: 20,
        alignItems: 'center',
    },
    lineItemText: {
        width: (DEVICE_WIDTH / 3),
        marginRight: 5
    },
    lineItem: {
        width: (DEVICE_WIDTH / 4)
    },
    boldText: {
        fontWeight: "bold"
    }
});

export default ServiceProcedure
