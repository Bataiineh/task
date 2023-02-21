import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import FilmCategory from 'App/Models/FilmCategory'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class FilmcategoriesController {
  public async getAll(ctx: HttpContextContract) {
    var result = await FilmCategory.all();
    return result;
}
public async getById(ctx: HttpContextContract) {

  var id = ctx.params.id;
  var result = await FilmCategory.findOrFail(id);
  return result;
}
public async create(ctx: HttpContextContract) {

  const newSchema = schema.create({
      id: schema.number(),
  });
  const fields = await ctx.request.validate({ schema: newSchema })
  var filmcategory = new FilmCategory();
  filmcategory.id = fields.id;
  var result = await filmcategory.save();
  return result;

}
public async update(ctx: HttpContextContract) {
  const newSchema = schema.create({
      film_id: schema.number(),
      category_id: schema.number(),
      id: schema.number(),
  });
  const fields = await ctx.request.validate({ schema: newSchema })
  var id = fields.id;
  var filmcategory = await FilmCategory.findOrFail(id);
  filmcategory.id = fields.id;
  filmcategory.filmId = fields.film_id;
  filmcategory.categoryId = fields.category_id;

  var result = await filmcategory.save();
  return result;
}
public async destory(ctx: HttpContextContract) {

  var id = ctx.params.id;
  var actor = await FilmCategory.findOrFail(id);
  await actor.delete();
  return { message: "The FilmCategory has been deleted!" };
}
}

