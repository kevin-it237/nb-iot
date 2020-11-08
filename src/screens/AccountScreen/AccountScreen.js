import React, {useState, useEffect} from 'react'
import { StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import {loginRoot} from '../../routes/routes'
import { Navigation } from "react-native-navigation";
import { Container, Content, Card, CardItem, Text, Body, Button, StyleProvider } from "native-base";

const AccountScreen = () => {

    const [user, setUser] = useState({email: "", userName: ""})

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
          const value = await AsyncStorage.getItem('auth:data')
          const data = JSON.parse(value)
          setUser({...user, email: data.email, userName: data.displayName})
        } catch(e) {
          // error reading value
        }
    }

    const logout= async () => {
        try {
          await AsyncStorage.clear()
          Navigation.setRoot(loginRoot)
        } catch(e) {
          // clear error
        }
    }
    
    
    return (
        <StyleProvider style={getTheme(material)}>
            <Container>

                <Content padder>
                    <Card>
                        <CardItem header button>
                            <Text style={{fontWeight: 'bold'}}>User Informations</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text style={{fontWeight: 'bold', marginBottom: 8, marginTop: 0}}>Email Address</Text>
                                <Text>{user.email}</Text>
                                <Text style={{fontWeight: 'bold', marginBottom: 8, marginTop: 20}}>Username</Text>
                                <Text>{user.userName}</Text>

                                <Button style={{marginTop: 20}} onPress={logout} primary>
                                    <Text>Log out</Text>
                                </Button>
                            </Body>
                        </CardItem>
                        <CardItem button>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        </StyleProvider>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#1565c0'
    }
});

export default AccountScreen
