// Global mixin
import axios from "axios";
// const mixin = {
//   data: function () {
//     return {
//       moment_format: "DD/MM/YYYY HH:mm",
//     };
//   },

//   methods: {
//     async $getRequest() {
//       const res = await axios.get("/api/project.json");
//       console.log("sdfsd");
//       return res.data;
//     },
//   },
// };

// export default mixin;

export default function () {
  const $getRequest = () => {
    const res = axios.get("/api/project.json");
    return res.data;
  };

  return {
    $getRequest,
  };
}
