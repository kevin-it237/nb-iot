import React from 'react'
import { Navigation } from "react-native-navigation";
import { MenuProvider } from 'react-native-popup-menu';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content ,Text } from 'native-base';
import { StyleSheet } from 'react-native'
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
                            <MenuOptions>
                                <MenuOption onSelect={() => viewAcccount()} text="Account" />
                                <MenuOption onSelect={() => alert(`Quit`)} text="Quit" />
                            </MenuOptions>
                        </Menu>
                    </Right>
                </Header>

                <Content padder>
                </Content>
            </Container>
                {/* <Menu>
                    <MenuTrigger text='Select action' />
                    <MenuOptions>
                        <MenuOption onSelect={() => viewAcccount()} text="Account" />
                        <MenuOption text="Quit" onSelect={() => alert(`Quit`)} ></MenuOption>
                    </MenuOptions>
                </Menu> */}
        </MenuProvider>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#1565c0'
    }
});

export default Main
