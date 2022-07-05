import request from "@/utils/request.js";

export const login = (data) => {
  return request({
    url: "/v1_0/authorizations",
    method: "POST",
    data,
  });
};
export const getSmsCode = (mobile) => {
  return request({ method: "GET", url: `/v1_0/sms/codes/${mobile}` });
};
