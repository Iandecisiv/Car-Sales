export const initialCar = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

  export const carReducer = (state = initialCar, action) => {
    switch (action.type){
        case "ADD_FEATURE":
            var car_price = state['car'].price + action['feature'].price;

            var new_state = {...state, additionalPrice: 0, car: {...state['car'], price: car_price, features: [...state['car'].features, action['feature']]}, 
            additionalFeatures: [
              { id: 1, name: 'V-6 engine', price: 1500 },
              { id: 2, name: 'Racing detail package', price: 1500 },
              { id: 3, name: 'Premium sound system', price: 500 },
              { id: 4, name: 'Rear spoiler', price: 250 }
            ]};
            return new_state;

        case "REMOVE_FEATURE":
                        var car_price = state['car'].price - action['feature'].price;

            var new_state = {...state, additionalPrice: 0, car: {...state['car'], price: car_price, features: state['car'].features.filter(feature => feature.id != action['feature'].id)}, 
            additionalFeatures: [
              { id: 1, name: 'V-6 engine', price: 1500 },
              { id: 2, name: 'Racing detail package', price: 1500 },
              { id: 3, name: 'Premium sound system', price: 500 },
              { id: 4, name: 'Rear spoiler', price: 250 }
            ]};
            return new_state;

    default:
          return state;
  }
  }