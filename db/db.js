import mongoose from 'mongoose';
import config from './config.js';

let mongoDBUrl = 'mongodb://'
if(config.user && config.pwd){
    mongoDBUrl += config.user + ':' + config.pwd + '@'
}
mongoDBUrl += config.host + ':' + config.port + '/' + config.dbName;

mongoose.connect(mongoDBUrl, { useNewUrlParser: true });
console.log('mongoDB connected');

export default mongoose;