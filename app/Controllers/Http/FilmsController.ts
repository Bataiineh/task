import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Film from 'App/Models/Film'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class FilmsController {
  public async getAll(ctx: HttpContextContract) {
    var result = await Film.all();
    return result;
}
public async getById(ctx: HttpContextContract) {

  var id = ctx.params.id;
  var result = await Film.findOrFail(id);
  return result;
}
public async create(ctx: HttpContextContract) {

  const newSchema = schema.create({
      title: schema.string(),
      description: schema.string(),
  });
  const fields = await ctx.request.validate({ schema: newSchema })
  var film = new Film();
  film.title = fields.title;
  film.description = fields.description;
  var result = await film.save();
  return result;

}
public async update(ctx: HttpContextContract) {
  const newSchema = schema.create({
    title: schema.string(),
    description: schema.string(),
    id: schema.number(),
  });
  const fields = await ctx.request.validate({ schema: newSchema })
  var id = fields.id;
  var film = await Film.findOrFail(id);
  film.title = fields.title;
  film.description = fields.description;
  var result = await film.save();
  return result;
}
public async destory(ctx: HttpContextContract) {

  var id = ctx.params.id;
  var film = await Film.findOrFail(id);
  await film.delete();
  return { message: "The film has been deleted!" };
}
}

