import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import { connect } from 'react-redux'

import { setInitialPoint } from '../../../redux/actions'

const Point = ({point, setInitialPoint}) => {
  const navigation = useNavigation()

  const setPoint = (point) => {
    setInitialPoint(point)
    navigation.navigate('MAP')
  }

  return (
      <TouchableOpacity style={styles.container} onPress={() => setPoint(point)}>
        <Text style={styles.title}>
          Coords: {point.latitude}, {point.longitude}
        </Text>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: Dimensions.get('screen').width - 40,
    backgroundColor: '#ff3200',
    alignSelf: 'center',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: '#fff',
    fontWeight: '700',
    textTransform: 'uppercase'
  }
})

const mapDispatchToProps = {
  setInitialPoint
}
export default connect(null, mapDispatchToProps)(Point)