/* eslint-disable max-len */
import { Property } from "../types/property";
import { Comment } from "../types/comment";
import sleep from "../utils/general-utils";

const propertyDatabase: Property[] = [
  {
    id: 1,
    address: "Somestreet 34D, 2900 Hellerup",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    imageUrl: "https://via.placeholder.com/500x150",
    comments: [],
    isFavorite: false,
  },
  {
    id: 2,
    address: "Somestreet 34D, 2900 Hellerup",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    imageUrl: "https://via.placeholder.com/500x150",
    comments: [],
    isFavorite: false,
  },
  {
    id: 3,
    address: "Somestreet 34D, 2900 Hellerup",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    imageUrl: "https://via.placeholder.com/500x150",
    comments: [],
    isFavorite: false,
  },
];

export default class PropertyService {
  getProperties = (): Promise<Property[]> =>
    new Promise((resolve) => {
      setTimeout(() => {
        const properties = propertyDatabase;
        resolve(properties);
      }, 2000);
    });

  addToFavorite = (propertyId: number): Promise<void> =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const propertyToFavorite = propertyDatabase.find(
          (property) => property.id === propertyId
        );
        if (propertyToFavorite) {
          propertyToFavorite.isFavorite = true;
          resolve();
        }
        reject(new Error("Property not found"));
      }, 2000);
    });

  addComment = (propertyId: number, comment: Comment): Promise<void> =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const propertyToAddComment = propertyDatabase.find(
          (property) => property.id === propertyId
        );
        if (propertyToAddComment) {
          propertyToAddComment.comments = [
            ...propertyToAddComment.comments,
            comment,
          ];
          resolve();
        }
        reject(new Error("Property not found"));
      }, 2000);
    });

  getStreetName = async (propertyId: number): Promise<string> => {
    const streetNames = ["Jagtvej", "Strandvejen", "Kongevejen"];
    const sleepTime = Math.random() * 2000;
    await sleep(sleepTime);
    return streetNames[propertyId + -1];
  };

  getCity = async (propertyId: number): Promise<string> => {
    const cityNames = ["Copenhagen", "London", "New York"];
    const sleepTime = Math.random() * 2000;
    await sleep(sleepTime);
    return cityNames[propertyId + -1];
  };

  getZip = async (propertyId: number): Promise<string> => {
    const zipCodes = ["2100", "2900", "3000"];
    const sleepTime = Math.random() * 5000;
    await sleep(sleepTime);
    return zipCodes[propertyId + -1];
  };
}
