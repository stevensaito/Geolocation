//import React from "react";
import React, { Component } from 'react';
import { StyleSheet, Text, View } from "react-native";
import { MapView, Constants, Location, Permissions } from "expo";
import Geocoder from 'react-native-geocoding';

export default class App extends React.Component {
	
	
	
	state = {
	location: { coords: { latitude: 49.131794,
          longitude: -122.870110,
          latitudeDelta: 0.0922,
	longitudeDelta: 0.0421 } },
	locationResult: null,
	//location: {coords: { latitude: 37.78825, longitude: -122.4324}},
	};
	
	
	componentDidMount() {
    this._getLocationAsync();
  }
	/*
	  _getLocationAsync = async () => {
   let { status } = await Permissions.askAsync(Permissions.LOCATION);


   let location = await Location.getCurrentPositionAsync({});
   this.setState({ locationResult: JSON.stringify(location), location, });
 };
 */

   _getLocationAsync = async () => {
   let { status } = await Permissions.askAsync(Permissions.LOCATION);


   let location = await Location.getCurrentPositionAsync({});
   this.setState({ locationResult: JSON.stringify(location), location, });
 };
 
  render() {
    return (
      <MapView
        style={{
          flex: 1
        }}
		/*
        initialRegion={{
          latitude: 49.131794,
          longitude: -122.870110,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}*/
		region={{ 
		latitude: this.state.location.coords.latitude, 
		longitude: this.state.location.coords.longitude, 
		latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}
      >
	  
	  <MapView.Marker
	  coordinate={this.state.location.coords
		  ///////Static location works
		  /*
		  {{
		  latitude: 49.131794,
          longitude: -122.870110,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
		  }}
		  */
			}
	  title="Your Location"
	  />
	  
  
  
	  </MapView>
	  
    );
  }
}
*/
