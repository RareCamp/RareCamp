/* Any key value pairs. Prefer using typescript enum */

import { MutationType, ProteinSize } from '../types'

export enum STATUS {
  COMPLETED = 'completed',
  IN_PROGRESS = 'in-progress',
  NOT_STARTED = 'not-started',
}

export const mutationsTypesMap: Record<MutationType, string> = {
  [MutationType.LEADS_TO_LOSS]:
    'Mutation leads to a LOSS of function or LOWER expression of gene or protein',
  [MutationType.LEADS_TO_MORE]:
    'Mutation leads to a MORE protein to be produced',
  [MutationType.LEADS_TO_GAIN]:
    'Mutation leads to a GAIN of function of gene or protein',
  [MutationType.NOT_SURE]: "I'm not sure",
}

export const proteinSizeTypesMap: Record<ProteinSize, string> = {
  [ProteinSize.LESS_THAN_1100]: '< 1100 amino acids ',
  [ProteinSize.MORE_THAN_1100]: '> 1100 amino acids',
  [ProteinSize.NOT_SURE]: "I'm not sure",
}
