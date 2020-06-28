import React, { useState } from 'react';
import {
    Alert, Text, View, StyleSheet, Dimensions, ScrollView, Modal, TouchableHighlight,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Title } from 'react-native-paper';
import { theme } from '../core/theme';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import Camera from '../components/Camera';

const { width, height } = Dimensions.get('window');

const NewComment = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <ScrollView>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <Camera setfunc={setModalVisible} />
            </Modal>
            <View style={styles.titleContainer}>
                <MaterialCommunityIcons
                    name='comment-multiple-outline'
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
                    Agregar Comentario
                </Title>
            </View>
            <ScrollView
                style={{
                    width: width / 2,
                    alignSelf: 'center',
                }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <View style={styles.iconsContainer}>
                    <Icon
                        name='warning'
                        type='material'
                        size={40}
                        color='#DD2B0F'
                        style={{ alignSelf: 'center', marginHorizontal: 20 }}
                    />
                    <Icon
                        name='error'
                        type='material'
                        size={40}
                        color='#F2E10C'
                        style={{ alignSelf: 'center', marginHorizontal: 20 }}
                    />
                    <Icon
                        name='check-circle'
                        type='fontawesome'
                        size={40}
                        color='green'
                        style={{ alignSelf: 'center', marginHorizontal: 20 }}
                    />
                    <Icon
                        name='warning'
                        type='material'
                        size={40}
                        color='#DD2B0F'
                        style={{ alignSelf: 'center', marginHorizontal: 20 }}
                    />
                    <Icon
                        name='error'
                        type='material'
                        size={40}
                        color='#F2E10C'
                        style={{ alignSelf: 'center', marginHorizontal: 20 }}
                    />
                    <Icon
                        name='check-circle'
                        type='fontawesome'
                        size={40}
                        color='green'
                        style={{ alignSelf: 'center', marginHorizontal: 20 }}
                    />
                </View>
            </ScrollView>
            <View style={styles.form}>
                <TextInput
                    label="Título"
                    keyboardType="default"
                    returnKeyType="next"
                />

                <TextInput
                    style={styles.description}
                    label="Descripción"
                    keyboardType="default"
                    returnKeyType="next"
                    multiline={true}
                />
            </View>
            <View style={{
                flexDirection: 'row',
                alignSelf: 'flex-start',
                alignItems: 'center',

            }}>
                <Button
                    style={{ width: '50%', marginLeft: '25%' }}
                    mode="contained"
                    onPress={() => navigation.navigate('Map')}
                >
                    Enviar
                </Button>
                <Icon
                    name='camera'
                    type='material-community'
                    size={50}
                    style={{ marginHorizontal: 30 }}
                    onPress={() => {
                        setModalVisible(true);
                    }}
                />
            </View>
            <Button
                style={{ width: '50%', marginLeft: '25%' }}
                mode='outlined'
                onPress={() => navigation.navigate('Map')}
            >
                Volver al Mapa
            </Button>
        </ScrollView>
    );
};

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
