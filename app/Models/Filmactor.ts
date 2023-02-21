import { DateTime } from 'luxon'
import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'

export default class Filmactor extends BaseModel {
  public static table = "film_actors"
  @column({ isPrimary: true })
  public id: number

  @column({serializeAs:"actor_id"})
  public actorId: number

  @column({serializeAs:"film_id"})
  public filmId: number


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

}
