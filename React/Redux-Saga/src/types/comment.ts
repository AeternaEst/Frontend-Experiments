import { AppUser } from "./app-user";

export interface Comment {
  text: string;
  user?: AppUser;
}
