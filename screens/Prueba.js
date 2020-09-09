import React, { useState } from 'react';
import {
    Alert, Text, View, StyleSheet, Dimensions, ScrollView, Modal, TouchableHighlight, TouchableOpacity,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Title, List } from 'react-native-paper';
import { theme } from '../core/theme';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import Camera from '../components/Camera';

const data = [
    {
        title: 'Casa',
        description: '500 m - 10 Min',
    }, {
        title: 'Trabajo',
        description: '12 Km - 30 Min',
    }, {
        title: 'Tienda',
        description: '850 m - 15 Min',
    }, {
        title: 'Colegio',
        description: '2 Km - 45 Min',
    },
];

const { width, height } = Dimensions.get('window');

const NewComment = ({ navigation }) => (
    <ScrollView>
        <View style={styles.titleContainer}>
            <MaterialCommunityIcons
                name='routes'
                size={30}
                color='#BCCB0B'
                style={{ alignSelf: 'center', marginHorizontal: 10 }}
            />
            <Title
                style={{
                    alignSelf: 'center',
                    marginHorizontal: 10,
                    color: 'white',
                    fontSize: 20,
                }}
            >
                Rutas
            </Title>
        </View>
        <View
            style={{
                justifyContent: 'center',
                alignContent: 'center',
            }}
        >
            {data.map((route, i) => {
                return (
                    <TouchableOpacity
                        key={i}
                        style={{
                            width: 150,
                            alignSelf: 'center',
                            borderRadius: 30,
                            margin: 10,
                            borderWidth: 3,
                            borderColor: theme.colors.secondary
                        }}
                    >
                        <List.Item
                            key={i}
                            title={route.title}
                            description={route.description}
                            titleStyle={{
                                fontSize: 20
                            }}
                        />
                    </TouchableOpacity>
                );
            })}
        </View>
        <View
            style={{
                paddingTop: 100
            }}
        >
            <Button
                style={{ width: '50%', marginLeft: '25%' }}
                mode='outlined'
                onPress={() => navigation.navigate('Map')}
            >
                Volver al Mapa
            </Button>
        </View>
    </ScrollView>
);

const styles = StyleSheet.create({
    titleContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        alignSelf: 'center',
        backgroundColor: '#19488F',
        borderRadius: 50,
        margin: 20,
        padding: 10,

    },
    iconsContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        margin: 10,
    },
    form: {
        margin: 10,
        marginHorizontal: 40,
    },
    description: {
        height: height / 4,
    },

});

export default NewComment;
