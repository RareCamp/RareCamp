import React from 'react';
import styles from 'styles/input.module.css';

type InputFieldProps = {
  className?: string;
  placeholder: string;
  type?: string;
  name: string;
  error?: string | null;
  label?: string;
  maxLength?: number;
  onChange?: () => void;
  onBlur?: () => void;
  onFocus?: () => void;
  reference: any;
};

const InputField = ({
  placeholder = '',
  onBlur,
  onFocus,
  onChange,
  className,
  type = 'text',
  label,
  name,
  error,
  maxLength,
  reference,
}: InputFieldProps) => {
  const containerClassNames = `${className} ${styles['input-field']}`;
  const inputClassNames = `${
    error ? styles['input-has-error'] : styles['input-text']
  }`;
  return (
    <div className={containerClassNames} data-testid="InputField">
      <label htmlFor={name}>{label}</label>
      <input
        ref={reference}
        className={inputClassNames}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        placeholder={placeholder}
        type={type}
        id={name}
        name={name}
        maxLength={maxLength}
      />
      {error && <div className={styles['input-error']}>{error}</div>}
    </div>
  );
};

export default InputField;
