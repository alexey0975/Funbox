import React from "react";
import { Provider } from "react-redux";
import { getProducts, store } from "./store";
import { ProductsList } from "./components/ProductsList";
import { BaseSection } from "./components/BaseSection";
import { Layout } from "./components/Layout";
import './main.global.sass';
import data from '../data/data.json';

export interface IProduct {
  id: number,
  brand: string,
  name: string,
  promo: string,
  description: string,
  size: number,
  in_stock: boolean,
}

store.dispatch(getProducts(data));

export const cardContext = React.createContext<IProduct[]>([]);

export function App() {
  return (
    <main>
      <Layout>
        <BaseSection title="Ты сегодня покормил кота?">
          <Provider store={store} >
            <ProductsList />
          </Provider>
        </BaseSection>
      </Layout>
    </main>
  )
}
