import * as yup from 'yup'
import { validateDTO } from './index'
import { ID_SIZE } from '../utils/id'

const uuidSchema = yup.string().uuid().required()
export const idSchema = yup.string()
  .test('len', 'Must be exactly 10 characters', (val) => val.length === ID_SIZE)

export const validateUuid = (uuid) => validateDTO(uuid, uuidSchema)
