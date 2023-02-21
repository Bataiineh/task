import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import City from 'App/Models/City'
import { schema, rules } from '@ioc:Adonis/Core/Validator'


export default class CitiesController {
  public async getAll(ctx: HttpContextContract) {
    var result = await City.all();
    return result;
  }

  public async getById(ctx: HttpContextContract) {

    var id = ctx.params.id;
    var result = await City.findOrFail(id);
    return result;
  }
  public async create(ctx: HttpContextContract) {

    const newSchema = schema.create({
        id: schema.number(),
        city: schema.string(),
    });
    const fields = await ctx.request.validate({ schema: newSchema })
    var cities = new City();
    cities.id = fields.id;
    cities.city = fields.city;
    var result = await cities.save();
    return result;

  }
  public async update(ctx: HttpContextContract) {

    const newSchema = schema.create({
      id: schema.number(),
      city: schema.string(),
  });
  const fields = await ctx.request.validate({ schema: newSchema })
    var id = fields.id;
    var cities = await City.findOrFail(id);
    cities.id = fields.id;
    cities.city = fields.city;
    var result = await cities.save();
    return result;
  }
  public async destory(ctx: HttpContextContract) {

    var id = ctx.params.id;
    var cities = await City.findOrFail(id);
    await cities.delete();
    return { message: "The actor has been deleted!" };
  }
  }

