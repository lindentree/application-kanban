import axios from 'axios';

const baseURL = 'http://localhost:3000/applicants/';


export const api = {
  getapplicant: (async id => {
    const res = await axios.get(baseURL + id);
    return res.data;
  }),
  getapplicants: (async () => {
    const res = await axios.get(baseURL);
    return res.data;
  }),
  deleteapplicant: (async id => {
    const res = await axios.delete(baseURL + id);
    return res.data;
  }),
  createapplicant: (async payload => {
    const res = await axios.post(baseURL, payload);
    return res.data;
  }),
  updateapplicant: (async payload => {
    const res = await axios.put(baseURL + payload._id, payload);
    return res.data;
  })
};