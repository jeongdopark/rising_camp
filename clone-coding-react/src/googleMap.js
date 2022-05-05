import { useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import './index.css'

export default function GoogleMapTest() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey : "AIzaSyA6QVkzVBwRevPe5hDkR_PGiNYndEz8NGc",
    });

    if(!isLoaded) return(<div>Loading...</div>)

    return <Map/>;
}


function Map(){
    const center = useMemo(() => ({lat: 37.566554, lng: 126.978546}), [])
    return (
            <GoogleMap zoom={15} center={center} mapContainerClassName="map-container">
                <Marker position={{lat: 37.566554, lng: 126.978546}}/>
            </GoogleMap>
    );
}

            
