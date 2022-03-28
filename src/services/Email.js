import Axios from "axios";

export default Axios.create({
  baseURL: "https://sendemailapi.herokuapp.com/api"
});
