import { apiEndPoints } from "../constant/apiEndPoints";
import API from "../request/api";

class PrevAnsService {
  static async getPrevAns(data) {
    return API.post(apiEndPoints.getPrevAns, {
      ...data,
    });
  }
}

export default PrevAnsService;
