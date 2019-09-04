import { MongoClient } from 'mongodb';
import { DB_URL, DB_NAME } from '@/config';

let db = null;
let close = null;
const mongoClient = new MongoClient(DB_URL, { useNewUrlParser: true });

const getConnection = () => new Promise((res, rej) => {
  if (!db && !close) {
    mongoClient.connect()
      .then((client) => {
        db = client.db(DB_NAME);
        close = () => client.close();
        res([db, close])
      });
  } else {
    res([db, close]);
  }
})

export default getConnection;
