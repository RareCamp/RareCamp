/*  Any array of items including navlinks, options in selectbox */
import { IconNameType } from 'components/Icon/Icon'
import type { Task } from 'types'

type SidebarLinkType = {
  name: string
  icon: IconNameType
  link: string
}
export const SIDEBAR_LINKS: SidebarLinkType[] = [
  { name: 'Workspace', icon: 'list', link: 'workspace' },
  // { name: 'SSMD Gene Therapy', icon: 'dot', link: '' },
]

export const HOME_TABLE_HEADINGS = [
  'TaskName',
  'Status',
  'Owner',
  'Budget',
  'Start Date',
  'End Date',
]

export const STATUS_TYPES = [
  { label: 'Completed', id: 'completed' },
  { label: 'In Progress', id: 'in-progress' },
  { label: 'Not Started', id: 'not-started' },
]

export const INITIAL_TASK_VALUE: Task = {
  name: '',
  status: 'not-started',
  owner: '',
  budget: '',
  duration: '',
  startDate: '',
  endDate: '',
}
