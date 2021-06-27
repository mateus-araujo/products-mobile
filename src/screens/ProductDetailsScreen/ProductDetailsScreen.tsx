import React from 'react';
import { FlatList } from 'react-native';

import { RouteProp, useRoute } from '@react-navigation/native';

import { CustomButton, EmptyListMessage, ProductHistoryItem } from 'components';

import { formatCurrency } from 'lib/helpers';
import { useFetch } from 'lib/hooks';
import { Separator, ScreenContainer } from 'lib/styles/common';
import { Product, ProductHistoryEntry, RootStackParamList } from 'lib/types';

import {
  DetailsContainer,
  DetailsItemContainer,
  DetailsItemDescription,
  DetailsItemTitle,
  HistoryHeaderContainer,
  HistoryHeaderTitle,
} from './ProductDetailsScreen.styles';

export default function ProductDetailsScreen() {
  const { params } =
    useRoute<RouteProp<RootStackParamList, 'ProductDetails'>>();

  const { data: product } = useFetch<Product>(`/product/${params.productId}`);

  const productHistory = useFetch<ProductHistoryEntry[]>(
    `/product/${params.productId}/history`
  );

  return (
    <ScreenContainer>
      {product && (
        <DetailsContainer>
          <DetailsItemContainer>
            <DetailsItemTitle>Name:</DetailsItemTitle>
            <DetailsItemDescription>{product.name}</DetailsItemDescription>
          </DetailsItemContainer>
          <DetailsItemContainer>
            <DetailsItemTitle>Quantity:</DetailsItemTitle>
            <DetailsItemDescription>{product.quantity}</DetailsItemDescription>
          </DetailsItemContainer>
          <DetailsItemContainer>
            <DetailsItemTitle>Price:</DetailsItemTitle>
            <DetailsItemDescription>
              {formatCurrency(product.price)}
            </DetailsItemDescription>
          </DetailsItemContainer>
        </DetailsContainer>
      )}

      <CustomButton label="Update product" type="default" />

      <FlatList
        data={productHistory.data}
        onRefresh={productHistory.revalidate}
        refreshing={productHistory.loading}
        ListHeaderComponent={
          <HistoryHeaderContainer>
            <HistoryHeaderTitle>Product History</HistoryHeaderTitle>
          </HistoryHeaderContainer>
        }
        ListEmptyComponent={
          <EmptyListMessage
            iconName="history"
            message="No history changes were found for this product"
          />
        }
        ItemSeparatorComponent={() => <Separator />}
        renderItem={({ item }) => (
          <ProductHistoryItem productHistoryEntry={item} />
        )}
      />
    </ScreenContainer>
  );
}
