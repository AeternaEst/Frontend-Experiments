import axios from "axios";
import { endpoints, getEndpointUrl } from "./endpoints";
import { AppUser } from "../types/app-user";
import { Comment } from "../types/comment";
import { Property } from "../types/property";
import { DataFetcher } from "./data-fetcher";
import MockAdapter from "axios-mock-adapter";
import { mockWebApi } from "./mock-web-api";

class WebApi implements DataFetcher {
  constructor() {
    const mockAdapter = new MockAdapter(axios, {
      delayResponse: 2000,
      onNoMatch: "throwException",
    });
    mockWebApi(mockAdapter);
    console.log("Initializing web api");
  }

  public async getProperties() {
    const result = await axios.get<{ properties: Property[] }>(
      getEndpointUrl(endpoints.getProperties)
    );

    return result.data.properties;
  }

  public async addFavoriteProperty(propertyId: number) {
    await axios.post(getEndpointUrl(endpoints.addFavorite), {
      propertyId,
    });
  }

  public async addPropertyComment(propertyId: number, comment: Comment) {
    await axios.post(getEndpointUrl(endpoints.addComment), {
      propertyId,
      comment: comment.text,
    });
  }

  public async getStreetName(propertyId: number) {
    const result = await axios.get<{ streetName: string }>(
      getEndpointUrl(endpoints.getStreetName),
      {
        params: {
          propertyId,
        },
      }
    );

    return result.data.streetName;
  }

  public async getCity(propertyId: number) {
    const result = await axios.get<{ city: string }>(
      getEndpointUrl(endpoints.getCity),
      {
        params: {
          propertyId,
        },
      }
    );

    return result.data.city;
  }

  public async getZip(propertyId: number) {
    const result = await axios.get<{ zip: string }>(
      getEndpointUrl(endpoints.getZip),
      {
        params: {
          propertyId,
        },
      }
    );

    return result.data.zip;
  }

  public async login(userName: string, password: string) {
    const result = await axios.post<{ user: AppUser }>(
      getEndpointUrl(endpoints.login),
      {
        userName,
        password,
      }
    );

    return result.data.user;
  }

  public async getSecurityMessage(index: number) {
    const result = await axios.get<{ message: string }>(
      getEndpointUrl(endpoints.getSecurityMessage),
      {
        params: {
          index,
        },
      }
    );

    return result.data.message;
  }
}

export default WebApi;
