export interface User {
    firstName: string;
    email: string;
    gender: string;
    username: string;
    password: string;
    acceptTerms: boolean;
    id: number;
}

export interface CurrentUser {
    customerId: number;
    customerName: string;
    type: string;
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

