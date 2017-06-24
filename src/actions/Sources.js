import axios from 'axios';

export const FETCH_SOURCES = 'FETCH_SOURCES';
const testKey = 'a2acf14cbd62476c94e4c359350469f7';

export function fetchSources() {
  const request = axios.get('https://newsapi.org/v1/sources?apiKey=' + testKey)
  return {
    type: FETCH_SOURCES,
    payload: request
  };
}

