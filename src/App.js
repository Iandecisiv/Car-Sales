import React, {useReducer} from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import {initialCar, carReducer} from "./reducers/carReducer";

const App = () => {

  const [state, dispatch] = useReducer(carReducer, initialCar);
  const addFeature = (meh, meh2) => dispatch({ type: "ADD_FEATURE", car: meh, feature: meh2});
   const removeFeature = (meh, meh2) => dispatch({ type: "REMOVE_FEATURE", car: meh, feature: meh2});

  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} removeFeature={removeFeature}/>
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={state.additionalFeatures} addFeature={addFeature} car={state.car}/>
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

export default App;
