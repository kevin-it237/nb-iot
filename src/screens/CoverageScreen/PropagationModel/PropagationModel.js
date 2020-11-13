import React, {useState, useEffect} from 'react'
import { StyleSheet, View, Picker } from 'react-native'
import {useDispatch} from 'react-redux'
import Input from '../../../components/Input/Input'
import getTheme from '../../../../native-base-theme/components';
import material from '../../../../native-base-theme/variables/material';
import validate from "../../../utils/validation";
import {mainRoot} from '../../../routes/routes'
import { Navigation } from "react-native-navigation";
import {additionalParam} from './propagationModelForm'
import { Container, Content,  Button, StyleProvider, Text, Card, CardItem, Body  } from "native-base";

const PropagationModel = (props) => {

    const [form, setForm] = useState(additionalParam)
    const [finalResult, setFinalResult] = useState({
        cellArea: "",
        numberOfSites: "",
        cellRadius: ""
    })

    const results = props.params.results

    useEffect(() => {
        
    }, [])

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

    const calculate = () => {
        if(results) {
            setFinalResult({
                cellArea: results.AIR,
                numberOfSites: results.eNODEB,
                cellRadius: results.R
            })
        }
    }

    const formInputs = []
   
    for (const key in form) {
        if (form.hasOwnProperty(key) &&  key !== 'propagationModel') {
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
                        touched={form[key].touched}
                        valid={form[key].valid}
                        value={form[key].value}
                        onChangeText={(val) => updateInputState(key, val)} />
                </View>
            )
            formInputs.push(input)
        }
    }

    const {cellArea, cellRadius, numberOfSites} = finalResult

    return (
        <StyleProvider style={getTheme(material)}>
            <Container>
                <Content style={styles.mainContainer} padder>
                    <View>
                        <Text style={styles.title}>Propagation Model, Cell type and planing result</Text>
                    </View>

                    <Text style={[styles.label, {marginTop: 15}]}>Choose Your propagation Model</Text>
                    <Picker
                        selectedValue={form['propagationModel'].value}
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue, itemIndex) => updateInputState('propagationModel', itemValue)}
                    >
                        <Picker.Item label="COST231" value="COST231" />
                        <Picker.Item label="Other" value="Other" />
                    </Picker>
                    {formInputs}

                    {/* Results */}

                    <Card style={{marginBottom: 10, marginTop: 15}}>
                        <CardItem>
                            <Body>
                                <Text>Cell Radius</Text>
                                <Text style={{fontWeight: 'bold', marginTop: 15, fontSize: 20}}>{`${cellRadius} km`}</Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card style={{marginBottom: 10}}>
                        <CardItem>
                            <Body>
                                <Text>Cell Area</Text>
                                <Text style={{fontWeight: 'bold', marginTop: 15, fontSize: 20}}>{`${cellArea} km2`}</Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card style={{marginBottom: 10}}>
                        <CardItem>
                            <Body>
                                <Text>Number of sites</Text>
                                <Text style={{fontWeight: 'bold', marginTop: 15, fontSize: 20}}>{numberOfSites}</Text>
                            </Body>
                        </CardItem>
                    </Card>


                    <View style={styles.buttonsWrapper}>
                        <Button style={styles.button} primary onPress={calculate}>
                            <Text>Calculate</Text>
                        </Button>
                        <Button style={styles.button} primary onPress={backToHome}>
                            <Text>HOME</Text>
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
    }
});

export default PropagationModel
