import LoginService from "../services/login-service";
import PropertyService from "../services/property-service";
import UserService from "../services/user-service";
import { DataFetcher } from "./data-fetcher";

const propertyService = new PropertyService();
const loginService = new LoginService();
const userService = new UserService();

export const rootService: DataFetcher = {
  ...propertyService,
  ...loginService,
  ...userService,
};
