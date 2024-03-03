import { io } from "socket.io-client";

const socket = io('http://192.168.20.25:3000/orders/delivery')

export default socket;