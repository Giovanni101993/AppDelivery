import { Rol } from "./Rol";

export interface User {
    id?:             string;
    name:            string;
    lastname:        string;
    email:           string;
    phone:           string;
    password:        string;
    confirmPassword: string;
    image?:          string;
    session_token?:  string;
    roles?:          Rol[];
}
