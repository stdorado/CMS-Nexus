import { UserManager } from "../managers/user.manager.js";
import { generateToken } from "../utils/JWT.js"; 

class userService {
    async findByUser() {
        try {
            const user = await UserManager.findByUsers();
            return user;
        } catch (error) {
            throw error;
        }
    }

    async updateUser(userData, id) { 
        try {
    
            const user = await UserManager.updateUser(id,userData); 
            return user;
        } catch (error) {
            throw error;
        }
    }

    async findByUsersId(id) {
        try {
            const user = await UserManager.findByUsersId(id);
            return user;
        } catch (error) {
            throw error;
        }
    }

    async createUser(userData) { 
        try {
            const user = await UserManager.createUser(userData); 
            const token = generateToken({ id: user._id, username: user.username });  
            return { user, token }; 
        } catch (error) {
            throw error;
        }
    }

    async deleteUser(id, ) { 
        try { 
            const user = await UserManager.deleteOneUser(id);
            return user;
        } catch (error) {
            throw error;
        }
    }
}

export const ClassService = new userService();
