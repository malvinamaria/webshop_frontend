/* eslint-disable max-len */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable comma-dangle */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { user } from 'reducers/user';
import { API_URL } from 'utils/urls';
// import './Login.css';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [mode, setMode] = useState('login');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accessToken = useSelector((store) => store.user.accessToken);
  useEffect(() => {
    if (accessToken) {
      navigate('/');
    }
  }, [accessToken, navigate]);

  const onFormSubmit = (event) => {
    event.preventDefault();
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    };
    fetch(API_URL(mode), options)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log(data);
          dispatch(user.actions.setAccessToken(data.response.accessToken));
          dispatch(user.actions.setUsername(data.response.username));
          dispatch(user.actions.setUserId(data.response.id));
          dispatch(user.actions.setError(null));
        } else {
          dispatch(user.actions.setAccessToken(null));
          dispatch(user.actions.setUsername(null));
          dispatch(user.actions.setUserId(null));
          dispatch(user.actions.setError(data.response));
        }
      });
  };
  return (
    <>
      {/* <label htmlFor="register">Register</label>
      <input
        type="radio"
        id="register"
        checked={mode === 'register'}
        onChange={() => setMode('register')}
      />
      <label htmlFor="login">Login</label>
      <input
        type="radio"
        id="login"
        checked={mode === 'login'}
        onChange={() => setMode('login')}
      />
      <form onSubmit={onFormSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form> */}
      ////////////////////////////////////////////////////
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            // src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            src="https://tailwindui.com/img/flags/flag-canada.svg"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        {/* <p className="mt-10 text-center text-sm text-gray-500">
          Not a member? <label htmlFor="register">Register</label>
          <input
            type="radio"
            id="register"
            checked={mode === 'register'}
            onChange={() => setMode('register')}
          />
        </p>
        <p className="mt-10 text-center text-sm text-gray-500">
          Already a member? <label htmlFor="register">Login</label>
          <input
            type="radio"
            id="register"
            checked={mode === 'register'}
            onChange={() => setMode('register')}
          />
        </p> */}
        <p className="mt-10 text-center text-sm text-gray-500">
          <label
            className="block text-sm font-medium leading-6 text-gray-900"
            htmlFor="register"
          >
            Register
          </label>
          <input
            type="radio"
            id="register"
            checked={mode === 'register'}
            onChange={() => setMode('register')}
            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
        </p>
        <p className="mt-10 text-center text-sm text-gray-500">
          <label
            className="block text-sm font-medium leading-6 text-gray-900"
            htmlFor="login"
          >
            Login
          </label>
          <input
            type="radio"
            id="login"
            checked={mode === 'login'}
            onChange={() => setMode('login')}
            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
        </p>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            onSubmit={onFormSubmit}
            className="space-y-6"
            // action="#"
            // method="POST"
          >
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  type="text"
                  autoComplete="username"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  // autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
