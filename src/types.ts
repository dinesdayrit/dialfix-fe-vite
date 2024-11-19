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
  serviceProviderAbout: string;
  officeHours: string;
  addressLine1: string;
  city: string;
  country: string;
  serviceSector: string[];
  serviceItems: ServiceItem[];
  imageUrl: string;
  lastUpdated: string;
};
export type OrderStatus =
  | "placed"
  | "confirmed"
  | "inProgress"
  | "serviceCompleted";

export type Appointment = {
  _id: string;
  serviceProvider: Services;
  user: User;
  deliveryDetails: {
    name: string;
    addressLine1: string;
    city: string;
    email: string;
    appointmentDate: string;
  };
  status: OrderStatus;
  createdAt: string;
};

export type ProvidersSearchResponse = {
  data: Services[];
  pagination: {
    total: number;
    page: number;
    pages: number;
  };
};
