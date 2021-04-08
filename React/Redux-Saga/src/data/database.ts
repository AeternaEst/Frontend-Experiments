import { AppUser } from "../types/app-user";
import { Property } from "../types/property";

export const propertyDatabase: Property[] = [
  {
    id: 1,
    address: "arnold Somestreet 34D, 2900 Hellerup",
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

export const streetNames = ["Jagtvej", "Strandvejen", "Kongevejen"];
export const cityNames = ["Copenhagen", "London", "New York"];
export const zipCodes = ["2100", "2900", "3000"];

export const userDatabase: AppUser[] = [
  {
    userName: "Arnold",
    password: "password",
  },
  {
    userName: "Sylvester",
    password: "password",
  },
  {
    userName: "Jean Claud",
    password: "password",
  },
];

export const SECURITY_MESSAGES = [
  "Very important security message",
  "You have been hacked",
  "Change your password",
];
