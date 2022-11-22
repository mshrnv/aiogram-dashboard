import axios from "axios";

export default class MessageService {
    static async getAllMessages() {
        const response = await axios.get('http://localhost:8000/messages')
        return response
    }
}