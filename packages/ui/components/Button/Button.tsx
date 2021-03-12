import React from 'react';
import type { ReactNode } from 'react';
import styles from 'styles/button.module.css';

// three different buttons, default is `primary`
type Color = 'primary' | 'secondary' | 'tertiary' | 'custom';
// three different sizes, default is `md`
type Size = 'sm' | 'md' | 'lg' | 'xs' | 'custom';
// three different button types, default is `button`
type ButtonHTMLType = 'button' | 'submit' | 'reset';

type ButtonProps = {
  icon?: ReactNode | null;
  label: string;
  onClick?: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
  className?: string | null;
  color: Color;
  size: Size;
  type?: ButtonHTMLType;
};

const Button = ({
  icon,
  label,
  onClick,
  className,
  color = 'primary',
  size = 'md',
  type = 'button',
}: ButtonProps) => {
  const btnClassses = `${className} ${
    color === 'custom' ? null : styles[`btn-${color}`]
  } ${size === 'custom' ? null : styles[`btn-${size}`]}`;

  /* eslint-disable react/button-has-type */
  return (
    <button className={btnClassses} type={type} onClick={onClick}>
      <span className="flex flex-row justify-center items-center">
        {icon ? (
          <span className="mr-2 self-center">{icon}</span>
        ) : null}
        <span>{label}</span>
      </span>
    </button>
  );
};

export default Button;
