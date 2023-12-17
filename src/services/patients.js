import { handleResponse, handleError } from '../lib/utils';

const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';
const apiUrl = `${BASE_URL}/api`;

function getAll() {
  // `/api/patients`
  return fetch(`${apiUrl}/patients`).then(handleResponse).catch(handleError);
}

const patients = {
  getAll,
};

export default patients;
