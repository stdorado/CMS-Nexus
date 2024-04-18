import { PostManager } from "../managers/post.manager.js";

class postService {
    async findPost(){
        try {
            const post = await PostManager.findByPost()
            return post;
        } catch (error) {
            throw error
        }
    }

    async finByIdPost(id){
        try {
            const post = await PostManager.findbyPostId(id)
            return post;
        } catch (error) {
            throw error
        }
    }

    async createPoste(post_data){
        try {
            const post = await PostManager.createPost(post_data)
            return post
        } catch (error) {
            throw error
        }
    }

    async updatePost(id,post_data){
        try {
            const post = await PostManager.updatePost(id,post_data)
            return post;
        } catch (error) {
            throw error
        }
    }

    async deletePost(id){
        try {
            const post = await PostManager.deleteOnePost(id)
            return post;
        } catch (error) {
            throw error
        }
    }
}

export const PostServiceClass = new postService()