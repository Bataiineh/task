import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import Language from './Language'
import Actor from './Actor'
import Category from './Category'

export default class Film extends BaseModel {
  public static table = "films"
  @column({ isPrimary: true })
  public id: number

  public title: string

  public description: string

  @column({serializeAs:"release_year"})
  public releaseYear: number

  @column({serializeAs:"language_id"})
  public languageId: number

  @column({serializeAs:"original_language_id"})
  public originalLanguageId: number

  @column({serializeAs:"rental_duration"})
  public rentalDuration: number

  @column({serializeAs:"rental_rete"})
  public rentalRate: number

  public length: number

  @column({serializeAs:"replacement_cost"})
  public replacementCost: number

  public reating: string

  @column({serializeAs:"special_features"})
  public specialFeatures



  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
  @belongsTo(() => Language, {
    foreignKey: 'languageId',
  })
  public language: BelongsTo<typeof Language>
  @manyToMany(() => Actor, {
  })
  public actor: ManyToMany<typeof Actor>

  @manyToMany(() => Category, {
  })
  public category: ManyToMany<typeof Category>
}
