import type { User } from "./user";

export interface AuthResponse {
    accessToken: string,
    user: User
}
export interface AuthLogin {
    email: string,
    password: string
}

export interface RequestError {
    status: number,
    data: string
}