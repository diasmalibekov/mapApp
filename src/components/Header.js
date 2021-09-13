import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StackActions } from '@react-navigation/native'
import {View, Text, StyleSheet, Image, TouchableOpacity, Dimensions} from 'react-native'

const Header = ({title, back}) => {
  const navigation = useNavigation()
  const popAction = StackActions.pop(1)
  return (
    <View style={styles.container}>
      { back && <TouchableOpacity style={styles.backContainer} onPress={() => navigation.dispatch(popAction)}>
        <Image source={require('../assets/icons/back-button.png')} style={styles.back} t/>
      </TouchableOpacity> }
      <Text style={styles.title}>{ title }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#ff3200',
    width: Dimensions.get('screen').width,
    height: 45,
    borderTopWidth: 1,
    borderColor: '#ff2000',
    justifyContent: 'center'
  },
  backContainer: {
    padding: 5,
    position: 'absolute',
    left: 10,
    top: 7
  },
  back: {
    width: 18,
    height: 18,
    tintColor: '#fff'
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '800',
    alignSelf: 'center',
    textTransform: 'uppercase'
  }
})

export default Header