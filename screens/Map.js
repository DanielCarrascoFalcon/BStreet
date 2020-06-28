import React, { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import {
    Text, StyleSheet, View, Button,
} from 'react-native';
import Layout from '../constants/Layout';
import CustomMarker from '../components/CustomMarker';

const data = [
    {
        coordinate: {
            latitude: -33.499789,
            longitude: -70.613974,
        },
        type: '1',
    },
    {
        coordinate: {
            latitude: -33.498642,
            longitude: -70.616890,
        },
        type: '2',
    }, {
        coordinate: {
            latitude: -33.502203,
            longitude: -70.613789,
        },
        type: '6',
    }, {
        coordinate: {
            latitude: -33.500655,
            longitude: -70.617136,
        },
        type: '4',
    },
    {
        coordinate: {
            latitude: -33.499760,
            longitude: -70.618670,
        },
        type: '5',
    }, {
        coordinate: {
            latitude: -33.496131,
            longitude: -70.615221,
        },
        type: '3',
    }, {
        coordinate: {
            latitude: -33.498467,
            longitude: -70.614519,
        },
        type: '7',
    },
];

const Map = ({ navigation }) => {
    const [markers, setMarkers] = useState(data);
    const [newMarker, setNewMarker] = useState(null);
    return (
        <View style={styles.container}>
            <MapView
                style={styles.mapStyle}
                initialRegion={{
                    latitude: -33.499149,
                    longitude: -70.615875,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,

                }}
                onLongPress={(e) => {
                    setMarkers([...markers, { ...e.nativeEvent, type: '7' }]);
                    navigation.navigate('NewComment');
                }
                }
            >
                {markers.map((marker, i) => (
                    <Marker
                        key={i}
                        coordinate={marker.coordinate}
                    >
                        <CustomMarker
                            type={marker.type}
                        />
                    </Marker>
                ))}

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
