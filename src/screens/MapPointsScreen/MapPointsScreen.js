import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, FlatList } from 'react-native'
import { connect } from 'react-redux'
import Point from './components/Point'
import { setInitialPoint } from '../../redux/actions'

const MapPointsScreen = ({navigation, points, initialPoint}) => {
  return ( 
    <View style={styles.container}>
      <FlatList 
        data={points}
        renderItem={ ({item}) => {
          return <Point point={item}/>
        }}
        keyExtractor={item => item.id}
        style={styles.list}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          onPress={() => {navigation.navigate('Add Map Point')}}
          style={styles.button}
        >
          <Text style={styles.buttonTitle}>Добавить точку</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
	},
  title: {
		alignSelf: 'center',
    color: '#fff'
  },
  buttonContainer: {
    flex: 1, 
    justifyContent: 'flex-end'
  },
  button: {
    marginTop: 10,
    backgroundColor: '#ff3200',
    width: Dimensions.get('screen').width,
    height: 40,
    justifyContent: 'center'
  },
  buttonTitle: {
    color: '#fff',
    alignSelf: 'center',
    fontWeight: '700',
    textTransform: 'uppercase'
  },
  list: {
    marginBottom: 40
  }
})

const mapStateToProps = state => {
  return {
    points: state.points.points,
    initialPoint: state.points.initialPoint 
  }
}

const mapDispatchToProps = {
  setInitialPoint
}

export default connect(mapStateToProps, mapDispatchToProps)(MapPointsScreen)