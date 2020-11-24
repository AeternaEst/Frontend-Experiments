import LoginService from './services/login-service';
import PropertyService from './services/property-service';
import UserService from './services/user-service';

const webApi = {
  propertyService: new PropertyService(),
  loginService: new LoginService(),
  userService: new UserService(),
};

export default webApi;
