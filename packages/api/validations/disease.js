import * as yup from 'yup'

export const diseaseSchema = yup.object({
  name: yup.string().min(1).max(512).required(),
  abbreviation: yup.string(),
  omimId: yup.string(),
  causalGene: yup.string(),
  mutationImpact: yup.string(),
  proteinSize: yup.number().positive().min(1),
})
