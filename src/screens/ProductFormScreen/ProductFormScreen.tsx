import React from 'react';
import { useEffect } from 'react';
import { Alert, ToastAndroid } from 'react-native';

import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import {
  CurrencyInput,
  CustomButton,
  CustomInput,
  ModalLoading,
} from 'components';

import { getFormFieldError, setFormFieldErrors } from 'lib/helpers';
import { useFetch } from 'lib/hooks';
import api from 'lib/services/api';
import { ScreenContainer } from 'lib/styles/common';
import { NavigationRoutes, Product, RootStackParamList } from 'lib/types';

export default function ProductFormScreen() {
  const { isFocused, navigate, setOptions } = useNavigation();
  const { params } = useRoute<RouteProp<RootStackParamList, 'ProductForm'>>();

  useEffect(() => {
    setOptions({
      title: params?.productId ? 'Update product' : 'Create Product',
    });
  }, [params, setOptions]);

  const {
    errors,
    handleSubmit,
    isSubmitting,
    isValid,
    setFieldValue,
    setValues,
    touched,
    values,
  } = useFormik({
    initialValues: {
      name: '',
      quantity: '',
      price: 0,
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().trim().required(),
      quantity: Yup.number().min(0, 'Min value is 0').required(),
      price: Yup.number().min(0, 'Min value is 0').required(),
    }),
    onSubmit: async (values, { setSubmitting, setFieldError }) => {
      try {
        setSubmitting(true);

        if (params?.productId) {
          await api.put(`/product/${params.productId}`, values);
        } else {
          await api.post('/product', values);
        }

        ToastAndroid.show('Product saved with success', ToastAndroid.LONG);

        navigate(NavigationRoutes.PRODUCTS_LIST);
      } catch (error) {
        if (error.response.status !== 422) {
          Alert.alert('Error on save ', 'Error saving changes');

          return;
        }

        setFormFieldErrors(error, setFieldError);
      } finally {
        setSubmitting(false);
      }
    },
  });

  const { loading, revalidate } = useFetch<Product>(
    params?.productId ? `/product/${params.productId}` : null,
    {
      onSuccess: (product) => {
        setValues({
          name: product.name,
          quantity: product.quantity.toString(),
          price: product.price,
        });
      },
    }
  );

  useEffect(() => {
    revalidate();
  }, [isFocused, revalidate]);

  function handleInputChange<ValueType>(field: string) {
    return (value: ValueType) => {
      //  const formattedValue = value || typeof value === 'number' ? 0 : '';

      setFieldValue(field, value);
    };
  }

  return (
    <ScreenContainer>
      <ModalLoading loading={isSubmitting || loading} />

      <CustomInput
        label="Name"
        inputProps={{
          onChangeText: handleInputChange('name'),
          defaultValue: values.name,
        }}
        errorMessage={getFormFieldError('name', errors, touched)}
      />
      <CustomInput
        label="Quantity"
        inputProps={{
          keyboardType: 'numeric',
          onChangeText: handleInputChange('quantity'),
          defaultValue: values.quantity,
        }}
        errorMessage={getFormFieldError('quantity', errors, touched)}
      />
      <CurrencyInput
        label="Price"
        inputProps={{
          onChangeValue: handleInputChange('price'),
          value: values.price,
        }}
        errorMessage={getFormFieldError('price', errors, touched)}
      />

      <CustomButton
        label="Save"
        type={isValid ? 'default' : 'disabled'}
        onPress={handleSubmit}
      />
    </ScreenContainer>
  );
}
