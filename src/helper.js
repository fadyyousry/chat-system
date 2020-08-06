import ActionCable from 'action-cable-react-jwt';

const url = 'http://localhost:4000';

const store = JSON.parse(localStorage.getItem('login'))

const loggedIn = () => { return store && store.login }

const jwt = () => {if (store) return store.token;}

const userId = () => {if (store) return store.current_user_id;}

let Consumer = {};
Consumer.cable = ActionCable.createConsumer(url + "/cable", jwt());

export {url, loggedIn, jwt, userId, Consumer};
