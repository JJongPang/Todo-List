import Router from 'koa-router';
import auth from './auth';
import categorys from './category';
import posts from './posts';

const api = new Router();

api.use('/auth', auth.routes());
api.use('/posts', posts.routes());
api.use('/category', categorys.routes());

export default api;
