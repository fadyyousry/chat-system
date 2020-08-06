import React from 'react';

const url = 'http://localhost:4000';

const loggedIn = () => {
  if (localStorage.getItem("login") === null) return false;
  return JSON.parse(localStorage.getItem('login')).login;
}

export {url, loggedIn};
