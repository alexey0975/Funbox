import React, { useState } from 'react';
import { IProduct } from '../../App';
import { addProducts, removeProducts, store } from '../../store';
import { ProductCard } from '../ProductCard/ProductCard';

export function ProductCardContainer(props: IProduct) {
  const [selected, setSelected] = useState(false);
  const [hover, setHover] = useState(false);
  const disabled = !props.in_stock;

  function cardClicked(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();

    if (disabled) return;
    if (!selected) {
      store.dispatch(addProducts(props.id));
    } else {
      store.dispatch(removeProducts(props.id));
    }

    setHover(false);
    setSelected(!selected);
  }

  function cardHovered(value: boolean) {
    if (disabled) return;
    setHover(value);
  }

  return (
    <ProductCard
      hover={hover}
      setHover={(value) => { cardHovered(value) }}
      selected={selected}
      setSelected={(event) => { cardClicked(event) }}
      disabled={disabled}

      id={props.id}
      brand={props.brand}
      name={props.name}
      promo={props.promo}
      description={props.description}
      size={props.size}
      in_stock={props.in_stock}
    />
  );
}
