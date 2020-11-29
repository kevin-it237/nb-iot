import React, {useState, useEffect} from 'react'
import { Navigation } from "react-native-navigation";
import { Container, Content, Text, StyleProvider, Card, CardItem, Button, Icon } from 'native-base';
import {Image} from 'react-native'
import { StyleSheet, TouchableOpacity, View, Dimensions } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import {serviceDetailsRoute} from '../../routes/routes'
import FAB from 'react-native-fab'
import Modal from './Modal/Modal'

const CustomerSpace = (props) => {

    const [showModal, setShowModal] = useState(false)
    const [services, setServices] = useState([])

    const serviceDetails = () => {
        Navigation.push(props.componentId, serviceDetailsRoute);
    }

    const getData = async () => {
        // AsyncStorage.removeItem('services')
        try {
          const value = await AsyncStorage.getItem('services')
          if(value !== null) {
            const services = JSON.parse(value)
            setServices(services)
          }
        } catch(e) {
          // error reading value
        }
    }

    useEffect(() => {
        getData()
    }, [showModal])
    
    return (
        <>
        <StyleProvider style={getTheme(material)}>
            <View style={{flex: 1}}>
                <Container style={styles.mainContainer}>
                    <Modal
                        setServices={setServices}
                        closeModal={() => setShowModal(false)}
                        showModal={showModal} 
                    />
                    <Content style={{flex: 1}} padder>
                        {services.length===0&&<Text style={{textAlign: 'center', marginTop: 50}}>Click on the plus button to add a service.</Text>}
                        {
                            services.map((service, i) => (
                                <TouchableOpacity activeOpacity={0.95} onPress={serviceDetails}>
                                    <Card style={{marginTop: 15}}>
                                        <CardItem cardBody>
                                            <Image 
                                                resizeMode={'cover'}
                                                source={require('../../../src/assets/images/6.jpg')} 
                                                style={{height: 200, width: null, flex: 1}} />
                                        </CardItem>
                                        <CardItem style={{textAlign: 'center', flex: 1, justifyContent: 'center'}}>
                                            <Text style={{textTransform: 'uppercase', fontWeight: 'bold'}}>{service.meterType}</Text>
                                            <Text style={{textTransform: 'uppercase'}}>({service.meterNumber})</Text>
                                        </CardItem>
                                    </Card>
                                </TouchableOpacity>
                            ))
                        }
                      
                        {/* 
                        <Button style={styles.addButton} rounded primary onPress={() => setShowModal(true)}>
                            <Text style={{fontSize: 20}}>+</Text>
                        </Button> */}
                    </Content>
                </Container>
            </View>
        </StyleProvider>
        <View>
            <FAB 
                buttonColor="#0f63bc" 
                iconTextColor="#FFFFFF" 
                onClickAction={() => setShowModal(true)} 
                visible={true} 
                iconTextComponent={<Text>+</Text>} />

        </View>
        </>
    )
}
const DEVICE_WIDTH = Dimensions.get('window').width;
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    addButton: {
        position: 'absolute',
        right: 10,
        bottom: 5,
        zIndex: 10,
        padding: 0
    },
    inputStyle: {
        borderColor: 'black',
        borderRadius: 10,
        paddingLeft: 20,
        backgroundColor: '#1565c0',
        fontSize: 17,
    },
    loginbtn: {
        width: DEVICE_WIDTH - 50,
        marginTop: 30,
        borderRadius: 20
    },
    loginbtnWrapper: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default CustomerSpace
