import io from "socket.io-client";
const ENDPOINT = 'http://172.20.10.11:8000';
const socket = io(ENDPOINT);
export default socket;
