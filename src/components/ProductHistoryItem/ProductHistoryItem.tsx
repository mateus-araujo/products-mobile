import React from 'react';

import { formatDate } from 'lib/helpers';
import { CardItemContainer } from 'lib/styles/common';
import { ProductHistoryEntry } from 'lib/types';

import {
  ProductHistoryItemTitle,
  ProductHistoryItemSubtitle,
} from './ProductHistoryItem.styles';

export interface Props {
  productHistoryEntry: ProductHistoryEntry;
}

export default function ProductHistoryItem({ productHistoryEntry }: Props) {
  return (
    <CardItemContainer>
      <ProductHistoryItemTitle>
        Quantity: {productHistoryEntry.quantity.toString()}
      </ProductHistoryItemTitle>
      <ProductHistoryItemSubtitle>
        {formatDate(productHistoryEntry.created_at)}
      </ProductHistoryItemSubtitle>
    </CardItemContainer>
  );
}
