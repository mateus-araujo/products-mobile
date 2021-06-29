import React from 'react';
import { View } from 'react-native';

import Checkbox from 'expo-checkbox';
import { useTheme } from 'styled-components';

import { formatCurrency } from 'lib/helpers';
import { CardItemContainer } from 'lib/styles/common';
import { Product } from 'lib/types';

import {
  ProductItemContent,
  ProductItemTitle,
  ProductItemSubtitle,
  ProductItemPrice,
} from './ProductItem.styles';

export interface Props {
  isSelected: boolean;
  isSelectionEnabled: boolean;
  onLongPress(): void;
  onPress(): void;
  onSelectProduct(product: Product): void;
  product: Product;
}

export default function ProductItem({
  isSelected,
  isSelectionEnabled,
  onSelectProduct,
  onPress,
  onLongPress,
  product,
}: Props) {
  const { colors } = useTheme();

  return (
    <CardItemContainer onPress={onPress} onLongPress={onLongPress}>
      <ProductItemContent>
        {isSelectionEnabled && (
          <Checkbox
            // eslint-disable-next-line react-native/no-inline-styles
            style={{ marginRight: 10 }}
            value={isSelected}
            onValueChange={() => onSelectProduct(product)}
            color={isSelected ? colors.primary : undefined}
          />
        )}

        <View>
          <ProductItemTitle>{product.name}</ProductItemTitle>
          <ProductItemSubtitle>
            Quantity: {product.quantity}
          </ProductItemSubtitle>
        </View>
      </ProductItemContent>

      <ProductItemPrice>{formatCurrency(product.price)}</ProductItemPrice>
    </CardItemContainer>
  );
}
