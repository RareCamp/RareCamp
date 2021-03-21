import * as yup from 'yup'
import { validateDTO } from './index'
import { diseaseSchema } from './disease'

const programSchema = yup.object().shape({
  name: yup.string().min(1).max(256).required(),
  workspaceId: yup.string(),
  description: yup.string().min(1).max(4096),
  disease: diseaseSchema,
})

export const validateProgramDto = (dto) => {
  validateDTO(dto, programSchema)
}
