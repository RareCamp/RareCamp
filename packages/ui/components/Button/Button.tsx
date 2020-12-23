import React from 'react';
import type { ReactNode } from 'react';

type ButtonProps = {
  icon: ReactNode | null;
  label: string;
  onClick: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
  className?: string | null;
};

const Button = ({ icon, label, onClick, className }: ButtonProps) => {
  return (
    <button
      className={className ?? 'py-4 px-2'}
      type="button"
      onClick={onClick}
    >
      <span className="flex flex-row">
        {icon}
        <span className="text-gray-400">{label}</span>
      </span>
    </button>
  );
};

export default Button;
