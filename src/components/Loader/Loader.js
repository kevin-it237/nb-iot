import React  from 'react';
import { View, ActivityIndicator } from 'react-native';
import { mainColor, whiteColor } from '../../utils/colors';

const loader = (props) => (
    <View style={{ height: 20, width: '100%', marginTop: 20, marginBottom: 20 }}>
        <ActivityIndicator size="large"  color={props.color? props.color:whiteColor} />
    </View>
);

export default loader;