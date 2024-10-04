export type User = {
  _id: string;
  email: string;
  name: string;
  addressLine1: string;
  city: string;
  country: string;
};

export type ServiceItem = {
  _id: string;
  name: string;
  price: number;
};

export type Services = {
  _id: string;
  user: string;
  restaurantName: string;
  city: string;
  country: string;
  cuisines: string[];
  serviceItems: ServiceItem[];
  imageUrl: string;
  lastUpdated: string;
};
