import axios from 'axios';

const BASE_URL = 'https://portfolio-js.b.goit.study/api';

async function getData() {
  const response = await axios(`${BASE_URL}/reviews`);
  console.log(response.data);
  return response.data;
}

async function postData(obj) {
  const response = await axios.post(`${BASE_URL}/requests`, obj);
  return response.data;
}

export { getData, postData };
