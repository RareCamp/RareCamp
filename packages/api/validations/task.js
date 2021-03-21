import * as yup from 'yup'
import { validateDTO } from './index'
import { taskStatuses } from '../common/constant'
import { idSchema } from './common'

const taskSchema = yup.object()
  .shape({
    projectId: idSchema.required(),
    name: yup.string()
      .min(1)
      .max(256)
      .required(),
    description: yup.string()
      .min(1)
      .max(4096),
    status: yup.string().oneOf(Object.values(taskStatuses)),
    assignee: yup.arr,
    budget: '',
    duration: '',
    estimatedStartDate: '',
    estimatedEndDate: '',
    actualStartDate: '',
    actualEndDate: '',
    notes: '',
    guide: '',
    serviceProviders: '',
  })

export const validateTaskDto = (dto) => {
  validateDTO(dto, taskSchema)
}
