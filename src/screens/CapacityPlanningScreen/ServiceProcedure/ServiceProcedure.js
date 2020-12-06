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

import {servicePlanning} from '../../../utils/calculator'

const DEVICE_WIDTH = Dimensions.get('window').width;

const ServiceProcedure = (props) => {

    const [form, setForm] = useState(serviceForm)
    const [finalNumber, setFinalNumber] = useState("")
    const [results, setResults] = useState(null)

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
        if(results) {
            Navigation.push(props.componentId, planningResultsRoute({results}))
        } else {
            alert('Calculate before moving to the next step')
        }
    }

    const storeData = async (value) => {
        try {
          await AsyncStorage.setItem('nb2', value)
        } catch (e) {
          // saving error
        }
    }

    const calculate = () => {
        const res = servicePlanning(form)
        const {totalPackets, NenodeB, data} = res
        const newForm = {}
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                const element = data[key];
                newForm[key] = {...form[key], value: {...form[key].value, np: element.np.toString()}}
            }
        }
        setForm(newForm)
        setFinalNumber(totalPackets)
        setResults(res)
        storeData(res.NenodeB)
    }

    const formInputs = []

    for (const key in form) {
        if (form.hasOwnProperty(key)) {
            const element = form[key];
            const input = (
                <View key={key} style={styles.line}>
                    <View style={styles.lineItemText}><Text style={styles.label}>{element.label}</Text></View>
                    <View style={styles.lineWrap}>
                        <View style={styles.lineItem}>
                            <Text style={styles.smallLabel}>Transmiss° Freq at BH</Text>
                            <Input
                                keyboardType='numeric'
                                selectionColor='white'
                                customStyle={styles.inputStyle}
                                placeholder={""}
                                autoCorrect={false}
                                touched={element.touched}
                                valid={element.valid}
                                value={element.value.ptf}
                                onChangeText={(val) => updateInputState(key, val, 'ptf')} />
                        </View>
                        <View style={styles.lineItem}>
                            <Text style={styles.smallLabel}>End Device Number</Text>
                            <Input
                                keyboardType='numeric'
                                selectionColor='white'
                                customStyle={styles.inputStyle}
                                placeholder={""}
                                autoCorrect={false}
                                touched={element.touched}
                                valid={element.valid}
                                value={element.value.end}
                                onChangeText={(val) => updateInputState(key, val, 'end')} />
                        </View>
                        <View style={styles.lineItem}>
                            <Text style={styles.smallLabel}>Nb Pkts/day/device</Text>
                            <Input
                                keyboardType='numeric'
                                selectionColor='white'
                                customStyle={styles.inputStyle}
                                placeholder={""}
                                autoCorrect={false}
                                touched={element.touched}
                                valid={element.valid}
                                value={element.value.npd}
                                onChangeText={(val) => updateInputState(key, val, 'npd')} />
                        </View>
                    </View>
                    <View style={styles.lineWrap}>
                        <View style={styles.lineItem}>
                            <Text style={styles.smallLabel}>Brustiness Margin</Text>
                            <Input
                                keyboardType='numeric'
                                selectionColor='white'
                                customStyle={styles.inputStyle}
                                placeholder={""}
                                autoCorrect={false}
                                touched={element.touched}
                                valid={element.valid}
                                value={element.value.bm}
                                onChangeText={(val) => updateInputState(key, val, 'bm')} />
                        </View>
                        <View style={styles.lineItem}>
                            <Text style={styles.smallLabel}>Security Margin</Text>
                            <Input
                                keyboardType='numeric'
                                selectionColor='white'
                                customStyle={styles.inputStyle}
                                placeholder={""}
                                autoCorrect={false}
                                touched={element.touched}
                                valid={element.valid}
                                value={element.value.sm}
                                onChangeText={(val) => updateInputState(key, val, 'sm')} />
                        </View>
                        <View style={styles.lineItem}>
                            <Text style={[styles.smallLabel, {fontWeight: 'bold'}]}>Number of Packets</Text>
                            <Input
                                keyboardType='numeric'
                                selectionColor='white'
                                customStyle={[styles.inputStyle, {backgroundColor: 'black'}]}
                                placeholder={""}
                                autoCorrect={false}
                                touched={element.touched}
                                valid={element.valid}
                                value={element.value.np}
                                onChangeText={(val) => updateInputState(key, val, 'np')} />
                        </View>
                    </View>
                </View>
            )
            formInputs.push(input)
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
                    {formInputs}

                    <Card style={{marginTop: 20}}>
                        <CardItem>
                            <Body>
                                <Text>TOTAL NUMBER OF PACKETS PER DAY</Text>
                                <Text style={{fontWeight: 'bold', marginTop: 15, fontSize: 20}}>{finalNumber}</Text>
                            </Body>
                        </CardItem>
                    </Card>

                    <View style={styles.buttonsWrapper}>
                        <Button style={styles.button} primary onPress={calculate}>
                            <Text>Calculate</Text>
                        </Button>
                        <Button style={styles.button} primary onPress={planingResult}>
                            <Text>Result</Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        </StyleProvider>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        padding: 7
    },
    inputStyle: {
        borderColor: 'black',
        borderRadius: 10,
        paddingLeft: 10,
        backgroundColor: '#1565c0',
        marginTop: 5,
    },
    button: {
        marginTop: 25,
        marginBottom: 25
    },
    smallLabel: {
        fontSize: 10,
        marginBottom: 2
    },
    label: {
        fontWeight: 'bold',
        fontSize: 16
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
        justifyContent: "space-between",
        marginTop: 20,
    },
    lineWrap: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginTop: 10,
        alignItems: 'center',
    },
    lineItemText: {
        marginRight: 5
    },
    lineItem: {
        width: (DEVICE_WIDTH / 3) - 20
    },
    boldText: {
        fontWeight: "bold"
    }
});

export default ServiceProcedure
