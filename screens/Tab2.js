import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as Location from 'expo-location';

const Tab2 = () => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            const { status } = await Location.requestPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
            }

            const location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    });

    if (errorMsg) {
        return (
            <Text>Hubo un error: {errorMsg}</Text>
        );
    }
    if (location) {
        text = JSON.stringify(location);
        return (
            <View>
                <Text>Coordenadas actuales</Text>
                <Text>
                    Latitud: {location.coords.latitude}
                </Text>
                <Text>
                    Longitud: {location.coords.longitude}
                </Text>
            </View>
        );
    }

    return (
        <Text>Cargando...</Text>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Tab2;
