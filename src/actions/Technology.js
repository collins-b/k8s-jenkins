import axios from 'axios';

export const FETCH_TECH = 'FETCH_TECH';
const testKey = 'a2acf14cbd62476c94e4c359350469f7';

export function fetchTech() {
  const request = axios.get('https://newsapi.org/v1/sources?category=technology&apiKey=' + testKey)
  return {
    type: FETCH_TECH,
    payload: request
  };
}

