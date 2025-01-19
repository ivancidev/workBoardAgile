import { User } from "./user";

export interface Comment {
    id: number;
    userId: number;
    content: string;
    user: User;
    createdAt: string;
}