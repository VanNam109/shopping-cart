import axios from "axios";
import { domain } from "../config/config";

export class ApiManagement {
  //Get load data
  listPhone = () => {
    return axios({
      url: `${domain}phone`,
      method: "GET",
    });
  };
}

export const AdminService = new ApiManagement();
