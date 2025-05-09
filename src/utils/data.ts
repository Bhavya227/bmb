
import { Donor, DonationRecord, BloodInventory, BloodType } from "./types";

export const donors: Donor[] = [
  {
    id: "d-001",
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "555-123-4567",
    bloodType: "O+",
    gender: "Male",
    age: 35,
    weight: 180,
    lastDonation: "2023-12-15",
    address: "123 Main Street",
    city: "Springfield",
    state: "IL",
    zipCode: "62704",
    medicalConditions: [],
    eligibleToDonate: true
  },
  {
    id: "d-002",
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    phone: "555-987-6543",
    bloodType: "A-",
    gender: "Female",
    age: 28,
    weight: 135,
    lastDonation: "2024-01-20",
    address: "456 Oak Avenue",
    city: "Riverside",
    state: "CA",
    zipCode: "92501",
    medicalConditions: ["Mild Allergies"],
    eligibleToDonate: true
  },
  {
    id: "d-003",
    name: "Michael Brown",
    email: "michael.b@example.com",
    phone: "555-456-7890",
    bloodType: "B+",
    gender: "Male",
    age: 42,
    weight: 210,
    lastDonation: "2023-11-05",
    address: "789 Elm Street",
    city: "Bridgeport",
    state: "CT",
    zipCode: "06604",
    medicalConditions: ["Hypertension"],
    eligibleToDonate: false
  },
  {
    id: "d-004",
    name: "Emily Davis",
    email: "emily.davis@example.com",
    phone: "555-234-5678",
    bloodType: "AB+",
    gender: "Female",
    age: 24,
    weight: 125,
    lastDonation: null,
    address: "101 Pine Road",
    city: "Portland",
    state: "OR",
    zipCode: "97205",
    medicalConditions: [],
    eligibleToDonate: true
  },
  {
    id: "d-005",
    name: "Robert Wilson",
    email: "rob.wilson@example.com",
    phone: "555-876-5432",
    bloodType: "O-",
    gender: "Male",
    age: 50,
    weight: 195,
    lastDonation: "2024-02-10",
    address: "222 Cedar Lane",
    city: "Austin",
    state: "TX",
    zipCode: "78701",
    medicalConditions: ["Diabetes Type 2"],
    eligibleToDonate: true
  }
];

export const donationRecords: DonationRecord[] = [
  {
    id: "r-001",
    donorId: "d-001",
    donationDate: "2023-12-15",
    bloodAmount: 470,
    center: "Springfield Medical Center",
    staffId: "s-045",
    status: "Completed"
  },
  {
    id: "r-002",
    donorId: "d-002",
    donationDate: "2024-01-20",
    bloodAmount: 450,
    center: "Riverside Blood Bank",
    staffId: "s-023",
    status: "Completed"
  },
  {
    id: "r-003",
    donorId: "d-003",
    donationDate: "2023-11-05",
    bloodAmount: 500,
    center: "Community Blood Center",
    staffId: "s-067",
    status: "Rejected",
    notes: "High blood pressure detected"
  },
  {
    id: "r-004",
    donorId: "d-005",
    donationDate: "2024-02-10",
    bloodAmount: 480,
    center: "Austin Medical Center",
    staffId: "s-032",
    status: "Completed"
  }
];

export const bloodInventory: BloodInventory[] = [
  { bloodType: "A+", available: 25, required: 30 },
  { bloodType: "A-", available: 15, required: 10 },
  { bloodType: "B+", available: 18, required: 25 },
  { bloodType: "B-", available: 8, required: 15 },
  { bloodType: "AB+", available: 5, required: 5 },
  { bloodType: "AB-", available: 3, required: 5 },
  { bloodType: "O+", available: 35, required: 40 },
  { bloodType: "O-", available: 12, required: 25 }
];

export const getBloodTypeCompatibility = (bloodType: BloodType): { canDonateTo: BloodType[], canReceiveFrom: BloodType[] } => {
  switch (bloodType) {
    case 'A+':
      return {
        canDonateTo: ['A+', 'AB+'],
        canReceiveFrom: ['A+', 'A-', 'O+', 'O-']
      };
    case 'A-':
      return {
        canDonateTo: ['A+', 'A-', 'AB+', 'AB-'],
        canReceiveFrom: ['A-', 'O-']
      };
    case 'B+':
      return {
        canDonateTo: ['B+', 'AB+'],
        canReceiveFrom: ['B+', 'B-', 'O+', 'O-']
      };
    case 'B-':
      return {
        canDonateTo: ['B+', 'B-', 'AB+', 'AB-'],
        canReceiveFrom: ['B-', 'O-']
      };
    case 'AB+':
      return {
        canDonateTo: ['AB+'],
        canReceiveFrom: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']
      };
    case 'AB-':
      return {
        canDonateTo: ['AB+', 'AB-'],
        canReceiveFrom: ['A-', 'B-', 'AB-', 'O-']
      };
    case 'O+':
      return {
        canDonateTo: ['A+', 'B+', 'AB+', 'O+'],
        canReceiveFrom: ['O+', 'O-']
      };
    case 'O-':
      return {
        canDonateTo: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
        canReceiveFrom: ['O-']
      };
  }
};
