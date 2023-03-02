import { View, Text, StyleSheet ,Image} from 'react-native'
import React from 'react'

const FeatureCard = () => {
  return (
    <View style={styles.infoTable}>
      <Image
          source={{ uri: '/Users/imac/Documents/alfiDev/fubol/assets/images/featuredNoodle.png' }}
          style={{ height: 180, borderRadius: 10,}}
        />
        <View style={styles.imageTextContainer}>
            <Text style={styles.imageText}>Asian white featured noodle with extra seafood</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 5}}>
                <Text style={styles.imageText2}>🙎🏻‍♂️ Name User</Text>
                <Text style={styles.imageText2}>20 min</Text>
            </View>
        </View>
    </View>
  )
}
styles = StyleSheet.create({
    infoTable: {
        height: 180,
        backgroundColor: 'rgba(116, 185, 190, 1)',
        borderRadius: 10,
        marginTop: 10,
    },
    imageTextContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 10,
      },
      imageText: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
      },
      imageText2:{
        color: 'white',
        fontSize: 12,
        opacity: 0.7
      }
})

export default FeatureCard