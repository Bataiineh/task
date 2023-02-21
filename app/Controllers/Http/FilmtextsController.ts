import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import FilmText from 'App/Models/FilmText'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class FilmtextsController {
  public async getAll(ctx: HttpContextContract) {
    var result = await FilmText.all();
    return result;
}
public async getById(ctx: HttpContextContract) {

  var id = ctx.params.id;
  var result = await FilmText.findOrFail(id);
  return result;
}
public async create(ctx: HttpContextContract) {

  const newSchema = schema.create({
    title: schema.string(),
    description: schema.string(),
  });
  const fields = await ctx.request.validate({ schema: newSchema })
  var filmtext = new FilmText();
  filmtext.title = fields.title;
  filmtext.description = fields.description;
  var result = await filmtext.save();
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
  var filmtext = await FilmText.findOrFail(id);
  filmtext.title = fields.title;
  filmtext.description = fields.description;
  var result = await filmtext.save();
  return result;
}
public async destory(ctx: HttpContextContract) {

  var id = ctx.params.id;
  var filmtext = await FilmText.findOrFail(id);
  await filmtext.delete();
  return { message: "The actor has been deleted!" };
}
}
