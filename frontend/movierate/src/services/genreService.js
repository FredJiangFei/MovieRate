import http from './httpService';
import config from '../config.json';

const url = `${config.apiUrl}/genres`;

export function getGenres() {
  return http.get(url);
}