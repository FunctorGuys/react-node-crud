import postsModel from '@/models/posts';

const posts = {
  createPost() {
    postsModel.collection.insertOne({
      name: 'post1'
    })
  }
}

export default posts;