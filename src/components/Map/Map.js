import React, { useState, useEffect } from 'react'
import { StyleSheet, Dimensions, Text } from 'react-native'
import MapView, {Marker} from 'react-native-maps';

const YDlatitude = 3.844119
const YDlongitude = 11.501346

const Map = ({finalNumber, latlng}) => {
    const [markers, setMarkers] = useState([ 
        // 3.799119 => 3.9000  && 11.48 =>  11.591346      0.045 0.09
        {   
            latlng: latlng,
            title: "eNodeB",
            description: "eNobeB in the NB-IOT planification"
        }
    ])

    const between = (min, max) => {  
        return Math.random() * (max - min) + min
    }

    useEffect(() => {
        let markers = []
        if(Object.keys(latlng).length) {
            for (let index = 1; index <= finalNumber; index++) {
                let latitude = between(latlng.latitude - 0.09, latlng.latitude + 0.045)
                let longitude = between(latlng.longitude - 0.02, latlng.longitude + 0.06)
                markers.push({   
                    latlng: {latitude, longitude},
                    title: "eNodeB",
                    description: "eNobeB in the NB-IOT planification"
                })
            }
            setMarkers(markers)
        }
    }, [finalNumber, latlng])


    return (
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: latlng.latitude,
                    longitude: latlng.longitude,
                    latitudeDelta: 0.0822,
                    longitudeDelta: 0.0821,
                }}
                >
                {markers.map((marker, index) => (
                    <Marker
                        key={index}
                        image={require('../../assets/images/picker.png')}
                        coordinate={marker.latlng}
                        title={marker.title}
                        description={marker.description}
                    />
                ))}
            </MapView>
    )
}

const DEVICE_WIDTH = Dimensions.get('screen').width

const styles = StyleSheet.create({
    map: {
      flex: 1,
      width: DEVICE_WIDTH - 40,
      height: 350,
      marginBottom: 40,
      marginTop: 20,
      marginHorizontal: 0,
      paddingHorizontal: 0
    },
});

export default Map
