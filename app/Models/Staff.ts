import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Address from './Address'
import Store from './Store'

export default class Staffs extends BaseModel {
  public static table : "staffs"
  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs:"first_name" })
  public firstName: string

  @column({ serializeAs:"last_name" })
  public lastName: string

  @column({ serializeAs:"address_id" })
  public addressId: string

  public email: string

  @column({ serializeAs:"store_id" })
  public storeId: number

  public active: number

  public username: string

  public password: string



  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Address, {
    foreignKey: 'addressId',
  })
  public address: BelongsTo<typeof Address>

  @belongsTo(() => Store, {
    foreignKey: 'storeId',
  })
  public store: BelongsTo<typeof Store>
}

