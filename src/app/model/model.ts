export interface FlightList {
    flightId: number;
    flightName: string;
    flightScheduleId: number;
    scheduleDate: string;
    availableSeats: number;
    source: string;
    destination: string;
    fare: number;
}

export interface Destination {
    locationId: number;
    locationName: string;
}

export interface DropdownOption {
    name: string;
    value: string;
}

export interface ModalButton {
    name: string;
}
export interface Product {
    productId: number;
    productName: string;
    category: string;
    price: number;
}
export const paymentOptions = [
    {id: 1, name: 'Debit/Credit card'},
    {id: 2, name: 'paytm'},
    {id: 3, name: 'G-Pay'},
  ];

