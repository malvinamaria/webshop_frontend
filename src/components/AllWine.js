/* eslint-disable operator-linebreak */
/* eslint-disable spaced-comment */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
/* eslint-disable comma-dangle */
/* eslint-disable max-len */
// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { API_URL } from '../utils/urls';

// export const AllWine = () => {
//   const wineItem = useSelector((store) => store.wines.items); // store.wines.items is the path to the items array in the store
//   console.log('wineItem:', wineItem);
//   const dispatch = useDispatch(); // dispatch is a function we can use to send actions to the store
//   console.log('dispatch:', dispatch);

//   useEffect(() => {
//     // useEffect hook is used to get stuff from the backend
//     const options = {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     };
//     fetch(API_URL('wines'), options) // fetch is a function that sends a request to the API
//       // fetch('https://wine-bottles-api.herokuapp.com/wines', options)
//       .then((res) => res.json()) // if the request is successful, we get a response and we convert it to json
//       .then(
//         (data) => {
//           // if the conversion to json is successful, we get the data inside the response
//           console.log('Success:', data);
//         } // dispatch the action with the data from the response
//       )
//       .catch();
//   }, []);

//   return <div>This is the ALL WINE component</div>;
// };

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { API_URL } from '../utils/urls';
import { wineSlice } from '../reducers/wineSlice';

export const AllWine = () => {
  const wineItem = useSelector((store) => store.wineSlice.items);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(API_URL('wines'), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(wineSlice.actions.setWines(data.body));
        console.log(wineItem);
      });
  }, [dispatch, wineItem.length]);
  if (wineItem.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {/* wineItem.length > 0 && */}
      {wineItem.map((wine) => (
        <div key={wine._id}>
          <h3>{wine.name}</h3>
          <p>{wine.description}</p>
          <p>Price: ${wine.price}</p>
          <p>Country: {wine.country}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};
