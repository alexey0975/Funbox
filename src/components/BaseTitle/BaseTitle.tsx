import React from 'react';

interface IBaseTitleProps {
  children: React.ReactNode
  className: string,
  As?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'caption',
}

export function BaseTitle({As = 'h2', children, className} : IBaseTitleProps) {
  return (
    <As className={className}>
      {children}
    </As>
  );
}
