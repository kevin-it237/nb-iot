import React, {useState} from 'react'
import { View, Text, Modal, Dimensions, StyleSheet, Picker } from 'react-native'
import { Container, Content, Toast } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import validate from "../../../utils/validation";
import UserInput from '../../../components/Input/Input'
import Button from '../../../components/Button/Button';
import Loader from '../../../components/Loader/Loader';

const ModalPop = ({closeModal, showModal, setServices}) => {

    const [loading, setLoading] = useState(false)

    const [form, setForm] = useState({
        meterType: {
            value: "ENEO",
            valid: true,
            label: "Meter Type",
            validationRules: {
                minLength: 1,
            },
            touched: false
        },
        meterNumber: {
            value: "",
            valid: true,
            label: "Meter Number",
            validationRules: {
                minLength: 5,
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

    const storeData = async (data) => {
        let services = []
        try {
            setLoading(true)
            const value = await AsyncStorage.getItem('services')
            if(value !== null) {
                // value previously stored
                services = JSON.parse(value)
                services.push(data)
            } else {
                services.push(data)
            }
            try {
                const jsonValue = JSON.stringify(services)
                await AsyncStorage.setItem('services', jsonValue)
                closeModal()
            } catch (e) {}
        } catch(e) {}
    }

    const submit = () => {
        if(!form.meterNumber.valid) {
            alert('Enter metter value')
        } else {
            setTimeout(() => {
                const service = {
                    meterType: form.meterType.value,
                    meterNumber: form.meterNumber.value,
                }
                // Save service to localstorage
                storeData(service)
            }, 1000)
        }
    }

    let data = []
    for (const key in form) {
        if (form.hasOwnProperty(key)) {
            const element = form[key];
            if(element.label === "Meter Number") {
                data.push(
                    <UserInput
                        key={key}
                        customStyle={styles.inputStyle}
                        placeholder={element.label}
                        keyboardType={element.keyboardType}
                        autoCapitalize={'none'}
                        returnKeyType={'done'}
                        autoCorrect={false}
                        touched={element.touched}
                        valid={element.valid}
                        value={element.value}
                        onChangeText={(val) => updateInputState(key, val)}
                    />
                )
            }
        }
    }

    return (
        <Modal
            animationType="slide"
            visible={showModal}
            onRequestClose={closeModal}>
            <Container>
                <Content>
                    <View style={styles.mainContainer}>
                        <View style={{marginBottom: 15}}><Text style={{textAlign: 'center', fontSize: 16}}>Add a new service</Text></View>
                        <Picker
                            selectedValue={form['meterType'].value}
                            style={{ height: 50, width: 150 }}
                            onValueChange={(itemValue, itemIndex) => updateInputState('meterType', itemValue)}
                        >
                            <Picker.Item label="ENEO" value="ENEO" />
                            <Picker.Item label="CAMWATER" value="CAMWATER" />
                        </Picker>
                        {data}
                        <View style={styles.loginbtnWrapper}>
                            {loading ? <Loader color={"#1565c0"} /> :
                                <Button 
                                    onClick={submit}
                                    btnStyle={styles.loginbtn} 
                                    title="Add Service" />
                            
                            }
                        </View>
                    </View>
                </Content>
            </Container>
        </Modal>
    )
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const styles = StyleSheet.create({
    mainContainer: {
        marginTop: 50,
        flex: 1,
        padding: 20,
        justifyContent: 'center'
    },
    inputStyle: {
        borderColor: 'black',
        borderRadius: 10,
        paddingLeft: 20,
        backgroundColor: '#1565c0',
        fontSize: 17,
    },
    loginbtn: {
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

export default ModalPop
