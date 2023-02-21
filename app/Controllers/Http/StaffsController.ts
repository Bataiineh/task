import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Staffs from 'App/Models/Staff';
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class StaffsController {
  public async getAll(ctx: HttpContextContract) {
    var result = await Staffs.all();
    return result;
}
public async getById(ctx: HttpContextContract) {

  var id = ctx.params.id;
  var result = await Staffs.findOrFail(id);
  return result;
}
public async create(ctx: HttpContextContract) {

  const newSchema = schema.create({
      first_name: schema.string(),
      last_name: schema.string(),
  });
  const fields = await ctx.request.validate({ schema: newSchema })
  var staff = new Staffs();
  staff.firstName = fields.first_name;
  staff.lastName = fields.last_name;
  var result = await staff.save();
  return result;

}
public async update(ctx: HttpContextContract) {
  const newSchema = schema.create({
      first_name: schema.string(),
      last_name: schema.string(),
      id: schema.number(),
  });
  const fields = await ctx.request.validate({ schema: newSchema })
  var id = fields.id;
  var staff = await Staffs.findOrFail(id);
  staff.firstName = fields.first_name;
  staff.lastName = fields.last_name;
  var result = await staff.save();
  return result;
}
public async destory(ctx: HttpContextContract) {

  var id = ctx.params.id;
  var staff = await Staffs.findOrFail(id);
  await staff.delete();
  return { message: "The actor has been deleted!" };
}
}
