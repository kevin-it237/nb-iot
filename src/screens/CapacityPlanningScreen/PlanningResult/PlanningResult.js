import React, {useState, useEffect} from 'react'
import { StyleSheet, View } from 'react-native'
import getTheme from '../../../../native-base-theme/components';
import material from '../../../../native-base-theme/variables/material';
import {mainRoot} from '../../../routes/routes'
import { Navigation } from "react-native-navigation";
import { Container, Content,  Button, StyleProvider, Text, Card, CardItem, Body } from "native-base";
import Map from '../../../components/Map/Map'

const PlaningResult = (props) => {

    const [numberOfSites, setNumberOfSites] = useState("")
    const [finalNumber, setFinalNumber] = useState("")

    const backToHome = () => {
        Navigation.setRoot(mainRoot)
    }

    useEffect(() => {
        setNumberOfSites(props.results.NenodeB)
        setFinalNumber(props.results.NenodeB)
    }, [])

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

                    <Text style={{textAlign: 'center', fontWeight: 'bold'}}>Atoll NB-IOT Coverage</Text>

                    {/* Map here */}
                    <Map finalNumber={finalNumber} />
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
