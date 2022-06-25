import React from 'react';
import { BaseTitle } from '../BaseTitle';
import styles from './basesection.sass';

interface IProdutsSectionProps {
  titleEl?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
  titleContent: React.ReactNode,
  children?: React.ReactNode,
}

export function BaseSection({ titleEl = 'h2', titleContent, children }: IProdutsSectionProps) {
  return (
    <section className={styles.section}>
      <BaseTitle As={titleEl} className={styles.title} children={titleContent} />
      {children}
    </section>
  );
}
