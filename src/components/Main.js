/* eslint-disable no-undef */
/* eslint-disable comma-dangle */
/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Footer } from 'components/Footer';
import { Header1 } from 'components/Header1/Header1';
// import { Placeholder } from './Placeholder';
import { Products } from './Products';
import { API_URL } from '../utils/urls';

export const Main = () => {
  // establish connection to the store items
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
    fetch(API_URL('wines'), options) // fetch is a function that sends a request to the API
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

  return (
    <>
      <div>This is the Main component</div>
      <Header1 />
      <Products />
      {/* <Placeholder /> */}
      <Footer />
    </>
  );
};
