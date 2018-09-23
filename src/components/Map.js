import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-markercluster';



export default class WorldMap extends Component {
  state = {
    lat: 31,
    lng: -99,
    zoom: 6,
  }


  render() {
    let markers = this.props.markers.map((point) => {
      return (
        <Marker key={point.key} position={point.position}>
          <Popup>
            Position: {point.position}
          </Popup>
        </Marker>
      )
    })

    const position = [this.state.lat, this.state.lng]
    return (
      <Map center={position} zoom={this.state.zoom} maxZoom={18} className="z-depth-2">
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {this.props.clusterData ?
          <MarkerClusterGroup showCoverageOnHover={false}>
            {markers}
          </MarkerClusterGroup>
          :
          markers}
      </Map>
    )
  }
}
