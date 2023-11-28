import {
  ImageBackground,
  Keyboard,
  StatusBar,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import images from '../assets/images/images';
import RegisterForm from '../components/RegisterForm';
import AddPhoto from '../components/AddPhoto';
import { useState } from 'react';

const RegistrationScreen = ({ navigation }) => {
  const [image, setImage] = useState(null);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <ImageBackground
          source={images.background}
          resizeMode="cover"
          style={styles.background}
        >
          <View style={styles.box}>
            <AddPhoto image={image} setImage={setImage} />

            <Text style={styles.titie}>Реєстрація</Text>

            <RegisterForm image={image} setImage={setImage} />

            <Text
              style={styles.toLoginBtn}
              onPress={() => navigation.navigate('Login')}
            >
              Вже є акаунт? Увійти
            </Text>
          </View>

          <StatusBar theme="auto" />
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
  },
  box: {
    marginTop: 'auto',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#ffffff',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 92,
  },
  titie: {
    alignSelf: 'center',
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
    marginBottom: 32,
  },
  toLoginBtn: {
    color: '#1B4371',
    fontSize: 16,
    marginTop: 16,
    marginBottom: 80,
    textAlign: 'center',
  },
});

export default RegistrationScreen;
