import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class FilmCategory extends BaseModel {
  public static table = "film_categories"
  @column({ isPrimary: true })
  public id: number

  @column({serializeAs:"film_id"})
  public filmId: number

  @column({serializeAs:"category_id"})
  public categoryId: number


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
