import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Store from 'App/Models/Store'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class StoresController {
  public async getAll(ctx: HttpContextContract) {
    var result = await Store.all();
    return result;
}
public async getById(ctx: HttpContextContract) {

  var id = ctx.params.id;
  var result = await Store.findOrFail(id);
  return result;
}
public async create(ctx: HttpContextContract) {

  const newSchema = schema.create({
      id: schema.number(),
  });
  const fields = await ctx.request.validate({ schema: newSchema })
  var store = new Store();
  store.id = fields.id;
  var result = await store.save();
  return result;

}
public async update(ctx: HttpContextContract) {
  const newSchema = schema.create({
    id: schema.number(),
});
const fields = await ctx.request.validate({ schema: newSchema })
  var id = fields.id;
  var store = await Store.findOrFail(id);
  store.id = fields.id;

  var result = await store.save();
  return result;
}
public async destory(ctx: HttpContextContract) {

  var id = ctx.params.id;
  var store = await Store.findOrFail(id);
  await store.delete();
  return { message: "The country has been deleted!" };
}
}


