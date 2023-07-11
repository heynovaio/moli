import React from 'react';
import {mapMarker} from '../styles/pages/contact.module.scss'

const Marker = ({ children }) => {
  return (
    <div className={mapMarker}>
      {children}
    </div>
  )};

export default Marker;