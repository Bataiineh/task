import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Address from 'App/Models/Address';
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class AdressesController {
  public async getAll(ctx: HttpContextContract) {
    var result = await Address.all();
    return result;
}
public async getById(ctx: HttpContextContract) {

  var id = ctx.params.id;
  var result = await Address.findOrFail(id);
  return result;
}
public async create(ctx: HttpContextContract) {

  const newSchema = schema.create({
      id: schema.number()
  });
  const fields = await ctx.request.validate({ schema: newSchema })
  var address = new Address();
  address.id = fields.id;
  var result = await address.save();
  return result;

}
public async update(ctx: HttpContextContract) {
  const newSchema = schema.create({
      id: schema.number(),
  });
  const fields = await ctx.request.validate({ schema: newSchema })
  var id = fields.id;
  var address = await Address.findOrFail(id);
  address.id = fields.id;
  var result = await address.save();
  return result;
}
public async destory(ctx: HttpContextContract) {

  var id = ctx.params.id;
  var address = await Address.findOrFail(id);
  await address.delete();
  return { message: "The actor has been deleted!" };
}
}

