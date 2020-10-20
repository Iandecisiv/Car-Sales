import React from 'react';

const AdditionalFeature = props => {

      const addFeatureHandler = e => {
      e.preventDefault();
props.addFeature(props.car, props.feature);
    };
  
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={addFeatureHandler} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
