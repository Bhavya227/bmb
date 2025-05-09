
export interface Donor {
  id: string;
  name: string;
  email: string;
  phone: string;
  bloodType: BloodType;
  gender: 'Male' | 'Female' | 'Other';
  age: number;
  weight: number;
  lastDonation: string | null;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  medicalConditions: string[];
  eligibleToDonate: boolean;
}

export type BloodType = 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';

export interface DonationRecord {
  id: string;
  donorId: string;
  donationDate: string;
  bloodAmount: number;
  center: string;
  staffId: string;
  status: 'Completed' | 'Processing' | 'Rejected';
  notes?: string;
}

export interface BloodInventory {
  bloodType: BloodType;
  available: number;
  required: number;
}
