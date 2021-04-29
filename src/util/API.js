import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=10&inc=picture,name,phone,email,dob";

export default {
  search: function() {
    return axios.get(BASEURL)
  }
};


