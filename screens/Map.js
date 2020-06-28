import React, { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import {
    Text, StyleSheet, View, Button,
} from 'react-native';
import Layout from '../constants/Layout';

const Map = ({ navigation }) => {
    const [markers, setMarkers] = useState([{
        latitude: -33.499789,
        longitude: -70.613974,
    }]);
    const [newMarker, setNewMarker] = useState(null);
    return (
        <View style={styles.container}>
            <View

                style={{
                    backgroundColor: 'red',
                    height: 100,
                    width: 100
                }}
            >
                <Text>hola</Text>
            </View>
            <MapView
                style={styles.mapStyle}
                initialRegion={{
                    latitude: -33.499789,
                    longitude: -70.613974,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                onLongPress={(e) => {
                    setMarkers([...markers, e.nativeEvent.coordinate]);
                    navigation.navigate('NewComment');
                }
                }
            >
                {markers.map((marker, i) => {
                    return (
                        <Marker
                            key={i}
                            coordinate={marker}


                        />
                    );
                }
                )}


            </MapView>
        </View>
    );
};
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
