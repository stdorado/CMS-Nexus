import Post from "./models/posts.model.js";

class postManager{
  async findByPost(){
    try {
      const post = Post.find()
      return post
    } catch (error) {
      throw error
    }
  }

  async findbyPostId(id){
    try {
      const post  = Post.findOne(id)
      return post
    } catch (error) {
      throw error;
    }
  }

  async createPost(data){
    try {
      const post = Post.create(data)
      return post
    } catch (error) {
      throw error
    }
  }

  async updatePost(id,data){
    try {
      const post = Post.updateOne(id,data)
      return post
    } catch (error) {
      throw error
    }
  }

  async deleteOnePost(id){
    try {
      const post = Post.deleteOne(id)
      return post;
    } catch (error) {
      throw error;
    }
  }
}

export const PostManager = new postManager();