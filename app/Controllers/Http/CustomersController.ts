import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Customer from 'App/Models/Customer'
import { schema, rules } from '@ioc:Adonis/Core/Validator'


export default class CustomersController {
  public async getAll(ctx: HttpContextContract) {
    var result = await Customer.all();
    return result;
  }

  public async getById(ctx: HttpContextContract) {
    var id = ctx.params.id;
    var result = await Customer.findOrFail(id);
    return result;
  }

  public async create(ctx: HttpContextContract) {
    const newSchema = schema.create ({
      first_name: schema.string(),
      last_name: schema.string(),
    });
    const fields = await ctx.request.validate({ schema: newSchema})
    var customer = new Customer();
    customer.firstName = fields.first_name;
    customer.lastName = fields.last_name;
    var result = await customer.save();
    return result;
  }

  public async update(ctx: HttpContextContract) {
    const newSchema = schema.create({
      first_name: schema.string(),
      last_name: schema.string(),
      id: schema.number(),
    });
    const fields = await ctx.request.validate({ schema: newSchema})
    var id = fields.id;
    var customer = await Customer.findOrFail(id);
    customer.firstName = fields.first_name;
    customer.lastName = fields.last_name;
    var result = await customer.save();
    return result;
  }

  public async destory(ctx: HttpContextContract) {
    var id = ctx.params.id;
    var customer = await Customer.findOrFail(id);
    await customer.delete();
    return { message: "The customer has been deleted!" }
  }
}
