import React from 'react'
import { Navigation } from "react-native-navigation";
import { MenuProvider } from 'react-native-popup-menu';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content ,Text, StyleProvider } from 'native-base';
import { StyleSheet, BackHandler } from 'react-native'
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
  } from 'react-native-popup-menu';

const Main = (props) => {

    const viewAcccount = () => {
        Navigation.push(props.componentId, {
            component: {
              name: 'nbiot.profile',
              options: {
                topBar: {
                  title: {
                    text: 'Account'
                  }
                }
              }
            }
        });
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
                                    <Text style={{color: "white"}}>Menu</Text>
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
