import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Rental from 'App/Models/Rental'

import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class RentalsController {
  public async getAll(ctx: HttpContextContract) {
    var result = await Rental.all();
    return result;
}
public async getById(ctx: HttpContextContract) {

  var id = ctx.params.id;
  var result = await Rental.findOrFail(id);
  return result;
}
public async create(ctx: HttpContextContract) {

  const newSchema = schema.create({
    inventory_id: schema.number(),
    customer_id: schema.number(),
  });
  const fields = await ctx.request.validate({ schema: newSchema })
  var rental = new Rental();
  rental.inventoryId = fields.inventory_id;
  rental.customerId = fields.customer_id;
  var result = await rental.save();
  return result;

}
public async update(ctx: HttpContextContract) {
  const newSchema = schema.create({
    inventory_id: schema.number(),
    customer_id: schema.number(),
      id: schema.number(),
  });
  const fields = await ctx.request.validate({ schema: newSchema })
  var id = fields.id;
  var rental = await Rental.findOrFail(id);
  rental.inventoryId = fields.inventory_id;
  rental.customerId = fields.customer_id;
  var result = await rental.save();
  return result;
}
public async destory(ctx: HttpContextContract) {

  var id = ctx.params.id;
  var rental = await Rental.findOrFail(id);
  await rental.delete();
  return { message: "The rental has been deleted!" };
}
}

