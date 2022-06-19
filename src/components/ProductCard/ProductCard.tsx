import React from 'react';
import { IProduct } from '../../App';
import styles from './productcard.sass';

interface IProductCardProps extends IProduct {
  hover: boolean,
  setHover: (value: boolean) => void,
  selected: boolean,
  setSelected: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void,
  disabled: boolean,
}

export function ProductCard(props: IProductCardProps) {
  const classes = {
    inner: [
      styles.inner,
      props.disabled && styles.inner_disabled || '',
      props.hover && styles.inner_hover || '',
      props.selected && styles.inner_selected || '',
    ].join(' '),

    sizeBlock: [
      styles.size,
      props.disabled && styles.size_disabled,
      props.hover && styles.size_hover || '',
      props.selected && styles.size_selected || '',
    ].join(' '),

    slogan: [
      styles.slogan,
      props.hover && props.selected && styles.slogan_selected_hover || ''
    ].join(' '),

    description: [
      styles.description,
      props.disabled && styles.description_disabled || ''
    ].join(' '),

    picture: [
      styles.picture,
      props.disabled && styles.picture_disabled || ''
    ].join(' '),

    sublink: [
      styles.sublink,
      props.hover && styles.sublink_hover || ''
    ].join(' '),

    link: [
      styles.link,
      props.disabled && styles.link_disabled || ''
    ].join(' '),
  };

  return (
    <article className={styles.wrapper}>
      <div className={classes.inner}>
        <div className={styles.content}>
          <p className={classes.slogan}>
            {props.hover && props.selected && 'Котэ не одобряет?' || 'Сказочное заморское яство'}
          </p>

          <h2 className={styles.title}>
            <a
              className={classes.link}
              href="#"
              onMouseOver={() => { props.setHover(true) }}
              onMouseOut={() => { props.setHover(false) }}
              onClick={(event) => { props.setSelected(event) }}
            >
              <span className={styles.brand}>{props.brand}</span>
              <span className={styles.name}>{props.name}</span>
            </a>
          </h2>

          <div className={styles.about}>
            <p className={styles.value}>
              {props.size * 20} порций
            </p>

            <p className={styles.promo}>
              {props.promo}
            </p>
          </div>
        </div>

        <p className={classes.sizeBlock}>
          <span className={styles.size__num}>
            {props.size}
          </span>

          <span className={styles.size__unit}> КГ</span>
        </p>

        <div className={classes.picture}></div>
      </div>

      <p className={classes.description}>
        {
          props.disabled && `Печалька, ${props.name} закончился.` ||
          props.selected && props.description ||
          <span>
            Чего сидишь? Порадуй котэ,
            <a
              className={classes.sublink}
              onClick={(event) => { props.setSelected(event) }}
            >
              купи
            </a>.
          </span>
        }
      </p>
    </article>
  );
}
