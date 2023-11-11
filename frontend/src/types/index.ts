type Product = {
  _id: string;
  name: string;
  image: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  countInStock: number;
  rating: number;
  numReviews: number;
};
type CartItem = Product & {
  qty: number;
};

type ShippingAddress = {
  address: string;
  city: string;
  postalCode: string;
  country: string;
};

type CartState = {
  cartItems: CartItem[];
  shippingAddress: ShippingAddress;
  paymentMethod: string;
  itemsPrice: number;
  shippingPrice: number;
  taxPrice: number;
  totalPrice: number;
};

type UserInfo = {
  _id: string;
  name: string;
  email: string;
  isAdmin: boolean;
};
type LoginPayload = {
  email: string;
  password: string;
};
type RegisterPayload = {
  name: string;
  email: string;
  password: string;
};
type UpdateUserInfo = {
  _id: string;
  name: string;
  email: string;
  password: string;
};
type OrderItem = {
  name: string;
  qty: number;
  image: string;
  price: number;
  product: string;
};

type Order = {
  _id: string;
  user: { _id: string; name: string; email: string };
  orderItems: OrderItem[];
  paymentMethod: string;
  shippingAddress: ShippingAddress;
  itemsPrice: number;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
  isPaid: boolean;
  isDelivered: boolean;
  createdAt: string;
  updatedAt: string;
};

export type {
  CartItem,
  CartState,
  LoginPayload,
  Order,
  Product,
  RegisterPayload,
  ShippingAddress,
  UpdateUserInfo,
  UserInfo,
};
