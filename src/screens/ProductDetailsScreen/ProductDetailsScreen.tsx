import React from 'react';
import { FlatList } from 'react-native';

import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

import {
  CustomButton,
  EmptyListMessage,
  ModalLoading,
  ProductHistoryItem,
} from 'components';

import { formatCurrency } from 'lib/helpers';
import { useFetch } from 'lib/hooks';
import { Separator, ScreenContainer } from 'lib/styles/common';
import {
  NavigationRoutes,
  Product,
  ProductHistoryEntry,
  RootStackParamList,
} from 'lib/types';

import {
  DetailsContainer,
  DetailsItemContainer,
  DetailsItemDescription,
  DetailsItemTitle,
  HistoryHeaderContainer,
  HistoryHeaderTitle,
} from './ProductDetailsScreen.styles';

export default function ProductDetailsScreen() {
  const navigation = useNavigation();
  const { params } =
    useRoute<RouteProp<RootStackParamList, 'ProductDetails'>>();

  const { data: product, loading } = useFetch<Product>(
    `/product/${params.productId}`
  );

  const productHistory = useFetch<ProductHistoryEntry[]>(
    `/product/${params.productId}/history`
  );

  function onUpdatePress() {
    navigation.navigate(NavigationRoutes.PRODUCT_FORM, {
      productId: product?.id,
    });
  }

  return (
    <ScreenContainer>
      <ModalLoading loading={loading || productHistory.loading} />

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

      {product?.id && (
        <CustomButton
          label="Update product"
          type="default"
          onPress={onUpdatePress}
        />
      )}

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
