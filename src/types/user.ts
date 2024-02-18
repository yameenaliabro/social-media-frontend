export type CreateUser = {
    username: string,
    email: string,
    password: string,
    phoneNumber: string,
}

export type loginUser = {
    email: string,
    password: string,
}

export type AuthContextType = {
    registerUser: (props: CreateUser) => void,
    login: (props: loginUser) => void,
    loading: boolean,
    isAuthenticated: boolean,
}