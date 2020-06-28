import React, { memo } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';
import Background from '../components/Background';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';
import { theme } from '../core/theme';

const HomeScreen = ({ navigation }) => (
  <Background>
    <Image source={require('../assets/logo2.png')} style={styles.image} />

    <Title style={{ color: theme.colors.primary }} >BStreet</Title>

    <Paragraph>
      La mejor forma de desplazarse por la ciudad
        </Paragraph>
    <Button mode="contained" onPress={() => navigation.navigate('LoginScreen')}>
      Ingresar
        </Button>
    <Button
      mode="outlined"
      onPress={() => navigation.navigate('RegisterScreen')}
    >
      Registrarse
        </Button>
  </Background>
);

const styles = StyleSheet.create({
  image: {
    width: 128,
    height: 128,
    marginBottom: 12,
  },
});

export default memo(HomeScreen);
