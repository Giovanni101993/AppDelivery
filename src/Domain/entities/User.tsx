export interface User {
    id?:             string;
    name:            string;
    lastname:        string;
    email:           string;
    phone:           string;
    password:        string;
    confirmPassword: string;
    session_token?:  string;
}
