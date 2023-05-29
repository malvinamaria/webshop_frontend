/* eslint-disable react/jsx-closing-bracket-location */
// import React from 'react';
// import { Link } from 'react-router-dom';

// export const NotFoundPage = () => {
//   return (
//     <>
//       <h1>404 - Not Found!</h1>
//       <p>Sorry, the page you are looking for does not exist.</p>
//       <p>Try searching for something else.</p>
//       <input type="search" placeholder="Search..." />
//       <p>
//         <Link to="/">Go to Home </Link>
//       </p>
//       <p>
//         <Link to="/login">Go to Login </Link>
//       </p>
//     </>
//   );
// };
import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">404 - Not Found!</h1>
      <p className="text-lg mb-2">
        Sorry, the page you are looking for does not exist.
      </p>
      <p className="text-lg mb-4">Try searching for something else.</p>
      <input
        className="px-4 py-2 border border-gray-300 rounded-md mb-4"
        type="search"
        placeholder="Search..."
      />
      <p>
        <Link
          to="/"
          className="text-blue-500 hover:text-blue-700 underline mr-4"
        >
          Go to Home
        </Link>
        <Link
          to="/login"
          className="text-blue-500 hover:text-blue-700 underline"
        >
          Go to Login
        </Link>
      </p>
    </div>
  );
};
