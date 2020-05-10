import React from 'react';

const Photo = props => (
  <div>
    <img src={props.image.url} alt={props.image.description} />
  </div>
);

export default Photo;
