/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import placeholderImage from '../assets/orange.png';

export const Placeholder = () => {
  return (
    <div className="flex">
      <div className="mr-4 flex-shrink-0">
        <img
          className="h-16 w-16 border border-gray-300"
          src={placeholderImage}
          alt="Placeholder Image"
        />
      </div>
      <div>
        <h4 className="text-lg font-bold">Lorem ipsum</h4>
        <p className="mt-1">
          Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam
          expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.
        </p>
      </div>
      <div className="mr-4 flex-shrink-0">
        <img
          className="h-16 w-16 border border-gray-300"
          src={placeholderImage}
          alt="Placeholder Image"
        />
      </div>
      <div>
        <h4 className="text-lg font-bold">Lorem ipsum</h4>
        <p className="mt-1">
          Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam
          expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.
        </p>
      </div>
    </div>
  );
};
