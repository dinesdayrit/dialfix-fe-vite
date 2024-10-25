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
  serviceProviderName: string;
  city: string;
  country: string;
  cuisines: string[];
  serviceItems: ServiceItem[];
  imageUrl: string;
  lastUpdated: string;
};

export type ProvidersSearchResponse = {
  data: Services[];
  pagination: {
    total: number;
    page: number;
    pages: number;
  };
};