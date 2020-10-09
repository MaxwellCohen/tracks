import React, { useContext } from 'react';
import {  StyleSheet } from 'react-native';
import {Text } from 'react-native-elements'
import { Context as TrackContext } from '../context/TrackContext';
import MapView, { Polyline, Circle } from 'react-native-maps';

const TrackDetailScreen = ({navigation}) => {
  const { state } = useContext(TrackContext);
  const _id = navigation.getParam('_id');

  const track = state.find((t) => t._id === _id );
  const intilialCoords = track.locations[0].coords;
  console.log(track)

  return (
    <>
      <Text h3>{track.name}</Text>
      <MapView
      style={styles.map}
      initialRegion={{
        ...intilialCoords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Polyline coordinates={track.locations.map(({coords})=> coords)} />
    </MapView>
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 250,
  },
});

export default TrackDetailScreen;
