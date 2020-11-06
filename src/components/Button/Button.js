import React from 'react';
import { Button, Text } from 'native-base';

import { whiteColor, mainColor, mainColorDark } from '../../utils/colors';

const CustomButton = (props) => (
    <Button {...props} onPress={props.onClick} style={[{flexDirection: 'row' ,backgroundColor: whiteColor, alignItems: 'center', justifyContent: 'center'}, props.btnStyle]} >
        <Text style={{color: mainColor, textAlign: 'center'}}>{props.title}</Text>
    </Button>
)

export default CustomButton;