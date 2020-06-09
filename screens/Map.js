import React from 'react'
import MapView, { Marker } from 'react-native-maps';
import { Text, StyleSheet, View, Button } from 'react-native'
import Layout from '../constants/Layout'

const Map = () => {
    return (
        <View style={styles.container}>
            <MapView
                style={styles.mapStyle}
                initialRegion={{
                    latitude: -33.499789,
                    longitude: -70.613974,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker
                    coordinate={{
                        latitude: -33.499789,
                        longitude: -70.613974,
                    }}
                    title='Hola'
                    description='Primer marcador'
                />
            </MapView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mapStyle: {
        width: Layout.window.width,
        height: Layout.window.height,
    },
});

export default Map;