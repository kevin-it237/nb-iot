import React, {useState} from 'react'
import { StyleSheet, View, Dimensions} from 'react-native'
import {useDispatch} from 'react-redux'
import Input from '../../../components/Input/Input'
import getTheme from '../../../../native-base-theme/components';
import material from '../../../../native-base-theme/variables/material';
import validate from "../../../utils/validation";
import {propagationmodelRoute} from '../../../routes/routes'
import { Navigation } from "react-native-navigation";
import {trasmitterParam, receiverParam, additionalParam, pathLossParam} from './linkBudgetForm'
import { Container, Content,  Button, StyleProvider, Text, Card, CardItem, Body } from "native-base";

import {bilanDeLiaison} from '../../../utils/calculator'

const DEVICE_WIDTH = Dimensions.get('window').width;

const LinkBudget = (props) => {

    const dispatch = useDispatch()
    const [form1, setForm1] = useState(trasmitterParam)
    const [form2, setForm2] = useState(receiverParam)
    const [form3, setForm3] = useState(additionalParam)
    const [form4, setForm4] = useState(pathLossParam)
    const [results, setResults] = useState(null)

    ///////////// FORM 1 //////////////
    // For dual inputs
    updateInputStateDual = (key, value, downup) => {
        setForm1({
            ...form1,
            [key]: {
                ...form1[key],
                value: {...form1[key].value, [downup]: value },
                touched: true,
            },
        })
    };

    // For simple input
    updateInputState = (key, value) => {
        setForm1({
            ...form1,
            [key]: {
                ...form1[key],
                value: value,
                valid: validate(value, form1[key].validationRules),
                touched: true,
            },
        })
    };
    ///////////// END FORM 1 //////////////


    /////////////  FORM 2 //////////////
    // For dual inputs form 2
    updateInputState2 = (key, value, downup) => {
        setForm2({
            ...form2,
            [key]: {
                ...form2[key],
                value: {...form2[key].value, [downup]: value },
                touched: true,
            },
        })
    };
    ///////////// END FORM 2 //////////////


    /////////////  FORM 3 //////////////
    // For simple input
    updateInputState3 = (key, value) => {
        setForm3({
            ...form3,
            [key]: {
                ...form3[key],
                value: value,
                valid: validate(value, form3[key].validationRules),
                touched: true,
            },
        })
    };
    ///////////// END FORM 3 //////////////*

    /////////////  FORM 4 //////////////
    // For simple input
    updateInputState4 = (key, value) => {
        setForm4({
            ...form4,
            [key]: {
                ...form4[key],
                value: value,
                valid: validate(value, form4[key].validationRules),
                touched: true,
            },
        })
    };
    ///////////// END FORM 4 //////////////*

    const targetParams = props.targetParams
    const data = {
        targetParams,
        trasmitterParam: form1,
        receiverParam: form2,
        additionalParam: form3,
        pathLossParam: form4,
        results
    }

    const next = () => {
        if(results) {
            Navigation.push(props.componentId, propagationmodelRoute({params: data}))
        } else {
            alert('Calculate before clicking on NEXT')
        }
    }

    const calculate = () => {
        const bilan = bilanDeLiaison(targetParams, form1, form2, form3)
        setResults(bilan)
    }

    const formInputsSetOne = []
    const formInputsSetTwo = []
    const formInputsSetThree = []
    const formInputsSetFour = []
   
    for (const key in form1) {
        if (form1.hasOwnProperty(key) && key !== 'eirp') {
            const element = form1[key];
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
                            onChangeText={(val) => updateInputStateDual(key, val, 'dl')} />
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
                            onChangeText={(val) => updateInputStateDual(key, val, 'ul')} />
                    </View>
                </View>
            )
            formInputsSetOne.push(input)
        }
    }
    
    for (const key in form2) {
        if (form2.hasOwnProperty(key)) {
            const element = form2[key];
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
                            onChangeText={(val) => updateInputState2(key, val, 'dl')} />
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
                            onChangeText={(val) => updateInputState2(key, val, 'ul')} />
                    </View>
                </View>
            )
            formInputsSetTwo.push(input)
        }
    }

    for (const key in form3) {
        if (form3.hasOwnProperty(key)) {
            const element = form3[key];
            const input = (
                <View key={key} style={styles.line}>
                    <View style={styles.lineItemText}><Text>{element.label}</Text></View>
                    <View style={{flex: 1}}>
                        <Input
                            keyboardType='numeric'
                            selectionColor='white'
                            customStyle={styles.inputStyle}
                            placeholder={""}
                            autoCorrect={false}
                            touched={element.touched}
                            valid={element.valid}
                            value={element.value}
                            onChangeText={(val) => updateInputState3(key, val)} />
                    </View>
                </View>
            )
            formInputsSetThree.push(input)
        }
    }

    for (const key in form4) {
        if (form4.hasOwnProperty(key)) {
            const element = form4[key];
            const input = (
                <View key={key} style={styles.line}>
                    <View style={styles.lineItemText}><Text>{element.label}</Text></View>
                    <View style={{flex: 1}}>
                        <Input
                            keyboardType='numeric'
                            selectionColor='white'
                            customStyle={styles.inputStyle}
                            placeholder={""}
                            autoCorrect={false}
                            touched={element.touched}
                            valid={element.valid}
                            value={element.value}
                            onChangeText={(val) => updateInputState4(key, val)} />
                    </View>
                </View>
            )
            formInputsSetFour.push(input)
        }
    }

    return (
        <StyleProvider style={getTheme(material)}>
            <Container>
                <Content style={styles.mainContainer} padder>
                    <View style={{borderStyle: 'solid', borderWidth: 2, padding: 10, paddingHorizontal: 10, borderRadius: 5}}>
                        <Text style={styles.title}>Link Budget Parameters</Text>
                    </View>
                    <View style={{marginTop: 10}}>
                        <Text style={{marginTop: 5, fontWeight: 'bold'}}>Transmitter Parameters</Text>
                    </View>
                    {/* Form start here */}
                    <View style={styles.line}>
                        <View style={styles.lineItemText}></View>
                        <View style={styles.lineItem}><Text>DL</Text></View>
                        <View style={styles.lineItem}><Text>UL</Text></View>
                    </View>
                    {/* Transitter params */}
                    
                    {formInputsSetOne}
                    {/* <View style={styles.line}>
                        <View style={styles.lineItemText}><Text>EIRP Per Subcarrier(dBm)</Text></View>
                        <View style={{flex: 1}}>
                            <Input
                                keyboardType='numeric'
                                selectionColor='white'
                                customStyle={styles.inputStyle}
                                placeholder={""}
                                autoCorrect={false}
                                touched={form1.eirp.touched}
                                valid={form1.eirp.valid}
                                value={form1.eirp.value}
                                onChangeText={(val) => updateInputState('eirp', val)} />
                        </View>
                    </View> */}

                    {/* Receiver params */}
                    <View style={{marginTop: 25}}>
                        <Text style={{marginTop: 5, fontWeight: 'bold'}}>Receiver Parameters</Text>
                    </View>
                    {formInputsSetTwo}

                    {/* Receiver params */}
                    <View style={{marginTop: 25}}>
                        <Text style={{marginTop: 5, fontWeight: 'bold'}}>Others Parameters</Text>
                    </View>
                    {formInputsSetThree}

                    {/* Receiver params */}
                    <View style={{marginTop: 25}}>
                        <Text style={{marginTop: 5, fontWeight: 'bold'}}>Path Loss Parameters</Text>
                    </View>
                    {/* {formInputsSetFour} */}
                    <Card style={{marginTop: 10}}>
                        <CardItem>
                            <Body>
                                <Text style={{fontWeight: 'bold', fontSize: 17}}>MAPL</Text>
                                <Text style={{fontWeight: 'bold', marginTop: 15, fontSize: 18}}>{results?.MAPL ? results.MAPL:""}</Text>
                            </Body>
                        </CardItem>
                    </Card>
                    
                    {/* Form end here */}
                    <View style={styles.buttonsWrapper}>
                        <Button style={styles.button} primary onPress={calculate}>
                            <Text>Calculate</Text>
                        </Button>
                        <Button style={styles.button} primary onPress={next}>
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
        marginBottom: 0,
        textAlign: 'center'
    },
    buttonsWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
});

export default LinkBudget
