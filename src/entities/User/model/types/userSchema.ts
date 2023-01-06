export interface User {
    id: string;
    email: string;
    isActivated: boolean;
}

export interface UserSchema {
    authData?: User;
}
