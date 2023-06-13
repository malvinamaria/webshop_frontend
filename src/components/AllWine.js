/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable operator-linebreak */
/* eslint-disable spaced-comment */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
/* eslint-disable comma-dangle */
/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { API_URL } from '../utils/urls';
import { wineSlice } from '../reducers/wineSlice';
import { increment } from '../reducers/counterSlice';
// import { MyWines } from './MyWines';
import placeholderImage from '../assets/w.png';

export const AllWine = () => {
  const wineItem = useSelector((store) => store.wineSlice.items);
  const counter = useSelector((state) => state.counter);
  console.log(counter);
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
              {/* <div>COUNTER</div>
              <div>{counter}</div> */}
              <div className="mt-8">
                <button
                  type="button"
                  href="#"
                  onClick={() => dispatch(increment())}
                  className="inline-flex rounded-md bg-black/10 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Add to cart
                </button>
                {/* <button
                  type="button"
                  href="#"
                  onClick={() => dispatch(decrement())}
                  className="inline-flex rounded-md bg-black/10 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Remove from cart
                </button> */}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
