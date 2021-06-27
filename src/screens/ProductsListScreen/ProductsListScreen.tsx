import React from 'react';
import { FlatList } from 'react-native';

import { EmptyListMessage, ProductItem } from 'components';

import { useFetch } from 'lib/hooks';
import { Separator, ScreenContainer } from 'lib/styles/common';
import { Product } from 'lib/types';

export default function ProductsListScreen() {
  const {
    data: products,
    loading,
    revalidate,
  } = useFetch<Product[]>('/products');

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
        renderItem={({ item }) => <ProductItem product={item} />}
      />
    </ScreenContainer>
  );
}
