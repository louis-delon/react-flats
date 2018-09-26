import React, {Component} from 'react'
import SimpleMap from './google_map_react'
import FlatList from './flat_list'
import flats from '../../data/flat'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      flatList: flats,
      selectedFlat: flats[0],
      // center: {
      //   lng: flats[0].lng,
      //   lat: flats[0].lat
      // },
      // zoom: 11
    }
  }

  center() {
      return {
        lat: this.state.selectedFlat.lat,
        lng: this.state.selectedFlat.lng
      };
    }

  selectFlat = (index)=> {
    this.setState({selectedFlat: flats[index] });
  }
  // setCoordinates = (flat) => {
  //   this.setState({
  //     center: {
  //       lng: flat.lng,
  //       lat: flat.lat
  //     },
  //     zoom:11
  //   })
  // }

  render() {
    return (
      <div>
        <div className="flat-list">
          <FlatList
            flats= {this.state.flatList}
            selected={this.state.selectedFlat}
            selectFlat={this.selectFlat}
           />
        </div>
        <div className="map-container">
          <SimpleMap
            center={this.center()}
            zoom={12}
            selected={this.state.selectedFlat}
          />
        </div>
      </div>
    )
  }
}

export default App





