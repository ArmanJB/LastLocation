import React from 'react';
import {Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%',
  };

class MapContainer extends React.Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {}
    };

    onMarkerClick = (props, marker, e) =>
        this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
        });
    
    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
            showingInfoWindow: false,
            activeMarker: null
            });
        }
    };

    render() {
        return (
            <Map
              google={this.props.google}
              zoom={12}
              style={mapStyles}
              initialCenter={{ lat: 12.100927, lng: -86.4269907}}
              >
                <Marker 
                position={{ lat: 12.100927, lng: -86.4269907}} 
                onClick={this.onMarkerClick} 
                name={'Joshua Cajina'}/>
                <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}
                onClose={this.onClose}
                >
                    <div className='info-window'>
                        <div className='img-container'>
                            <img src='https://api.adorable.io/avatars/256/josh@adorable.io.png' alt={this.state.selectedPlace.name} />
                        </div>
                        <div className='description-container'>
                            <div className='pad_lr_1 mar_tb_05 ln_2'>
                                <h2 className='mar_0'>{this.state.selectedPlace.name}</h2>
                                <a href='https://www.google.com/maps/search/?api=1&query=12.100927,-86.4269907' target='_blank' rel="noopener noreferrer">Ver en google maps</a>
                            </div>
                        </div>
                    </div>
                </InfoWindow>

            </Map>
        )
    };
}

export default GoogleApiWrapper({ apiKey: 'AIzaSyA3YH3gDsy4UWx5gyemarXW76tXV-G0uM8'})(MapContainer);