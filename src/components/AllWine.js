/* eslint-disable comma-dangle */
/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export const AllWine = () => {
  const wineItem = useSelector((store) => store.wines.items); // store.wines.items is the path to the items array in the store
  console.log('wineItem:', wineItem);
  const dispatch = useDispatch(); // dispatch is a function we can use to send actions to the store
  console.log('dispatch:', dispatch);

  useEffect(() => {
    // useEffect hook is used to get stuff from the backend
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    fetch('http://localhost:8080/wines', options) // fetch is a function that sends a request to the API
      // fetch('https://wine-bottles-api.herokuapp.com/wines', options)
      .then((res) => res.json()) // if the request is successful, we get a response and we convert it to json
      .then(
        (data) => {
          // if the conversion to json is successful, we get the data inside the response
          console.log('Success:', data);
        } // dispatch the action with the data from the response
      )
      .catch();
  }, []);

  return <div>This is the Main component</div>;
};
