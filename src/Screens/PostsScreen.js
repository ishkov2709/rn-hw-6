import { useContext, useEffect } from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import HeaderButton from '../components/HeaderButton';
import { userDataContext } from '../context';
import Entypo from 'react-native-vector-icons/Entypo';
import PublicItem from '../components/PublicItem';

const PostsScreen = ({ navigation }) => {
  const { user, publications } = useContext(userDataContext);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderButton />,
    });
  }, [navigation]);

  return (
    <View style={styles.mainWrapper}>
      {user && (
        <View style={styles.userContentBox}>
          {user?.image ? (
            <Image source={{ uri: user.image }} style={styles.image} />
          ) : (
            <Entypo name="user" size={60} />
          )}
          <View>
            <Text style={styles.userLogin}>{user.login}</Text>
            <Text style={styles.userEmail}>{user.email}</Text>
          </View>
        </View>
      )}
      {publications.length > 0 && (
        <SafeAreaView style={styles.postList}>
          <FlatList
            data={publications}
            renderItem={({ item }) => (
              <PublicItem item={item} navigation={navigation} />
            )}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    backgroundColor: '#ffffff',
    height: '100%',
    paddingVertical: 32,
    paddingHorizontal: 16,
  },
  userContentBox: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    marginBottom: 32,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },
  userLogin: {
    fontWeight: '700',
    fontSize: 13,
    color: '#212121',
  },
  userEmail: {
    fontSize: 11,
    color: '#212121CC',
  },
  postList: {
    marginBottom: 32,
  },
});

export default PostsScreen;
