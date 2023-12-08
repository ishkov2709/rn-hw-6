import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import images from '../assets/images/images';
import AddPhoto from '../components/AddPhoto';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import PublicItem from '../components/PublicItem';
import { useEffect } from 'react';
import HeaderButton from '../components/HeaderButton';
import { useSelector } from 'react-redux';

const ProfileScreen = ({ navigation }) => {
  const user = useSelector(state => state.user);
  const posts = useSelector(state => state.posts);
  const setUserImage = image => {
    setUser(prevState => ({ ...prevState, image }));
  };

  // useFocusEffect(
  //   useCallback(() => {
  //     setIsProfile(true);

  //     return () => setIsProfile(false);
  //   })
  // );

  useEffect(() => {
    if (!user) navigation.navigate('Login');
  }, [user]);

  return (
    <View>
      <ImageBackground
        source={images.background}
        resizeMode="cover"
        style={styles.background}
      >
        <View style={posts.length > 0 ? styles.fullBox : styles.box}>
          <AddPhoto image={user?.image} setImage={setUserImage} />

          <TouchableOpacity style={styles.logoutBtn}>
            <HeaderButton />
          </TouchableOpacity>

          <Text style={styles.titie}>{user?.login}</Text>

          <FlatList
            data={posts}
            renderItem={({ item }) => (
              <PublicItem item={item} navigation={navigation} />
            )}
            keyExtractor={item => item.id}
          />
        </View>

        <StatusBar theme="auto" />
      </ImageBackground>
    </View>
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
  fullBox: {
    height: '100%',
    marginTop: 100,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#ffffff',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 92,
    paddingBottom: 126,
  },
  logoutBtn: {
    position: 'absolute',
    top: 22,
    right: 6,
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

export default ProfileScreen;
