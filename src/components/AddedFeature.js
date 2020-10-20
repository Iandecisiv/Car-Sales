import React from 'react';

const AddedFeature = props => {

        const removeFeatureHandler = e => {
      e.preventDefault();
props.removeFeature(props.car, props.feature);
    };
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={removeFeatureHandler} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
