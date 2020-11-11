import React from 'react'
import { Navigation } from "react-native-navigation";
import { Container, Content, Text, StyleProvider, Card, CardItem } from 'native-base';
import {Image} from 'react-native'
import { StyleSheet, TouchableOpacity } from 'react-native'
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import {serviceDetailsRoute} from '../../routes/routes'

const CustomerSpace = (props) => {

    const serviceDetails = () => {
        Navigation.push(props.componentId, serviceDetailsRoute);
    }

    return (
        <StyleProvider style={getTheme(material)}>
            <Container style={styles.mainContainer}>
                <Content padder>
                    <TouchableOpacity activeOpacity={0.95} onPress={serviceDetails}>
                        <Card style={{marginTop: 15}}>
                            <CardItem cardBody>
                                <Image 
                                    resizeMode={'cover'}
                                    source={require('../../../src/assets/images/bg.jpg')} 
                                    style={{height: 200, width: null, flex: 1}} />
                            </CardItem>
                            <CardItem style={{textAlign: 'center', flex: 1, justifyContent: 'center'}}>
                                <Text style={{textTransform: 'uppercase', fontWeight: 'bold'}}>Service Category</Text>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>
                </Content>
            </Container>
        </StyleProvider>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    }
});

export default CustomerSpace
