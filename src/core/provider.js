import axios from "axios";

export const getCones = () => {
  return axios({
    method: "get",
    url: "/api/cones"
  });
};
