export class NavigationRoutes {
  static PRODUCTS_LIST = 'ProductsList';
  static PRODUCT_DETAILS = 'ProductDetails';
}

export type RootStackParamList = {
  ProductDetails: { productId: string };
};
