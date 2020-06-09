import React from 'react';
import { Text, View, StyleSheet, Animated, ScrollView } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Icon } from 'react-native-elements'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { Title } from 'react-native-paper'
import { theme } from '../core/theme'
import TextInput from '../components/TextInput'
import Button from '../components/Button';


const NewComment = ({ navigation }) => {

    return (
        <ScrollView>
            <View style={styles.titleContainer}>
                <MaterialCommunityIcons
                    name='comment-multiple-outline'
                    size={30}
                    color='#BCCB0B'
                    style={{ alignSelf: 'center', marginHorizontal: 10, }}
                />
                <Title
                    style={{
                        alignSelf: 'center',
                        marginHorizontal: 10,
                        color: 'white',
                        fontSize: 30
                    }}
                >
                    Agregar Comentario
            </Title>
            </View>
            <View style={styles.iconsContainer}>
                <Icon
                    name='warning'
                    type='material'
                    size={40}
                    color='#DD2B0F'
                    style={{ alignSelf: 'center', marginHorizontal: 20, }}
                />
                <Icon
                    name='error'
                    type='material'
                    size={40}
                    color='#F2E10C'
                    style={{ alignSelf: 'center', marginHorizontal: 20, }}
                />
                <Icon
                    name='check-circle'
                    type='fontawesome'
                    size={40}
                    color='green'
                    style={{ alignSelf: 'center', marginHorizontal: 20, }}
                />
            </View>
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
                >
                    Enviar
                </Button>
                <Icon
                    name='camera'
                    type='material-community'
                    size={50}
                    style={{ marginHorizontal: 30 }}
                />
            </View>
            <Button
                style={{ width: '50%', marginLeft: '25%' }}
                mode='outlined'
                onPress={() => navigation.navigate('Tab1')}
            >
                Volver al Mapa
            </Button>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        alignItems: "center",
        flexDirection: 'row',
        alignSelf: 'center',
        backgroundColor: '#19488F',
        borderRadius: 50,
        margin: 20,
        padding: 10

    },
    iconsContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        margin: 10
    },
    form: {
        margin: 10,
        marginHorizontal: 40
    },
    description: {
        height: 300
    }

});

export default NewComment;