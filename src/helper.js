import ActionCable from 'action-cable-react-jwt';
import auth from './auth';

const url = 'http://localhost:4000';

let Consumer = {};
Consumer.cable = ActionCable.createConsumer(url + "/cable", auth.jwt());

export {url, Consumer};
