/* eslint-disable max-len */
import { Property } from "../types/property";
import { Comment } from "../types/comment";
import sleep from "../utils/general-utils";
import {
  cityNames,
  propertyDatabase,
  streetNames,
  zipCodes,
} from "../data/database";

export default class PropertyService {
  getProperties = (): Promise<Property[]> =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(propertyDatabase);
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
    const sleepTime = Math.random() * 2000;
    await sleep(sleepTime);
    return streetNames[propertyId + -1];
  };

  getCity = async (propertyId: number): Promise<string> => {
    const sleepTime = Math.random() * 2000;
    await sleep(sleepTime);
    return cityNames[propertyId + -1];
  };

  getZip = async (propertyId: number): Promise<string> => {
    const sleepTime = Math.random() * 5000;
    await sleep(sleepTime);
    return zipCodes[propertyId + -1];
  };
}
