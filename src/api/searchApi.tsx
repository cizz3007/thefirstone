import Axios from "axios";

export function API_HOTEL_DATA_REQUEST(name: string) {
    /*Proxy개념 좀더..*/
  return Axios({
    url: `/ajax/autocomplete?name=${name}`,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      'crossDomain': true
    },
    withCredentials:true,
    method: 'GET',
  });
}
