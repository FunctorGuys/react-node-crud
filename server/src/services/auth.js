import usersModel from '@/models/users';

const auth = {
  login({ username, password }) {
    console.log('auth service login')
  },

  register({ username, password, fullname }) {
    usersModel.collection.insertOne({
      username,
      password,
      fullname
    });
  }
}

export default auth;