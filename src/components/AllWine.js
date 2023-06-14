/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable operator-linebreak */
/* eslint-disable spaced-comment */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
/* eslint-disable comma-dangle */
/* eslint-disable max-len */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../reducers/counterSlice';

// import { MyWines } from './MyWines';
import placeholderImage from '../assets/w.png';
import placeholderImage1 from '../assets/w1.png';
import placeholderImage2 from '../assets/w2.png';
import placeholderImage4 from '../assets/id_1.png';
import placeholderImage5 from '../assets/id_2.png';
import placeholderImage6 from '../assets/id_3.png';

const wineItem = [
  {
    id: 1,
    name: 'Il Grappolo',
    href: '#',
    price: '133',
    description:
      'The nose is a bit shy but eventually reveals underbrush, red berry and a toasted note.',
    src: placeholderImage,
  },
  {
    id: 2,
    name: 'Hestan',
    href: '#',
    price: '64',
    description:
      'Brambly and herbal, this wine shows bright acidity underlying a full-bodied, incoherently ripe palate of tar, toffee and rich cola notes.',
    src: placeholderImage1,
  },
  {
    id: 3,
    name: 'Ehret',
    href: '#',
    price: '32',
    description:
      'This Cabernet Sauvignon-dominant blend boasts leather, tobacco leaf and black pepper flavors.',
    src: placeholderImage2,
  },
  {
    id: 4,
    name: 'Château de la Chaize',
    href: '#',
    price: '75',
    description:
      'This wine is ripe and fruity, with a soft texture and a touch of tannin.',
    src: placeholderImage4,
  },
  {
    id: 5,
    name: 'Rocca di Castagnoli',
    href: '#',
    price: '204',
    description:
      'Black-skinned berry, violet and underbrush aromas lead the nose.',
    src: placeholderImage4,
  },
  {
    id: 6,
    name: 'EOS',
    href: '#',
    price: '185',
    description:
      'ans of stickies may find pleasure in this bottling, but it is tremendously sweet and oily.',
    src: placeholderImage5,
  },
  {
    id: 7,
    name: 'Leaping Horse',
    href: '#',
    price: '75',
    description:
      'This medium-bodied wine has more earthy and floral flavors than straightforward fruit.',
    src: placeholderImage6,
  },
  {
    id: 8,
    name: 'Kitchen Sink',
    href: '#',
    price: '204',
    description:
      'This wine is rThis wine is dry and substantial, emphasizing earthy, savory flavors over fruity ones',
    src: placeholderImage1,
  },
  {
    id: 9,
    name: 'Kuleto Estate',
    href: '#',
    price: '185',
    description:
      'This wine is dry and substantial, emphasizing earthy, savory flavors over fruity onesThis is from a hillside estate vineyard and is entirely barrel fermented.',
    src: placeholderImage4,
  },
  {
    id: 10,
    name: 'Martinez & Martinez',
    href: '#',
    price: '75',
    description:
      'Aromas of ripe (leaning almost overripe) apple, melon and orange peel are followed by medium-sweet fruit flavors. It needs more acid to stand it up.',
    src: placeholderImage,
  },
  {
    id: 11,
    name: 'Mazzocco',
    href: '#',
    price: '204',
    description:
      'This wine is dry and substantial, emphasizing earthy, savory flavors over fruity onesThis is from a hillside estate vineyard and is entirely barrel fermented.',
    src: placeholderImage1,
  },
  {
    id: 12,
    name: 'Ironstone',
    href: '#',
    price: '185',
    description:
      'Strong wood smoke and grilled meat aromas lead to equally assertive oak and dried herb flavors.',
    src: placeholderImage2,
  },
  // More products...
];

export const AllWine = () => {
  const counter = useSelector((state) => state.counter);
  console.log(counter);
  const dispatch = useDispatch();
  console.log(dispatch);
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
                  // src={placeholderImage5}
                  src={wine.src}
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
