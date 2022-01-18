import React from 'react';
import GoogleMapReact from 'google-map-react';
import { useMediaQuery } from '@material-ui/core';
import useStyles from './styles'


const Map = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');
    const coordinates = { lat:27.4712, lng: 89.6339 };
    return(
        <div className={classes.mapContainer}>
            <GoogleMapReact bootstrapURLKeys={{ key: 'AIzaSyDiIE-UV8F2TmdSDCvL_0syvqdhX4YUryc' }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50,50,50,50]}
                options={''}
                onChange={''}
                onChildClick={''}
            >

            </GoogleMapReact>
        </div>
    );
}

export default Map;