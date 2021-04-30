import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=100&inc=picture,name,phone,email,dob&nat=us";

const API =  {
  search: function() {
    return axios.get(BASEURL)
  }
};

export default API;