const Router = require('koa-router');
const categoryCtrl = require('./category.ctrl');

const categorys = new Router();

categorys.post('/', categoryCtrl.input);

export default categorys;
