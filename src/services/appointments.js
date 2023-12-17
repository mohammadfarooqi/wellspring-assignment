import { handleResponse, handleError } from '../lib/utils';

const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';
const apiUrl = `${BASE_URL}/api`;

function getAll() {
  // `/api/appointments`
  return fetch(`${apiUrl}/appointments`)
    .then(handleResponse)
    .catch(handleError);
}

const appointments = {
  getAll,
};

export default appointments;
