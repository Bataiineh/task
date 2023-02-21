import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Filmactor from 'App/Models/Filmactor'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class FilmactorsController {
  public async getAll(ctx: HttpContextContract) {
    var result = await Filmactor.all();
    return result;
}
public async getById(ctx: HttpContextContract) {

  var id = ctx.params.id;
  var result = await Filmactor.findOrFail(id);
  return result;
}
public async create(ctx: HttpContextContract) {

  const newSchema = schema.create({
      id: schema.number(),
      actor_id: schema.number(),
      film_id: schema.number()
  });
  const fields = await ctx.request.validate({ schema: newSchema })
  var filmactor = new Filmactor();
  filmactor.id = fields.id;
  filmactor.filmId = fields.film_id;
  filmactor.actorId = fields.actor_id;
  var result = await filmactor.save();
  return result;

}
public async update(ctx: HttpContextContract) {
  const newSchema = schema.create({
    id: schema.number(),
    actor_id: schema.number(),
    film_id: schema.number()
  });
  const fields = await ctx.request.validate({ schema: newSchema })
  var id = fields.id;
  var filmactor = await Filmactor.findOrFail(id);
  filmactor.id = fields.id;
  filmactor.filmId = fields.film_id;
  filmactor.actorId = fields.actor_id
  var result = await filmactor.save();
  return result;
}
public async destory(ctx: HttpContextContract) {

  var id = ctx.params.id;
  var filmactor = await Filmactor.findOrFail(id);
  await filmactor.delete();
  return { message: "The filmactor has been deleted!" };
}
}
