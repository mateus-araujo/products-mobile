export class NavigationRoutes {
  static PRODUCT_DETAILS = 'ProductDetails';
  static PRODUCT_FORM = 'ProductForm';
  static PRODUCTS_LIST = 'ProductsList';
}

export type RootStackParamList = {
  ProductForm: { productId?: string };
  ProductDetails: { productId: string };
};
