export interface Contact {
    id: number,
    email: string,
    name: string,
    number: string
}

export interface CreateContact {
    email: string,
    name: string,
    number: string
}

export interface UpdateContact {
    id: number,
    body: CreateContact
}