import axios from "axios";

const URL = "https://randomuser.me/api";
const fetchUsers = (results = 10) => {
  return axios.get(`${URL}/?results=${results}`);
};

export default fetchUsers;
