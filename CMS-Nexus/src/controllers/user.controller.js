import { ClassService } from "../services/user.service.js";

export const GetUser = async (req, res) => {
    try {
        const user = await ClassService.findByUser();
        res.status(200).json({ user });
    } catch (error) {
        res.status(404).json({ error });
    }
}

export const createUser = async (req, res) => {
    try {
        const { userData } = req.body; 
        const { user, token } = await ClassService.createUser(userData); 
        res.status(200).json({ message: "User created successfully", user, token });
    } catch (error) {
        res.status(404).json({ error });
    }
}

export const findUser = async (req, res) => {
    try {
        const {id} = req.params
        const user = await ClassService.findByUsersId(id);
        res.status(200).json({ user });
    } catch (error) {
        res.status(404).json({ error });
    }
}

export const deleteUserController = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await ClassService.deleteUser(id);
        res.status(200).json({ message: "User deleted successfully", user: user });
    } catch (error) {
        res.status(404).json({ error });
    }
}

export const updateUserController = async(req,res)=>{
    try {
        const {userData} = req.body
        const {id} = req.params
        const user = await ClassService.updateUser(id,userData)
        res.status(200).json({message : "user update succes", user : user})
    } catch (error) {
        res.status(404).json({error})
    }
}