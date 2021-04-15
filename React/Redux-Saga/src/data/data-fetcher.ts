import { AppUser } from "../types/app-user";
import { Comment } from "../types/comment";
import { Property } from "../types/property";

export interface DataFetcher {
  getProperties: () => Promise<Property[]>;
  addFavoriteProperty: (propertyId: number) => Promise<void>;
  addPropertyComment: (propertyId: number, comment: Comment) => Promise<void>;
  getStreetName: (propertyId: number) => Promise<string>;
  getCity: (propertyId: number) => Promise<string>;
  getZip: (propertyId: number) => Promise<string>;
  login: (userName: string, password: string) => Promise<AppUser>;
  getSecurityMessage: (index: number) => Promise<string>;
}
