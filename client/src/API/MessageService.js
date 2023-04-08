import axios from "axios";

export default class MessageService {
    static async getAllMessages(page=1, limit=10) {
        const response = await axios.get(`http://localhost:5000/api/message/?page=${page}&limit=${limit}`)
        return response.data
    }
}