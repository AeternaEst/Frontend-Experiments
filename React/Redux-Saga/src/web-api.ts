import axios from "axios"; //Suspect problem is here
import { endpoints, getEndpointUrl } from "./data/endpoints";
import { AppUser } from "./types/app-user";
import { Comment } from "./types/comment";
import { Property } from "./types/property";

class WebApi {
  constructor() {
    console.log("Initializing web api");
  }

  public async getProperties() {
    const result = await axios.get<{ properties: ReadonlyArray<Property> }>(
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
