import { SECURITY_MESSAGES } from "../data/database";
import sleep from "../utils/general-utils";

export default class UserService {
  getSecurityMessage = async (index: number) => {
    const sleepTime = Math.random() * 5000;
    await sleep(sleepTime);
    return SECURITY_MESSAGES[index];
  };
}
