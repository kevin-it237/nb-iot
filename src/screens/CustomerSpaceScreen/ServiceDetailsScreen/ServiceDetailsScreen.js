import React, {useState, useEffect} from 'react'
import { StyleSheet, View, Picker } from 'react-native'
import {useDispatch} from 'react-redux'
import getTheme from '../../../../native-base-theme/components';
import material from '../../../../native-base-theme/variables/material';
import {mainRoot} from '../../../routes/routes'
import { Navigation } from "react-native-navigation";
import { Container, Content,  Button, StyleProvider, Text, Card, CardItem, Body  } from "native-base";


const ServiceDetails = (props) => {

    const dispatch = useDispatch()
    const [year, setYear] = useState("2020")
    const [month, setMonth] = useState("Dec")
    const [amount, setAmount] = useState(null)
    const [value, setValue] = useState(null)

    const backToHome = () => {
        Navigation.setRoot(mainRoot)
    }

    useEffect(() => {
        setValue(Math.round(Math.random()*15 + 12))
        setAmount(Math.round(Math.random()*30000 + 15000))
    }, [year, month])

    return (
        <StyleProvider style={getTheme(material)}>
            <Container>
                <Content style={styles.mainContainer} padder>
                    <View>
                        <Text style={styles.title}>Service Informations</Text>
                    </View>

                    {/* Results */}

                    <View style={{flexDirection: 'row', marginBottom: 10}}>
                        <View>
                            <Picker
                                selectedValue={year}
                                style={{ height: 50, width: 150 }}
                                onValueChange={(itemValue, itemIndex) => setYear(itemValue)}
                            >
                                <Picker.Item label="2020" value="2020" />
                                <Picker.Item label="2019" value="2019" />
                                <Picker.Item label="2018" value="2018" />
                            </Picker>
                        </View>
                        <View>
                            <Picker
                                selectedValue={month}
                                style={{ height: 50, width: 150 }}
                                onValueChange={(itemValue, itemIndex) => setMonth( itemValue)}
                            >
                                <Picker.Item label="Janvier" value="Janvier" />
                                <Picker.Item label="Février" value="Février" />
                                <Picker.Item label="Mars" value="Mars" />
                                <Picker.Item label="Avril" value="Avril" />
                                <Picker.Item label="May" value="May" />
                                <Picker.Item label="June" value="June" />
                                <Picker.Item label="July" value="July" />
                                <Picker.Item label="Aout" value="Aout" />
                                <Picker.Item label="September" value="September" />
                                <Picker.Item label="Octobre" value="Octobre" />
                                <Picker.Item label="Novembre" value="Novembre" />
                                <Picker.Item label="Décembre" value="Décembre" />
                            </Picker>
                        </View>
                    </View>

                    {/* <View style={{marginBottom: 10}}><Text style={{fontSize: 16}}>Metter Number: {}</Text></View> */}

                    <Card style={{marginBottom: 10, marginTop: 15}}>
                        <CardItem>
                            <Body style={{marginTop: 10, marginBottom: 10}}>
                                <Text style={{fontWeight: 'bold'}}>Consumption</Text>
                                <Text style={{alignSelf: 'flex-end', fontSize: 12, color: '#666'}}>{value} m3 | KW</Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card style={{marginBottom: 10}}>
                        <CardItem>
                            <Body style={{marginTop: 10, marginBottom: 10}}>
                                <Text style={{fontWeight: 'bold'}}>Amount (FCFA)</Text>
                                <Text style={{alignSelf: 'flex-end', fontSize: 12, color: '#666'}}>{amount} FCFA</Text>
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

export default ServiceDetails
