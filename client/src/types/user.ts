export interface User {
    id: number,
    email: string
}

export interface UserInititalState {
    isAuth: boolean,
    user: User | null
}
