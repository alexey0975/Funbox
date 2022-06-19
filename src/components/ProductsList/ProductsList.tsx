import React from 'react';
import { IProduct } from '../../App';
import { useSelector } from "react-redux";
import { ProductCardContainer } from '../ProductCardContainer';
import styles from './productslist.sass';
import { RootState } from '../../store';

export function ProductsList() {
  const data = useSelector<RootState, IProduct[]>(state => state.products)
  return (
    <ul className={styles.list}>
      {
        data.map(product => {
          return <li className={styles.item} key={product.id.toString()}>
            <ProductCardContainer
              brand={product.brand}
              name={product.name}
              promo={product.promo}
              description={product.description}
              size={product.size}
              in_stock={product.in_stock}
              id={product.id}
            />
          </li>
        })
      }
    </ul>
  );
}
