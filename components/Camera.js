import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Modal, Image } from 'react-native'
import { Camera } from 'expo-camera';
import { useSafeArea } from 'react-native-safe-area-context';
import { Icon } from 'react-native-elements'
import Button from '../components/Button'



const { width, height } = Dimensions.get('window')

export default function CameraScreen({ setfunc }) {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back)
    const [cameraRef, setCameraRef] = useState(null)
    const [capturedPhoto, setCapturedPhoto] = useState(false)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={{ flex: 1 }}>
            <Camera style={{ flex: 1 }} type={type} ref={ref => { setCameraRef(ref) }}>
                <View
                    style={{
                        height: 100,
                        width: width,
                        backgroundColor: 'transparent',
                        flexDirection: 'row',
                        position: "absolute",
                        bottom: 10,
                        alignSelf: 'center'
                    }}>
                    <TouchableOpacity
                        style={{
                            alignSelf: 'center',
                            marginHorizontal: '25%',
                        }}
                        onPress={() => {
                            setType(
                                type === Camera.Constants.Type.back
                                    ? Camera.Constants.Type.front
                                    : Camera.Constants.Type.back
                            );
                        }}>
                        <Icon
                            name='flip'
                            type='material'
                            size={40}
                            color='white'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            alignSelf: 'center',
                            marginBottom: 0
                        }}

                        onPress={async () => {
                            if (cameraRef) {
                                let photo = await cameraRef.takePictureAsync();
                                setCapturedPhoto(photo.uri)
                                setOpen(true)
                            }
                        }}>
                        <View style={{
                            borderWidth: 2,
                            borderRadius: 50,
                            borderColor: 'white',
                            height: 50,
                            width: 50,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        >
                            <View style={{
                                borderWidth: 2,
                                borderRadius: 50,
                                borderColor: 'white',
                                height: 40,
                                width: 40,
                                backgroundColor: 'white'
                            }} >
                            </View>
                        </View>
                    </TouchableOpacity>
                    {capturedPhoto &&
                        <Modal
                            animationType='slide'
                            transparent={false}
                            visible={open}
                            onRequestClose={() => {
                                setOpen(false)
                            }}
                        >
                            <Image
                                style={{ width: width, height: height - 70 }}
                                source={{ uri: capturedPhoto }}
                            />
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                height: 50
                            }}>
                                <Button
                                    mode='contained'
                                    onPress={() => {
                                        setOpen(false)
                                        setfunc(false)
                                    }}
                                    style={{ width: width / 2, height: 50 }}
                                >
                                    Subir
                            </Button>
                                <Button
                                    mode='outlined'
                                    onPress={() => {
                                        setOpen(false)
                                    }}
                                    style={{ width: width / 2, height: 50 }}
                                >
                                    Cancelar
                            </Button>
                            </View>
                        </Modal>
                    }
                </View>
            </Camera>
            {/* <View style={styles.container}>
            <Text>hola mundo</Text>
            <TouchableOpacity onPress={() => { setfunc(false) }}
                style={{ backgroundColor: 'green' }}>
                <Text>Hide</Text>
            </TouchableOpacity>
        </View> */}
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        backgroundColor: 'red'
    }
})