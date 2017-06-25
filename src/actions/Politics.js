import axios from 'axios';

export const FETCH_POLITICS = 'FETCH_POLITICS';
const testKey = 'a2acf14cbd62476c94e4c359350469f7';

export function fetchPolitics() {
  const request = axios.get('https://newsapi.org/v1/sources?category=politics&apiKey=' + testKey)
  return {
    type: FETCH_POLITICS,
    payload: request
  };
}
