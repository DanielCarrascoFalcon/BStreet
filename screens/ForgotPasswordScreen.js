import React, { memo, useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { emailValidator } from '../core/utils';
import Background from '../components/Background';
import { Title } from 'react-native-paper';
import TextInput from '../components/TextInput';
import { theme } from '../core/theme';
import Button from '../components/Button';

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState({ value: '', error: '' });

  const _onSendPressed = () => {
    const emailError = emailValidator(email.value);

    if (emailError) {
      setEmail({ ...email, error: emailError });
      return;
    }

    navigation.navigate('LoginScreen');
  };

  return (
    <Background>
      <Image source={require('../assets/logo.png')} style={styles.image} />

      <Title style={{ color: theme.colors.primary }}>Restauración de Contraseña</Title>

      <TextInput
        label="Correo Electrónico"
        returnKeyType="done"
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <Button mode="contained" onPress={_onSendPressed} style={styles.button}>
        Enviar Correo
      </Button>

      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.navigate('LoginScreen')}
      >
        <Text style={styles.label}>← Volver</Text>
      </TouchableOpacity>
    </Background>
  );
};

const styles = StyleSheet.create({
  back: {
    width: '100%',
    marginTop: 12,
  },
  button: {
    marginTop: 12,
  },
  label: {
    color: theme.colors.secondary,
    width: '100%',
  },
  image: {
    width: 128,
    height: 128,
    marginBottom: 12,
  },
});

export default memo(ForgotPasswordScreen);
