import User from "./models/user.model.js";


class userManager {
    async findByUsers(){
        try {
            const user = await User.find()
            return user
        } catch (error) {
            throw error
        }
    }

    async updateUser(_id,data){
       try {
        const user  = User.updateOne(_id,data)
        return user
       } catch (error) {
        throw error
       }
    }

    async findByUsersId(_id){
        try {
            const user = User.findById(_id)
            return user
        } catch (error) {
            throw error
        }
    }

    async createUser(data){
        try {
            const user = User.create(data)
            return user
        } catch (error) {
            throw error
        }
    }

    async deleteOneUser(id){
        try {
            const user = await User.findByIdAndDelete(id)
            return user;
        } catch (error) {
            throw error
        }
    }
}

export const UserManager = new userManager()