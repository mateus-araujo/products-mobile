import React from 'react';
import { Alert, ToastAndroid, Modal } from 'react-native';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import {
  CurrencyInput,
  CustomButton,
  CustomInput,
  ModalLoading,
} from 'components';

import { getFormFieldError, setFormFieldErrors } from 'lib/helpers';
import api from 'lib/services/api';
import { Product } from 'lib/types';

import {
  ModalBackground,
  ModalContentContainer,
  ModalHeaderContainer,
  ModalHeaderTitle,
} from './ProductBulkUpdateModal.styles';

interface Props {
  onClose(): void;
  productsSelected: Product[];
  visible: boolean;
}

export default function ProductBulkUpdateModal({
  onClose,
  productsSelected,
  visible,
}: Props) {
  const {
    errors,
    handleSubmit,
    isSubmitting,
    isValid,
    setFieldValue,
    touched,
    values,
  } = useFormik({
    initialValues: {
      quantity: '',
      price: 0,
    },
    validationSchema: Yup.object().shape({
      quantity: Yup.number().min(0, 'Min value is 0').required(),
      price: Yup.number().min(0, 'Min value is 0').required(),
    }),
    onSubmit: async (values, { resetForm, setSubmitting, setFieldError }) => {
      try {
        setSubmitting(true);

        await api.post('/products/bulk/update', {
          products: productsSelected.map((product) => ({
            ...product,
            quantity: values.quantity,
            price: values.price,
          })),
        });

        ToastAndroid.show('Products saved with success', ToastAndroid.LONG);
        resetForm();
        onClose();
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

  function handleInputChange<ValueType>(field: string) {
    return (value: ValueType) => {
      //  const formattedValue = value || typeof value === 'number' ? 0 : '';

      setFieldValue(field, value);
    };
  }

  return (
    <Modal visible={visible} transparent={true} onRequestClose={onClose}>
      <ModalLoading loading={isSubmitting} />
      <ModalBackground>
        <ModalContentContainer>
          <ModalHeaderContainer>
            <ModalHeaderTitle>Update Products</ModalHeaderTitle>
          </ModalHeaderContainer>

          <CustomInput
            whiteBackground
            label="Quantity"
            inputProps={{
              keyboardType: 'numeric',
              onChangeText: handleInputChange('quantity'),
              defaultValue: values.quantity,
            }}
            errorMessage={getFormFieldError('quantity', errors, touched)}
          />
          <CurrencyInput
            whiteBackground
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
          <CustomButton label="Cancel" type="outline" onPress={onClose} />
        </ModalContentContainer>
      </ModalBackground>
    </Modal>
  );
}
