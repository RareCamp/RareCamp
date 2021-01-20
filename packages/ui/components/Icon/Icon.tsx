import * as Icons from './Icons';

const components = {
  'chevron-down': Icons.ChevronDown,
  'chevron-right': Icons.ChevronRight,
  list: Icons.List,
  dashboard: Icons.Dashboard,
  bell: Icons.Bell,
  dot: Icons.DotImage,
  users: Icons.Users,
  close: Icons.Close,
  arrowleft: Icons.ArrowLeft,
  'add-circled': Icons.AddCircle,
  'chevron-left': Icons.ChevronLeft,
};

export type IconNameType = keyof typeof components;

type Props = {
  name: IconNameType;
  className?: string;
};

const Icon = ({ name, className }: Props) => {
  const IconComponent = components[name];
  return (
    <div data-testid="Icon">
      <IconComponent className={className} />
    </div>
  );
};

export default Icon;
