import Koa from 'koa';
import koaBody from 'koa-body';
import router from './routes';


const app = new Koa();
const MAX_FILE_SIZE = 200*1024*1024; // 设置上传文件大小最大限制，默认2M

app.use(koaBody({
    multipart: true,
    formidable: {
        maxFileSize: MAX_FILE_SIZE	
    }
}));

app.use(router);

app.listen(3000);