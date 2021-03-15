import * as yup from 'yup'
import { validateDTO } from './index'

const workspaceSchema = yup.object().shape({
  name: yup.string().min(1).max(256).required(),
  description: yup.string().min(1).max(4096),
})

export const validateWorkspaceDto = (dto) => {
  validateDTO(dto, workspaceSchema)
}
