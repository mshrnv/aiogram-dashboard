import axios from "axios";

export default class UserService {
    static async getAllUsers() {
        const response = await axios.get('http://localhost:5000/users')
        return response
    }
}