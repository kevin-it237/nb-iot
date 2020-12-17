import React, {useState, useEffect} from 'react'
import { StyleSheet, View } from 'react-native'
import getTheme from '../../../../native-base-theme/components';
import material from '../../../../native-base-theme/variables/material';
import {mainRoot} from '../../../routes/routes'
import { Navigation } from "react-native-navigation";
import { Container, Content,  Button, StyleProvider, Text, Card, CardItem, Body } from "native-base";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Map from '../../../components/Map/Map'

const PlaningResult = (props) => {

    const [numberOfSites, setNumberOfSites] = useState("")
    const [finalNumber, setFinalNumber] = useState("")
    const [city, setCity] = useState("")
    const [latlng, setLatlng] = useState({
        
    })

    const backToHome = () => {
        Navigation.setRoot(mainRoot)
    }

    useEffect(() => {
        getCity()
    }, [])


    useEffect(() => {
        if(city) {
            if(city === 'Douala') {
                setLatlng({
                    latitude: 4.061536,
                    longitude: 9.786072,
                })
            } else if(city === 'Yaoundé') {
                setLatlng({
                    latitude: 3.900,
                    longitude: 11.48,
                })
            }
        }
    }, [city])

    useEffect(() => {
        setNumberOfSites(props.results.NenodeB)
        setFinalNumber(props.results.NenodeB)
        getData()
    }, [])

    const getData = async () => {
        try {
            let numbers = [props.results.NenodeB]
            let nb1 = await AsyncStorage.getItem('nb1')
            if(nb1 !== null) { numbers.push(parseInt(nb1))}
            const finalNB = Math.max(...numbers)
            setFinalNumber(finalNB)
        } catch(e) {
          // error reading value
        }
    }

    const getCity = async () => {
        try {
            let city = await AsyncStorage.getItem('city')
            setCity(city)
        } catch(e) {
          // error reading value
        }
    }

    return (
        <StyleProvider style={getTheme(material)}>
            <Container>
                <Content style={styles.mainContainer} padder>
                    {/* Result box here */}
                    <Card>
                        <CardItem>
                            <Body>
                                <Text>NUMBER OF SITES</Text>
                                <Text style={{fontWeight: 'bold', marginTop: 15, fontSize: 20}}>{numberOfSites}</Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Body>
                                <Text>FINAL NUMBER OF SITES</Text>
                                <Text style={{fontWeight: 'bold', marginTop: 15, fontSize: 20}}>{finalNumber}</Text>
                            </Body>
                        </CardItem>
                    </Card>

                    {/* <View style={styles.buttonsWrapper}>
                        <Button style={styles.button} primary>
                            <Text>Display</Text>
                        </Button>
                        <Button style={styles.button} primary onPress={backToHome}>
                            <Text>Home</Text>
                        </Button>
                    </View> */}

                    <Text style={{textAlign: 'center', fontWeight: 'bold', marginTop: 20}}>NB-IOT Coverage</Text>

                    {/* Map here */}
                    {Object.keys(latlng).length ? <Map latlng={latlng} finalNumber={finalNumber} />: <Text>Loading Map</Text> }
                    
                </Content>
            </Container>
        </StyleProvider>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        padding: 10
    },
    buttonsWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 25,
        marginBottom: 30
    },
});

export default PlaningResult
