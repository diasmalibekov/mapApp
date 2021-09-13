import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const AddMapPointScreen = () => {
  return ( 
    <View style={styles.container}>
      <Text style={styles.title}>
				ADD MAP POINT SCREEN
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
		backgroundColor: '#000',
		justifyContent: 'center'
	},
  title: {
		alignSelf: 'center',
    color: '#fff'
  }
})

export default AddMapPointScreen