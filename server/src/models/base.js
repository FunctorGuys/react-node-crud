import connect from '@/loaders/mongodb';

class Model {
  constructor(collectionName) {
    this.collection = null;
    this.db = null;
    this.close = null;

    connect().then(([db, close]) => {
      this.collection = db.collection(collectionName);
      this.db = db;
      this.close = close;
    })
  }

  enhanceMethod(fn) {
    return (...args) => {
      if (this.collection && this.db && this.close) {
        fn(args);
      } else {
        throw new Error('Not connect yet');
      }
    }
  }
}

export default Model;