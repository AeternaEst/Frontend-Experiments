import { Comment } from "./comment";

export interface Property {
    id: number;
    address: string;
    description: string;
    imageUrl: string;
    comments: Comment[];
    isFavorite: boolean;
}