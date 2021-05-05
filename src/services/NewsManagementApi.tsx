import axios from "axios";
import { domain } from "../config/config";

export class ApiManagement {
  //Get load data
  listNew = () => {
    return axios({
      url: `${domain}tintuc24`,
      method: "GET",
    });
  };
  //Detail data
  listDetailNew = (id: string)=>{
    return axios({
      url: `${domain}tintuc24?id=${id}`,
      method: "GET"
    })
  }
  listReview = () => {
    return axios({
      url: `${domain}review`,
      method: "GET",
    });
  };
  //List comment
  listComment = () => {
    return axios({
      url: `${domain}binhLuan`,
      method: "GET",
    });
  };
  postComment = (data: any)=>{
    return axios ({
      url: `${domain}binhLuan`,
      method:'POST',
      data:data,
    })
  }
}

export const NewApi = new ApiManagement();
