import React from 'react';
import {Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%',
  };

class MapContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {}
        };
    }

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

    componentDidUpdate(prevProps, prevState) {
        if(this.state.showingInfoWindow && prevState.showingInfoWindow) {
            this.setState({
                showingInfoWindow:false
            });
        }
    }

    render() {
        let map;
        if(this.props.employee) {
            let latLng = this.props.employee.lastLocation.split(',')
            map = (
                <Map
                google={this.props.google}
                zoom={12}
                style={mapStyles}
                initialCenter={{ lat: latLng[0], lng: latLng[1]}}
                >
                    <Marker 
                    position={{ lat: latLng[0], lng: latLng[1]}} 
                    onClick={this.onMarkerClick} 
                    name={this.props.employee.fullName}/>
                    <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                    >
                        <div className='info-window'>
                            <div className='img-container'>
                                <img src={this.props.employee.avatarUrl} alt={this.state.selectedPlace.name} />
                            </div>
                            <div className='description-container'>
                                <div className='pad_lr_1 mar_tb_05 ln_2'>
                                    <h2 className='mar_0'>{this.state.selectedPlace.name}</h2>
                                    <a href={`https://www.google.com/maps/search/?api=1&query=${this.props.employee.lastLocation}`} target='_blank' rel="noopener noreferrer">Ver en google maps</a>
                                </div>
                            </div>
                        </div>
                    </InfoWindow>

                </Map>
            );
        }else{
            map = <div>N/A</div>
        }

        return (<div>{map}</div>)
    };
}
export default GoogleApiWrapper({ apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY})(MapContainer);