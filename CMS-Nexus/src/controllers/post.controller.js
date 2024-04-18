import { PostServiceClass } from "../services/post.service.js";


export const createPostController = async (req,res)=>{
    try {
        const postData = req.body
         const post = await PostServiceClass.createPoste(postData)
        res.status(200).json({message : "success create Post", post : post})
    } catch (error) {
        res.status(404).json({message : "error to create post",error})
    }
}