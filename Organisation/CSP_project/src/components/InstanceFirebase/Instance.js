import axios from 'axios';

const instance = axios.create({
      baseURL: 'https://csp-react-proj-01.firebaseio.com/'
})


export default instance;