import React from 'react';
import { View } from 'react-native';

import { formatCurrency } from 'lib/helpers';
import { CardItemContainer } from 'lib/styles/common';
import { Product } from 'lib/types';

import {
  ProductItemTitle,
  ProductItemSubtitle,
  ProductItemPrice,
} from './ProductItem.styles';

export interface Props {
  product: Product;
  onPress(): void;
}

export default function ProductItem({ product, onPress }: Props) {
  return (
    <CardItemContainer onPress={onPress}>
      <View>
        <ProductItemTitle>{product.name}</ProductItemTitle>
        <ProductItemSubtitle>Quantity: {product.quantity}</ProductItemSubtitle>
      </View>
      <ProductItemPrice>{formatCurrency(product.price)}</ProductItemPrice>
    </CardItemContainer>
  );
}
