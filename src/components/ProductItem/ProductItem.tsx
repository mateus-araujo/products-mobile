import React from 'react';
import { View } from 'react-native';

import { formatCurrency } from 'lib/helpers';
import { Product } from 'lib/types';

import {
  ProductItemContainer,
  ProductItemTitle,
  ProductItemSubtitle,
  ProductItemPrice,
} from './ProductItem.styles';

export interface Props {
  product: Product;
}

export default function ProductItem({ product }: Props) {
  return (
    <ProductItemContainer>
      <View>
        <ProductItemTitle>{product.name}</ProductItemTitle>
        <ProductItemSubtitle>Quantity: {product.quantity}</ProductItemSubtitle>
      </View>
      <ProductItemPrice>{formatCurrency(product.price)}</ProductItemPrice>
    </ProductItemContainer>
  );
}
