import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Address from './Address'

export default class Customer extends BaseModel {
  public static table = "customers"
  @column({ isPrimary: true })
  public id: number

  @column({serializeAs:"store_id"})
  public storeId: number

  @column({serializeAs:"first_name"})
  public firstName: string

  @column({serializeAs:"last_name"})
  public lastName: string

  public email: string

  @column({serializeAs:"adress_id"})
  public addressId: number

  public active: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
  @belongsTo(() => Address, {
    foreignKey: 'addressId',
  })
  public address: BelongsTo<typeof Address>
}
