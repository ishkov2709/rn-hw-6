import { useNavigation, useRoute } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MapScreen = () => {
  const navigation = useNavigation();

  const {
    params: { location },
  } = useRoute();
  return (
    <View style={styles.wrapper}>
      <MapView
        style={styles.map}
        region={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        mapType="standard"
      >
        <Marker
          title="I am here"
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
          description="Hello"
        />
      </MapView>

      <Text style={styles.backBtn} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={32} color="#000" />
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  backBtn: {
    position: 'absolute',
    top: 16,
    left: 16,
  },
});

export default MapScreen;
