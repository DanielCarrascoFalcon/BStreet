import React from 'react';
import { View, Image } from 'react-native';
import { Icon } from 'react-native-elements';

const CustomMarker = ({ type }) => {
    switch (type) {
    case '1':
        return (
            <View>
                <Image
                    source={require('../assets/icons/toiletv.png')}
                    style={{
                        width: 20,
                        height: 20,
                    }}
                >

                </Image>
            </View>
        );

    case '2':
        return (
            <View>
                <Image
                    source={require('../assets/icons/paraderog.png')}
                    style={{
                        width: 20,
                        height: 20,
                    }}
                >

                </Image>
            </View>
        );

    case '3':
        return (
            <View>
                <Image
                    source={require('../assets/icons/paraderor.png')}
                    style={{
                        width: 20,
                        height: 20,
                    }}
                >

                </Image>
            </View>
        );

    case '4':
        return (
            <View>
                <Image
                    source={require('../assets/icons/toiletr.png')}
                    style={{
                        width: 20,
                        height: 20,
                    }}
                >

                </Image>
            </View>
        );
    case '5':
        return (
            <View>
                <Icon
                    name='warning'
                    type='material'
                    size={20}
                    color='#DD2B0F'
                />

            </View>
        );
    case '6':
        return (
            <View>
                <Icon
                    name='error'
                    type='material'
                    size={20}
                    color='#F2E10C'
                />

            </View>
        );
    case '7':
        return (
            <View>
                <Icon
                    name='check-circle'
                    type='fontawesome'
                    size={20}
                    color='green'
                />

            </View>
        );

    default:
        return (
            <View>
                <Image
                    source={require('../assets/icons/paraderov.png')}
                    style={{
                        width: 20,
                        height: 20,
                    }}
                >

                </Image>
            </View>
        );
        break;
    }
};

export default CustomMarker;
