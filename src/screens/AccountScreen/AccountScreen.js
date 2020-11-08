import React from 'react'
import { StyleSheet } from 'react-native'
import { Container, Header, Content, Card, CardItem, Text, Body, Title } from "native-base";

const AccountScreen = () => {
    
    return (
        <Container>
            <Header>
                <Body>
                    <Title>Account</Title>
                </Body>
            </Header>
            <Content padder>
            <Card>
                <CardItem header button onPress={() => alert("This is Card Header")}>
                <Text>NativeBase</Text>
                </CardItem>
                <CardItem button onPress={() => alert("This is Card Body")}>
                <Body>
                    <Text>
                    Click on any carditem
                    </Text>
                </Body>
                </CardItem>
                <CardItem footer button onPress={() => alert("This is Card Footer")}>
                <Text>GeekyAnts</Text>
                </CardItem>
            </Card>
            </Content>
        </Container>
            // <View style={styles.mainContainer}>
            //     <SafeAreaView>
            //         <ScrollView>
            //             <Text>Main Screen</Text>
            //         </ScrollView>
            //     </SafeAreaView>
            // </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#1565c0'
    }
});

export default AccountScreen
