import sleep from "../utils/general-utils";

const SECURITY_MESSAGES = [
  "Very important security message",
  "You have been hacked",
  "Change your password",
];

export default class UserService {
  getSecurityMessage = async (index: number) => {
    const sleepTime = Math.random() * 5000;
    await sleep(sleepTime);
    return SECURITY_MESSAGES[index];
  };
}
