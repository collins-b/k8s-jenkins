import axios from 'axios';

export const FETCH_NEWS = 'FETCH_NEWS';
const testKey = 'a2acf14cbd62476c94e4c359350469f7';

export function fetchNews() {
  const request = axios.get('https://newsapi.org/v1/articles?source=the-next-web&apiKey=' + testKey);
  return {
    type: FETCH_NEWS,
    payload: request
  };
}
