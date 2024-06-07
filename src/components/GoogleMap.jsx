// '../components/GoogleMap.js'
import PropTypes from "prop-types";
import GoogleMapReact from 'google-map-react';

export const GoogleMap = ({
    lat,
    lng,
    zoom,
    options,
}) => {
    // GoogleMap component implementation
};

GoogleMap.propTypes = {
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
    zoom: PropTypes.number,
    options: PropTypes.shape({}) 
}

GoogleMap.defaultProps = {
    lat: -3.745,
    lng: -38.523,
    zoom: 12,
};

export default GoogleMap; // Also export as default
