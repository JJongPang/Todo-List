import Category from '../../models/category';
import Joi from '@hapi/joi';

export const input = async (ctx) => {
  const schema = Joi.object().keys({
    title: Joi.string().required(),
    color: Joi.string().required(),
  });
  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }
  const { title, color } = ctx.request.body;
  const category = new Category({
    title,
    color,
    user: ctx.state.user,
  });
  try {
    await category.save();
    ctx.body = category;
  } catch (e) {
    ctx.throw(500, e);
  }
};
