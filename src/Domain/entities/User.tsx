import { Address } from "./Address";
import { Order } from "./Order";
import { Payment } from "./Payment";
import { Rol } from "./Rol";

export interface User {
    id:                  string;
    name:                string;
    lastname:            string;
    name_store:          string;
    addres:              string;
    business_type:       string;
    id_store:            string;
    email:               string;
    phone:               string;
    password:            string;
    confirmPassword:     string;
    image?:              string;
    imageQR?:            string;
    session_token?:      string;
    roles?:              Rol[];
    address?:            Address;
    payment?:            Payment;
    departamento:        string;
    ciudad:              string;
    notification_token?: string;
}
