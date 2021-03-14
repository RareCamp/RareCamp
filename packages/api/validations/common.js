import * as yup from 'yup'
import { validateDTO } from './index'

const uuidSchema = yup.string().uuid().required()

export const validateUuid = (uuid) => validateDTO(uuid, uuidSchema)
