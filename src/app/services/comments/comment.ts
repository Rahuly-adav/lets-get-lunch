import { User } from "../auth/user";

export interface Comment {
    _event: string;
    _creator: User;
    content: string;
  
    createdAt?: string;
    _id?: string;
    __v?: any;
}
