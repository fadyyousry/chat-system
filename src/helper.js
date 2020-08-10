import ActionCable from 'action-cable-react-jwt';
import auth from './auth';

const url = 'https://free4chat-api.herokuapp.com';

let Consumer = {};
Consumer.cable = ActionCable.createConsumer(url + "/cable", auth.jwt());

export {url, Consumer};
