import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const FeatureCard = () => {
  return (
    <View style={styles.infoTable}>
      <View style={{padding: 10}}>
        <Image
          source={{
            uri: '/Users/imac/Documents/alfiDev/fubol/assets/images/ramen.png',
          }}
          style={{width: 50, height: 50, borderRadius: 10, marginLeft: 280}}
        />
        <Text style={styles.imageText}>
          Asian white featured noodle with extra seafood
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 5,
          }}>
          <Text style={styles.imageText2}>🙎🏻‍♂️ Name User</Text>
          <Text style={styles.imageText2}>20 min</Text>
        </View>
      </View>
    </View>
  );
};
styles = StyleSheet.create({
  infoTable: {
    width: 357,
    height: 180,
    backgroundColor: 'rgba(116, 185, 190, 1)',
    borderRadius: 10,
    marginTop: 10,
  },
  imageText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 50,
  },
  imageText2: {
    color: 'white',
    fontSize: 12,
    opacity: 0.6,
  },
});

export default FeatureCard;
