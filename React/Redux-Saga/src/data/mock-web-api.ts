import { endpoints, getEndpointUrl } from "./endpoints";
import { Property } from "../types/property";
import MockAdapter from "axios-mock-adapter";
import {
  cityNames,
  propertyDatabase,
  SECURITY_MESSAGES,
  streetNames,
  userDatabase,
  zipCodes,
} from "./database";
import { AxiosRequestConfig } from "axios";
import { AppUser } from "../types/app-user";

export const mockWebApi = (mockAdapter: MockAdapter) => {
  mockAdapter
    .onGet(getEndpointUrl(endpoints.getProperties))
    .reply<{ properties: Property[] }>(200, { properties: propertyDatabase });

  mockAdapter.onPost(getEndpointUrl(endpoints.addFavorite)).reply(200);

  mockAdapter.onPost(getEndpointUrl(endpoints.addComment)).reply(200);

  mockAdapter
    .onGet(getEndpointUrl(endpoints.getStreetName))
    .reply<{ streetName: string }>((config: AxiosRequestConfig) => {
      console.log("config.params", config.params);
      const propertyId = config.params.propertyId;
      const streetName = streetNames[propertyId + -1];

      return [200, { streetName }];
    });

  mockAdapter
    .onGet(getEndpointUrl(endpoints.getCity))
    .reply<{ city: string }>((config: AxiosRequestConfig) => {
      console.log("config.params", config.params);
      const propertyId = config.params.propertyId;
      const cityName = cityNames[propertyId + -1];

      return [200, { city: cityName }];
    });

  mockAdapter
    .onGet(getEndpointUrl(endpoints.getZip))
    .reply<{ zip: string }>((config: AxiosRequestConfig) => {
      console.log("config.params", config.params);
      const propertyId = config.params.propertyId;
      const zipCode = zipCodes[propertyId + -1];

      return [200, { zip: zipCode }];
    });

  mockAdapter
    .onPost(getEndpointUrl(endpoints.login))
    .reply<{ user: AppUser }>((config: AxiosRequestConfig) => {
      console.log("config.data", config.data);
      const data = JSON.parse(config.data) as AppUser;

      const user = userDatabase.find(
        (databaseUser) =>
          databaseUser.userName === data.userName &&
          databaseUser.password === data.password
      );

      const statusCode = user ? 200 : 404;

      return [statusCode, { user }];
    });

  mockAdapter
    .onGet(getEndpointUrl(endpoints.getSecurityMessage))
    .reply<{ message: string }>((config: AxiosRequestConfig) => {
      console.log("config.params", config.params);

      const random = Math.floor(Math.random() * 3);
      const message = SECURITY_MESSAGES[random];

      return [200, { message }];
    });
};
