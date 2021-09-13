import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import  MapView from 'react-native-maps';
import { connect } from 'react-redux';

const MapScreen = ({points, initialPoint}) => {

  return ( 
    <View style={styles.container}>
			<MapView
				style={styles.map}
    		region={{
					latitude: initialPoint.latitude,
					longitude: initialPoint.longitude,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421,
    		}}
			>
					{points.map((val, index) => {
						return (<MapView.Marker 
											coordinate={{
												latitude: val.latitude,
												longitude: val.longitude
											}}
											key={index}
										/>)
					})}
			</MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
		flex: 1,
		justifyContent: 'center'
	},
  title: {
		alignSelf: 'center',
		color: '#fff'
  },
	map: {
		flex: 1
	}
})

const mapStateToProps = state => {
	return {
		points: state.points.points,
		initialPoint: state.points.initialPoint
	}
}

export default connect(mapStateToProps, null)(MapScreen)