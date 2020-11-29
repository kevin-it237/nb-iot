import React from 'react'
import { Navigation } from "react-native-navigation";
import { MenuProvider } from 'react-native-popup-menu';
import { Container, Header, Body, Right, Icon, Title, Content,
    Text, StyleProvider, Card, CardItem } from 'native-base';
import {Image} from 'react-native'
import { StyleSheet, BackHandler, TouchableOpacity } from 'react-native'
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import {profileRoute, coverageRoute, capacityPlanningRoute, customerAuthRoute} from '../../routes/routes'
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
  } from 'react-native-popup-menu';

const Main = (props) => {

    const viewAcccount = () => {
        Navigation.push(props.componentId, profileRoute);
    }

    const coveragePlanning = () => {
        Navigation.push(props.componentId, coverageRoute);
    }

    const capacityPlanning = () => {
        Navigation.push(props.componentId, capacityPlanningRoute);
    }

    const custumerSpace = () => {
        Navigation.push(props.componentId, customerAuthRoute);
    }
    
    return (
        <MenuProvider>
            <StyleProvider style={getTheme(material)}>
                <Container style={styles.mainContainer}>
                    <Header>
                        <Body>
                            <Title>NB-IOT</Title>
                        </Body>
                        <Right>
                            <Menu>
                                <MenuTrigger>
                                    <Icon name='ellipsis-vertical' style={{fontSize: 25, color: 'white'}} />
                                </MenuTrigger>
                                <MenuOptions style={{padding: 5}}>
                                    <MenuOption onSelect={() => viewAcccount()}>
                                        <Text style={{fontSize: 16}}>Account</Text>
                                    </MenuOption>
                                    <MenuOption onSelect={() => BackHandler.exitApp()}>
                                        <Text style={{fontSize: 16}}>Quit</Text>
                                    </MenuOption>
                                </MenuOptions>
                            </Menu>
                        </Right>
                    </Header>

                    <Content padder>
                        <TouchableOpacity activeOpacity={0.95} onPress={coveragePlanning}>
                            <Card style={{marginTop: 15}}>
                                <CardItem cardBody>
                                    <Image 
                                        resizeMode={'cover'}
                                        source={require('../../../src/assets/images/1.jpg')} 
                                        style={{height: 200, width: null, flex: 1}} />
                                </CardItem>
                                <CardItem style={{textAlign: 'center', flex: 1, justifyContent: 'center'}}>
                                    <Text style={{textTransform: 'uppercase', fontWeight: 'bold'}}>Coverage Planning</Text>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.95} onPress={capacityPlanning}>
                            <Card style={{marginTop: 15}}>
                                <CardItem cardBody>
                                    <Image 
                                        resizeMode={'cover'}
                                        source={require('../../../src/assets/images/2.jpg')} 
                                        style={{height: 200, width: null, flex: 1}} />
                                </CardItem>
                                <CardItem style={{textAlign: 'center', flex: 1, justifyContent: 'center'}}>
                                    <Text style={{textTransform: 'uppercase', fontWeight: 'bold'}}>Capacity Planning</Text>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.95} onPress={custumerSpace}>
                            <Card style={{marginTop: 15, marginBottom: 15}}>
                                <CardItem cardBody>
                                    <Image 
                                        resizeMode={'cover'}
                                        source={require('../../../src/assets/images/3.jpg')} 
                                        style={{height: 200, width: null, flex: 1}} />
                                </CardItem>
                                <CardItem style={{textAlign: 'center', flex: 1, justifyContent: 'center'}}>
                                    <Text style={{textTransform: 'uppercase', fontWeight: 'bold'}}>Custumer Space</Text>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                    </Content>

                </Container>
            </StyleProvider>
        </MenuProvider>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    }
});

export default Main
