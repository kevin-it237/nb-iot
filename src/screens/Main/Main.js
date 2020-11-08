import React from 'react'
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from 'react-native'

const Main = () => {
    
    return (
        <View style={styles.mainContainer}>
            <SafeAreaView>
                <ScrollView>
                    <Text>Main Screen</Text>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#1565c0',
        justifyContent: 'center'
    }
});

export default Main
