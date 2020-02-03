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
export interface TrackTicket {
    ticketId: number;
    bookingDate: string;
    emailId: string;
    phoneNumber: number;
    paymentType: string;
    totalFare: number;
    status: string;
    source: string;
    destination: string;
    passagerList: Passenger[];
}
export interface Passenger {
    name: string;
    age: number;
    aadharNumber: number;
}
export interface ModalButton {
    name: string;
}

export const paymentOptions = [
    // { id: 1; name: 'Debit/Credit card' };
    // { id: 2; name: 'paytm' };
    // { id: 3; name: 'G-Pay' };
  ];

