import { Property } from "../types/property";
import { Comment } from "../types/comment";

const propertyDatabase: Property[] = [
    {
        id: 1,
        address: "Somestreet 34D, 2900 Hellerup",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        imageUrl: "https://via.placeholder.com/500x250",
        comments: [],
        isFavorite: false
    },
    {
        id: 2,
        address: "Somestreet 34D, 2900 Hellerup",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        imageUrl: "https://via.placeholder.com/500x250",
        comments: [],
        isFavorite: false
    },
    {
        id: 3,
        address: "Somestreet 34D, 2900 Hellerup",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        imageUrl: "https://via.placeholder.com/500x250",
        comments: [],
        isFavorite: false
    }
]

export default class PropertyService {

    public getProperties(): Promise<Property[]> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const properties = propertyDatabase;
                resolve(properties)
            }, 2000);
        });
    }

    public addToFavorite(propertyId: number): Promise<void> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const property = propertyDatabase.find(property => property.id === propertyId);
                if(property) {
                    property.isFavorite = true;
                    resolve();
                }
                reject("Property not found")
            }, 2000);   
        });
    }

    public addComment(propertyId: number, comment: Comment): Promise<void> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const property = propertyDatabase.find(property => property.id === propertyId);
                if(property) {
                    property.comments = [...property.comments, comment]
                    resolve();
                }
                reject("Property not found")
            }, 2000);
        });
    }
}