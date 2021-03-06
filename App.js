//import React from "react";
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from "react-native";
import { MapView, Constants, Location, Permissions } from "expo";
import MapViewDirections from './src/MapViewDirections';
import getDirections from 'react-native-google-maps-directions';

//coordinates for KPU Civic Plaza
const KLATITUDE = 49.1908
const KLONGITUDE = -122.8489;

const GOOGLE_MAPS_APIKEY = 'AIzaSyCYvMpmVhFc0ydILEuXGJNYNGFnBoKPCL8';

export default class App extends React.Component {
	

	
	  handleGetDirections = () => {
    const data = {
       source: {
        latitude: this.state.location.coords.latitude, 
		longitude: this.state.location.coords.longitude, 
      },
      destination: {
        latitude: KLATITUDE,
        longitude: KLONGITUDE
      },
      
      params: [
        {
          key: "travelmode",
          value: "walking"        // may be "walking", "bicycling" or "transit" as well
        },
        {
          key: "dir_action",
          value: "navigate"       // this instantly initializes navigation using the given travel mode 
        }
      ]
    }
 
    getDirections(data)
  }
	
	
	state = {
	location: { coords: { //latitude: 49.131794,
			latitude: KLATITUDE,
          //longitude: -122.870110,
		  longitude: KLONGITUDE,
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
		//latitude: KLATITUDE,
		  //longitude: KLONGITUDE,
		latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}
      >
	  
	  
	  			<View style={Styles.container}	>
				<Button onPress={this.handleGetDirections} title="Directions" />
			</View>
	  
	  
	  <MapView.Marker
	  coordinate={this.state.location.coords
		 // {latitude: LATITUDE,
		  //longitude: LONGITUDE,}
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
	  <MapView.Marker
	  coordinate={//this.state.location.coords
		 {latitude: KLATITUDE,
		  longitude: KLONGITUDE,}
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
	  title="KPU Civic Plaza Campus"
		pinColor='#551A8B'
	  />
	    
		  					<MapViewDirections
  						origin={{ 
		latitude: KLATITUDE,
		  longitude: KLONGITUDE,
		latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}
  						destination={this.state.location.coords}
  						apikey={GOOGLE_MAPS_APIKEY}
  						strokeWidth={3}
  						strokeColor="hotpink"
  						onReady={this.onReady}
  						onError={this.onError}
  					/>
		





		
		
	  </MapView>
	  
    );
  }
}



const Styles = StyleSheet.create({
  container: {
					
  }
 });
  
