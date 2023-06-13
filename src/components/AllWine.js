/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-closing-bracket-location */
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
// import { MyWines } from './MyWines';
import placeholderImage from '../assets/w.png';

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
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 id="products-heading" className="sr-only">
          Products
        </h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {/* <MyWines /> */}
          {wineItem.map((wine) => (
            <a key={wine._id} href={wine.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2">
                <img
                  src={placeholderImage}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                <h3>{wine.name}</h3>
                <p>${wine.price}</p>
              </div>
              <p className="mt-1 text-sm italic text-gray-500">
                {wine.description}
              </p>
              <div className="mt-8">
                <button
                  type="button"
                  href="#"
                  className="inline-flex rounded-md bg-black/10 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Add to cart
                </button>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { API_URL } from '../utils/urls';
// import { wineSlice } from '../reducers/wineSlice';
// import { MyWines } from './MyWines';

// export const AllWine = () => {
//   const wineItem = useSelector((store) => store.wineSlice.items);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     fetch(API_URL('wines'), {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         dispatch(wineSlice.actions.setWines(data.body));
//         console.log(wineItem);
//       });
//   }, [dispatch, wineItem.length]);
//   if (wineItem.length === 0) {
//     return <div>Loading...</div>;
//   }
//   return (
//     <div>
//       <MyWines />
//       {/* wineItem.length > 0 && */}
//       {wineItem.map((wine) => (
//         <div key={wine._id}>
//           <h3>{wine._id}</h3>
//           <h3>{wine.name}</h3>
//           <p>{wine.description}</p>
//           <p>Price: ${wine.price}</p>
//           <p>Country: {wine.country}</p>
//           <hr />
//         </div>
//       ))}
//     </div>
//   );
// };
