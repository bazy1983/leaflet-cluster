import React, { Component } from 'react';
import './App.css';

//components
// import CustomComponent from "./components/MultiMarkMap";
import WorldMap from "./components/Map";
// import BasicEGOne from "./components/ExampleMap";
import Panel from "./components/Panel"
import Loader from "./components/Loader"

//api
import api from "./api/api";


class App extends Component {
  state = {
    btnText: "Add Markers",
    isClusterized : false,
    loading: false,
    markers: [],
    provideMarkers: true,
    showSettings: false
  }

  rounded = (param) => {
    return Math.round(param * 100) / 100
  }

  toggleSettings = () => {this.setState({showSettings : !this.state.showSettings})}

    landPointsOnMap = () => {
    if (this.state.provideMarkers) {
      this.setState({loading: true})
      api.getPoints()
        .then((points) => {
          let tempMarkers = [];
          points.data.features.forEach((el, i) => {
            let marker = {
              key: `marker${i + 1}`,
              position: [this.rounded(el.geometry.coordinates[1]), this.rounded(el.geometry.coordinates[0])],
              children: `Location ${this.rounded(el.geometry.coordinates[1])},${this.rounded(el.geometry.coordinates[0])}`
            }
            tempMarkers.push(marker)
          })
          this.setState({ markers: tempMarkers, provideMarkers: !this.state.provideMarkers, btnText: "Remove Markers", loading:false})
        })
    } else {
      this.setState({ markers: [], provideMarkers: !this.state.provideMarkers, btnText: "Add Markers" })
    }
  }

  clusterizeMarkers = (e) =>{
    this.setState({isClusterized: e.target.checked})
  }

  render() {
    return (
      <div className="App">
        <WorldMap markers={this.state.markers} clusterData={this.state.isClusterized}/>
        {this.state.loading? <Loader/>:null}
        <Panel 
        markers={this.landPointsOnMap} 
        text={this.state.btnText} 
        showSettings = {this.state.showSettings}
        toggleSettings = {this.toggleSettings}
        clusterize={this.clusterizeMarkers}/>
      </div>
    );
  }
}

export default App;
