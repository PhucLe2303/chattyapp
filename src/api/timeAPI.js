import axios from "axios";

const timeAPI = {
  getCurrentUnixTime: () => {
    return new Promise((resolve, reject) => {
      axios.get("https://worldtimeapi.org/api/timezone/Asia/Ho_Chi_Minh").then((res) => {
        const { unixtime } = res.data;
        resolve(unixtime); 
      })
    })
  }
}

export default timeAPI;
// .catch((error)=>console.log(error));