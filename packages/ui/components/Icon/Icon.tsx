import * as Icons from './Icons';

const components = {
  'chevron-down': Icons.ChevronDown,
  'chevron-right': Icons.ChevronRight,
  list: Icons.List,
  dashboard: Icons.Dashboard,
  bell: Icons.Bell,
  dot: Icons.DotImage,
};

export type IconNameType = keyof typeof components;

type Props = {
  name: IconNameType;
  className?: string;
};

const Icon = ({ name, className }: Props) => {
  const IconComponent = components[name];
  return (
    <div>
      <IconComponent className={className} />
    </div>
  );
};

export default Icon;
