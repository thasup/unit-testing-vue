import axios from 'axios';

export default function getMessage() {
  // eslint-disable-next-line arrow-body-style
  return axios.get('http://localhost:3000/message').then((response) => {
    return response.data;
  });
}
