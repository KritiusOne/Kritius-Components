import React, { useMemo } from 'react';
import classNames from 'classnames';
import { ColorsSupported, Sizes } from '../../types/styleTypes';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  primary?: boolean
  size?: 'small' | 'medium' | 'large'
  colorButton: 'blue' | 'red' | 'yellow' | 'Dark' | 'Light'
}

const getColorClasses = (primary: boolean, colorButton: keyof ColorsSupported) => {
  const baseClasses: ColorsSupported = {
    blue: 'border-blue-700 text-blue-700 active:bg-blue-700 active:text-white focus:text-blue-700 focus:bg-transparent',
    red: 'border-red-700 text-red-700 active:bg-red-700 active:text-white focus:text-red-700 focus:bg-transparent',
    yellow: 'border-yellow-400 text-yellow-500 active:bg-yellow-400 active:text-white focus:text-yellow-400 focus:bg-transparent',
    Dark: 'border-black text-black active:bg-black active:text-white focus:text-black focus:bg-transparent',
    Light: 'border-white text-white',
  };

  const primaryClasses: ColorsSupported = {
    blue: 'bg-blue-500 border-blue-500 hover:bg-blue-800 focus:bg-white focus:text-black active:text-white active:bg-slate-700',
    red: 'bg-red-700 border-red-700 hover:bg-red-400 hover:text-black focus:text-white focus:bg-black active:bg-stone-700',
    yellow: 'bg-yellow-300 border-yellow-300 text-black hover:bg-yellow-600 focus:bg-amber-500 active:bg-amber-500',
    Dark: 'bg-slate-900 border-slate-900 hover:bg-slate-600 focus:bg-neutral-700 active:bg-opacity-50',
    Light: 'bg-white border-white text-black hover:bg-slate-300 focus:bg-gray-500 active:bg-opacity-50',
  };

  return primary ? primaryClasses[colorButton] : `bg-transparent ${baseClasses[colorButton]} hover:border-opacity-50`;
};

const getSizeClasses = (size: keyof Sizes) => {
  const sizeClasses: Sizes = {
    small: 'min-w-11 p-1',
    medium: 'min-w-14 px-2 py-1',
    large: 'min-w-16 p-2',
  };

  return sizeClasses[size];
};

export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = 'medium',
  colorButton,
  children,
  ...props
}) => {
  const buttonClass = useMemo(() => classNames(
    'font-bold text-md text-center border-2 border-solid rounded-md transition-colors ease-out',
    getColorClasses(primary, colorButton),
    getSizeClasses(size)
  ), [primary, colorButton, size]);

  return (
    <button {...props} type="button" className={buttonClass}>
      {children}
    </button>
  );
};