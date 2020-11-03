import { Property } from "../types/property";
import { Comment } from "../types/comment";
import { sleep } from "../utils/general-utils";

const propertyDatabase: Property[] = [
  {
    id: 1,
    address: "Somestreet 34D, 2900 Hellerup",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    imageUrl: "https://via.placeholder.com/500x250",
    comments: [],
    isFavorite: false,
  },
  {
    id: 2,
    address: "Somestreet 34D, 2900 Hellerup",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    imageUrl: "https://via.placeholder.com/500x250",
    comments: [],
    isFavorite: false,
  },
  {
    id: 3,
    address: "Somestreet 34D, 2900 Hellerup",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    imageUrl: "https://via.placeholder.com/500x250",
    comments: [],
    isFavorite: false,
  },
];

export default class PropertyService {
  public getProperties(): Promise<Property[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const properties = propertyDatabase;
        resolve(properties);
      }, 2000);
    });
  }

  public addToFavorite(propertyId: number): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const property = propertyDatabase.find(
          (property) => property.id === propertyId
        );
        if (property) {
          property.isFavorite = true;
          resolve();
        }
        reject("Property not found");
      }, 2000);
    });
  }

  public addComment(propertyId: number, comment: Comment): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const property = propertyDatabase.find(
          (property) => property.id === propertyId
        );
        if (property) {
          property.comments = [...property.comments, comment];
          resolve();
        }
        reject("Property not found");
      }, 2000);
    });
  }

  public async getStreetName(propertyId: number): Promise<string> {
    const streetNames = ["Jagtvej", "Strandvejen", "Kongevejen"];
    const sleepTime = Math.random() * 2000;
    await sleep(sleepTime);
    return streetNames[propertyId + -1];
  }

  public async getCity(propertyId: number): Promise<string> {
    const cityNames = ["Copenhagen", "London", "New York"];
    const sleepTime = Math.random() * 2000;
    await sleep(sleepTime);
    return cityNames[propertyId + -1];
  }

  public async getZip(propertyId: number): Promise<string> {
    const zipCodes = ["2100", "2900", "3000"];
    const sleepTime = Math.random() * 5000;
    await sleep(sleepTime);
    return zipCodes[propertyId + -1];
  }
}
