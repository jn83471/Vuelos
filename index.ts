require('dotenv').config()
import Server from './models/Server';
const serve:Server=new Server();
serve.listen();