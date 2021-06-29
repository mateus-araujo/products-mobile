import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Alert, FlatList, ToastAndroid } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import {
  CustomButton,
  EmptyListMessage,
  FloatActionButton,
  ModalLoading,
  ProductItem,
} from 'components';

import { useFetch } from 'lib/hooks';
import api from 'lib/services/api';
import { Separator, ScreenContainer } from 'lib/styles/common';
import { NavigationRoutes, Product } from 'lib/types';

import ProductBulkUpdateModal from '../ProductBulkUpdateModal';

export default function ProductsListScreen() {
  const navigation = useNavigation();

  const [loadingRemove, setLoadingRemove] = useState(false);
  const [productsSelected, setProductsSelected] = useState<Product[]>([]);
  const [isSelectionEnabled, setSelectionEnabled] = useState(false);
  const [isUpdateModalVisible, setUpdateModalVisible] = useState(false);

  const {
    data: products,
    loading,
    revalidate,
  } = useFetch<Product[]>('/products');

  useEffect(() => {
    revalidate();
  }, [navigation.isFocused, revalidate]);

  function onProductPress(productId: string) {
    navigation.navigate(NavigationRoutes.PRODUCT_DETAILS, {
      productId: productId,
    });
  }

  function onRemoveProduct(productId: string) {
    async function handle() {
      try {
        setLoadingRemove(true);
        await api.delete(`/product/${productId}`);

        ToastAndroid.show('Product deleted with success', ToastAndroid.SHORT);
        revalidate();
        setProductsSelected([]);
        setSelectionEnabled(false);
      } catch (error) {
        Alert.alert('Error', 'Error removing product');
      } finally {
        setLoadingRemove(false);
      }
    }

    Alert.alert(
      'Remove product',
      'Do you really want to remove this product?',
      [{ text: 'Remove', onPress: handle }, { text: 'Cancel' }]
    );
  }

  function onSelectProduct(product: Product) {
    setProductsSelected((state) =>
      state?.some((item) => item.id === product.id)
        ? state.filter((item) => item.id !== product.id)
        : [...state, product]
    );
  }

  function handleCloseBulkUpdateModal() {
    setProductsSelected([]);
    setSelectionEnabled(false);
    setUpdateModalVisible(false);
    revalidate();
  }

  useEffect(() => {
    if (!isSelectionEnabled) {
      setProductsSelected([]);
    }
  }, [isSelectionEnabled]);

  return (
    <ScreenContainer>
      <ModalLoading loading={loading || loadingRemove} />

      <ProductBulkUpdateModal
        visible={isUpdateModalVisible}
        onClose={handleCloseBulkUpdateModal}
        productsSelected={productsSelected}
      />

      {productsSelected?.length === 1 && (
        <CustomButton
          label="Remove product"
          onPress={() => onRemoveProduct(productsSelected[0].id)}
        />
      )}
      {productsSelected?.length > 1 && (
        <CustomButton
          label="Update products"
          type="outline"
          onPress={() => setUpdateModalVisible(true)}
        />
      )}

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
          <ProductItem
            isSelected={
              productsSelected?.some((product) => product.id === item.id) ||
              false
            }
            isSelectionEnabled={isSelectionEnabled}
            onSelectProduct={onSelectProduct}
            onPress={() =>
              isSelectionEnabled
                ? setSelectionEnabled(false)
                : onProductPress(item.id)
            }
            onLongPress={() => setSelectionEnabled(!isSelectionEnabled)}
            product={item}
          />
        )}
      />

      <FloatActionButton
        onPress={() => navigation.navigate(NavigationRoutes.PRODUCT_FORM)}
      />
    </ScreenContainer>
  );
}
