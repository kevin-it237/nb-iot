import React from 'react'
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import {densityPlanningRoute, servicePlanningRoute} from '../../routes/routes'
import { Navigation } from "react-native-navigation";
import { Container, Content,  Button, StyleProvider, Text, Card, CardItem } from "native-base";

const DensityProcedure = (props) => {

    const formInputs = []

    const densityProcedure = () => {
        Navigation.push(props.componentId, densityPlanningRoute)
    }

    const serviceProcedure = () => {
        Navigation.push(props.componentId, servicePlanningRoute)
    }
   
    return (
        <StyleProvider style={getTheme(material)}>
            <Container>
                <Content style={styles.mainContainer} padder>
                    {/* <View style={styles.titleWrap}>
                        <Text style={styles.title}>Procedure of Capacity Dimensioning</Text>
                    </View> */}
                    
                    <TouchableOpacity activeOpacity={0.95} onPress={densityProcedure}>
                        <Card style={{marginTop: 15}}>
                            <CardItem cardBody>
                                <Image 
                                    resizeMode={'cover'}
                                    source={require('../../../src/assets/images/4.jpg')} 
                                    style={{height: 200, width: null, flex: 1}} />
                            </CardItem>
                            <CardItem style={{textAlign: 'center', flex: 1, justifyContent: 'center'}}>
                                <Text style={{textTransform: 'uppercase', fontWeight: 'bold'}}>Density Procedure</Text>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.95} onPress={serviceProcedure}>
                        <Card style={{marginTop: 15}}>
                            <CardItem cardBody>
                                <Image 
                                    resizeMode={'cover'}
                                    source={require('../../../src/assets/images/5.png')} 
                                    style={{height: 200, width: null, flex: 1}} />
                            </CardItem>
                            <CardItem style={{textAlign: 'center', flex: 1, justifyContent: 'center'}}>
                                <Text style={{textTransform: 'uppercase', fontWeight: 'bold'}}>Service Procedure</Text>
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
        paddingBottom: 40
    },
    buttonWrapper: {
        flexDirection: 'row',
        justifyContent: "center"
    },
    titleWrap: {
        borderStyle: 'solid', 
        marginBottom: 15,
        borderWidth: 2, 
        paddingVertical: 10, 
        paddingHorizontal: 10, borderRadius: 5},
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

export default DensityProcedure
