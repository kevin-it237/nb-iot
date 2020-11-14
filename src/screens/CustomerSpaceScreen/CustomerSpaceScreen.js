import React, {useState} from 'react'
import { Navigation } from "react-native-navigation";
import { Container, Content, Text, StyleProvider, Card, CardItem } from 'native-base';
import {Image} from 'react-native'
import { StyleSheet, TouchableOpacity, View, Dimensions } from 'react-native'
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import {serviceDetailsRoute} from '../../routes/routes'
import Input from '../../components/Input/Input'
import validate from "../../utils/validation";
import Button from '../../components/Button/Button'

const CustomerSpace = (props) => {

    const [access, setAccess] = useState(false)
    const [form, setForm] = useState({
        customerCode: {
            value: "",
            valid: true,
            label: "Enter your Code",
            validationRules: {
                minLength: 1,
            },
            touched: false,
            keyboardType: 'numeric'
        },
    })

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

    const serviceDetails = () => {
        Navigation.push(props.componentId, serviceDetailsRoute);
    }

    const login = () => {
        if(form['customerCode'].value.length) {
            setAccess(true)
        } else {
            alert('Enter Your customer code')
        }
    }
    
    return (
        <StyleProvider style={getTheme(material)}>
            <Container style={styles.mainContainer}>
                <Content padder>

                {
                    !access ?
                    <View style={{padding: 10}}>
                        <Text style={{fontSize: 20, marginBottom: 3, textAlign: 'center', marginTop: 30, textAlign: 'center'}}>Customer Space</Text>
                        <View>
                            <Input
                                keyboardType={form['customerCode'].keyboardType}
                                customStyle={styles.inputStyle}
                                selectionColor='white'
                                placeholder={form['customerCode'].label}
                                autoCorrect={false}
                                touched={form['customerCode'].touched}
                                valid={form['customerCode'].valid}
                                value={form['customerCode'].value}
                                onChangeText={(val) => updateInputState('customerCode', val)} />
                        </View>
                        <View style={styles.loginbtnWrapper}>
                            <Button 
                                onClick={login}
                                disabled={false}  
                                btnStyle={styles.loginbtn} 
                                title="LOGIN" />
                        </View>
                    </View>:
                    <>
                        <TouchableOpacity activeOpacity={0.95} onPress={serviceDetails}>
                            <Card style={{marginTop: 15}}>
                                <CardItem cardBody>
                                    <Image 
                                        resizeMode={'cover'}
                                        source={require('../../../src/assets/images/6.jpg')} 
                                        style={{height: 200, width: null, flex: 1}} />
                                </CardItem>
                                <CardItem style={{textAlign: 'center', flex: 1, justifyContent: 'center'}}>
                                    <Text style={{textTransform: 'uppercase', fontWeight: 'bold'}}>Service 1</Text>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.95} onPress={serviceDetails}>
                            <Card style={{marginTop: 15}}>
                                <CardItem cardBody>
                                    <Image 
                                        resizeMode={'cover'}
                                        source={require('../../../src/assets/images/bg.jpg')} 
                                        style={{height: 200, width: null, flex: 1}} />
                                </CardItem>
                                <CardItem style={{textAlign: 'center', flex: 1, justifyContent: 'center'}}>
                                    <Text style={{textTransform: 'uppercase', fontWeight: 'bold'}}>Service 2</Text>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                    </>
                }

                </Content>
            </Container>
        </StyleProvider>
    )
}
const DEVICE_WIDTH = Dimensions.get('window').width;
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
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
