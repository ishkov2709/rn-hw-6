import { useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { userDataContext } from '../context';

const HeaderButton = () => {
  const { setUser, setPublications } = useContext(userDataContext);

  const handleLogout = () => {
    setUser(null);
    setPublications([]);
  };

  return (
    <Text style={styles.button}>
      <SimpleLineIcons
        name="logout"
        size={24}
        color="#BDBDBD"
        onPress={handleLogout}
      />
    </Text>
  );
};

const styles = StyleSheet.create({
  button: {
    transform: [{ rotate: '180deg' }],
    marginRight: 10,
  },
});

export default HeaderButton;
