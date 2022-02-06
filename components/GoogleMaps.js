import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import settings from "../settings/settings-development.js"

const defaultCenter = { lat: 35.720943, lng: -0.5911253 };

const defaultOptions = { scrollwheel: true };

const RegularMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={ defaultCenter }
      defaultOptions={ defaultOptions }
    >
      <Marker position={ defaultCenter } />
    </GoogleMap>
  ))
);

const loadingElementStyle = { height: '100%', width: '100%' };
const containerElementStyle = { height: '500px', width: '100%' };
const mapElementStyle = { height: '100%' };

export default function GoogleMaps() {
  const key = settings.googleMaps.apiKey
  return (
    <RegularMap
      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${key}`}
      loadingElement={<div style={ loadingElementStyle } />}
      containerElement={<div style={ containerElementStyle } />}
      mapElement={<div style={ mapElementStyle } />}
    />
  );
}