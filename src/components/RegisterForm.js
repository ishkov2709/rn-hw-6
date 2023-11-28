import { Formik } from 'formik';
import { useContext, useState } from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import registerSchema from '../schemas/registerSchema';
import { userDataContext } from '../context';

const RegisterForm = ({ image, setImage }) => {
  const [hide, setHide] = useState(true);
  const [onInputFocus, setOnInputFocus] = useState({
    login: false,
    email: false,
    password: false,
  });
  const { setUser } = useContext(userDataContext);

  return (
    <Formik
      initialValues={{ login: '', email: '', password: '' }}
      validationSchema={registerSchema}
      onSubmit={(values, { resetForm }) => {
        setUser({ ...values, image });
        resetForm();
        setImage(null);
      }}
    >
      {({ handleChange, handleSubmit, values, errors, touched }) => (
        <View style={styles.inputFields}>
          <KeyboardAvoidingView
            behavior={'padding'}
            keyboardVerticalOffset="320"
            style={styles.keyboard}
          >
            <TextInput
              style={
                onInputFocus.login ? styles.onFocusInput : styles.onBlurInput
              }
              onChangeText={handleChange('login')}
              placeholder="Логін"
              value={values.login}
              onFocus={() =>
                setOnInputFocus(prevState => ({ ...prevState, login: true }))
              }
              onBlur={() =>
                setOnInputFocus(prevState => ({ ...prevState, login: false }))
              }
            />
            {errors.login && touched.login ? (
              <Text style={styles.errorText}>{errors.login}</Text>
            ) : null}
            <TextInput
              keyboardType="email-address"
              style={
                onInputFocus.email ? styles.onFocusInput : styles.onBlurInput
              }
              placeholder="Адреса електронної пошти"
              value={values.email}
              onChangeText={handleChange('email')}
              onFocus={() =>
                setOnInputFocus(prevState => ({ ...prevState, email: true }))
              }
              onBlur={() =>
                setOnInputFocus(prevState => ({ ...prevState, email: false }))
              }
            />
            {errors.email && touched.email ? (
              <Text style={styles.errorText}>{errors.email}</Text>
            ) : null}

            <View>
              <TextInput
                style={
                  onInputFocus.password
                    ? styles.onFocusInput
                    : styles.onBlurInput
                }
                placeholder="Пароль"
                value={values.password}
                onChangeText={handleChange('password')}
                secureTextEntry={hide}
                onFocus={() =>
                  setOnInputFocus(prevState => ({
                    ...prevState,
                    password: true,
                  }))
                }
                onBlur={() =>
                  setOnInputFocus(prevState => ({
                    ...prevState,
                    password: false,
                  }))
                }
              />
              <Text style={styles.showSwitch} onPress={() => setHide(!hide)}>
                {hide ? 'Показати' : 'Приховати'}
              </Text>
              {errors.password && touched.password ? (
                <Text style={styles.errorText}>{errors.password}</Text>
              ) : null}
            </View>
          </KeyboardAvoidingView>
          <Text style={styles.btn} onPress={handleSubmit}>
            Зареєстуватися
          </Text>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  onBlurInput: {
    height: 50,
    borderWidth: 1,
    padding: 16,
    backgroundColor: '#F6F6F6',
    borderColor: '#E8E8E8',
    borderRadius: 8,
    fontFamily: 'Roboto',
    fontSize: 16,
  },
  onFocusInput: {
    height: 50,
    borderWidth: 1,
    padding: 16,
    backgroundColor: '#ffffff',
    borderColor: '#FF6C00',
    borderRadius: 8,
    fontFamily: 'Roboto',
    fontSize: 16,
  },
  showSwitch: {
    position: 'absolute',
    top: 15,
    right: 16,
    color: '#1B4371',
    fontSize: 16,
  },
  btn: {
    borderRadius: 100,
    backgroundColor: '#FF6C00',
    padding: 16,
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
  },
  keyboard: {
    gap: 16,
    marginBottom: 32,
  },
  errorText: {
    color: '#FC2C2C',
  },
});

export default RegisterForm;
