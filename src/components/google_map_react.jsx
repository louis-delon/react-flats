import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {


  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCmVclghQMSZS0kb19YLihezKkVMpoFwNs" }}
          center={this.props.center}
          zoom={this.props.zoom}
        >
          <Marker
            lat= {this.props.selected.lat}
            lng= {this.props.selected.lng}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;

