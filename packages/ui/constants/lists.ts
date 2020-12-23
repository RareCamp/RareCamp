/*  Any array of items including navlinks, options in selectbox */
import { IconNameType } from 'components/Icon/Icon';

type SidebarLinkType = {
  name: string;
  icon: IconNameType;
};
export const SIDEBAR_LINKS: SidebarLinkType[] = [
  { name: 'Dashboard', icon: 'dashboard' },
  { name: 'Disease Profile', icon: 'list' },
];

export const HOME_TABLE_HEADINGS = [
  'TaskName',
  'Status',
  'Owner',
  'Budget',
  'Duration',
  'Start Date',
  'End Date',
];
