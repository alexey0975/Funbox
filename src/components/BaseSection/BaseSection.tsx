import React from 'react';
import { BaseTitle } from '../BaseTitle';
import styles from './basesection.sass';

interface IProdutsSectionProps {
  title: string,
  children?: React.ReactNode
}

export function BaseSection({ title, children }: IProdutsSectionProps) {
  return (
    <section className={styles.section}>
      <BaseTitle As='h1' className={styles.title} text={title} />
      {children}
    </section>
  );
}
