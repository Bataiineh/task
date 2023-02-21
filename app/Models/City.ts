import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Country from './Country'

export default class City extends BaseModel {
  public static table = "cities"
  @column({ isPrimary: true })
  public id: number

  public city: string

  @column({ serializeAs:"country_id" })
  public countryId: number


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Country, {
    foreignKey: 'countryId',
  })
  public managerStaff: BelongsTo<typeof Country>
}
