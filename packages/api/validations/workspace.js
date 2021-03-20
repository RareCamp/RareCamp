import * as yup from 'yup'
import { validateDTO } from './index'

const diseaseSchema = yup.object({
  name: yup.string().min(1).max(512).required(),
  abbreviation: yup.string(),
  omimId: yup.string(),
  causalGene: yup.string(),
  mutationImpact: yup.string(),
  proteinSize: yup.number().positive().min(1),
})
const workspaceSchema = yup.object().shape({
  name: yup.string().min(1).max(256).required(),
  description: yup.string().min(1).max(4096),
  disease: diseaseSchema,
})

export const validateWorkspaceDto = (dto) => {
  validateDTO(dto, workspaceSchema)
}
