import React, {useState} from 'react'
import { StyleSheet, View } from 'react-native'
import {useDispatch} from 'react-redux'
import getTheme from '../../../../native-base-theme/components';
import material from '../../../../native-base-theme/variables/material';
import {mainRoot} from '../../../routes/routes'
import { Navigation } from "react-native-navigation";
import { Container, Content,  Button, StyleProvider, Text, Card, CardItem, Body  } from "native-base";

const ServiceDetails = (props) => {

    const dispatch = useDispatch()


    const backToHome = () => {
        Navigation.setRoot(mainRoot)
    }

    return (
        <StyleProvider style={getTheme(material)}>
            <Container>
                <Content style={styles.mainContainer} padder>
                    <View>
                        <Text style={styles.title}>Service Informations</Text>
                    </View>

                    {/* Results */}

                    <Card style={{marginBottom: 10, marginTop: 15}}>
                        <CardItem>
                            <Body style={{marginTop: 10, marginBottom: 10}}>
                                <Text style={{fontWeight: 'bold'}}>Sensor</Text>
                                <Text style={{alignSelf: 'flex-end', fontSize: 12, color: '#666'}}>Date: May 2020 - June 2020</Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card style={{marginBottom: 10}}>
                        <CardItem>
                            <Body style={{marginTop: 10, marginBottom: 10}}>
                                <Text style={{fontWeight: 'bold'}}>Sensor</Text>
                                <Text style={{alignSelf: 'flex-end', fontSize: 12, color: '#666'}}>Date: Jan 2020 - Feb 2020</Text>
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
