const Normalize = {
  register: {
    then(response) {
      const retvl = {
        message: '',
        data: response
      };

      if (!response.key) { return Promise.reject(response); }

      return Promise.resolve(retvl);
    },
    catch(error) {
      const retvl = {
        message: '',
        errors: ['Something went wrong!']
      };

      if ('email' in error) retvl.errors = error.email.map(er => er.message);

      return Promise.reject(retvl);
    }
  },
};

export default Normalize;