import React from 'react';
import { FlatList } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { EmptyListMessage, ProductItem } from 'components';

import { useFetch } from 'lib/hooks';
import { Separator, ScreenContainer } from 'lib/styles/common';
import { NavigationRoutes, Product } from 'lib/types';

export default function ProductsListScreen() {
  const navigation = useNavigation();

  const {
    data: products,
    loading,
    revalidate,
  } = useFetch<Product[]>('/products');

  function onProductPress(productId: string) {
    navigation.navigate(NavigationRoutes.PRODUCT_DETAILS, {
      productId: productId,
    });
  }

  return (
    <ScreenContainer>
      <FlatList
        data={products}
        onRefresh={revalidate}
        refreshing={loading}
        ListEmptyComponent={
          <EmptyListMessage
            iconName="shopping"
            message="No registered products were found"
          />
        }
        ItemSeparatorComponent={() => <Separator />}
        renderItem={({ item }) => (
          <ProductItem product={item} onPress={() => onProductPress(item.id)} />
        )}
      />
    </ScreenContainer>
  );
}
