const url = 'http://localhost:4000';

const store = JSON.parse(localStorage.getItem('login'))

const loggedIn = () => { return store && store.login }

const jwt = store.token

export {url, loggedIn, jwt};
