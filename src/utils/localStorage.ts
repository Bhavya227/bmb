
import { Donor } from "./types";

// Get donors from localStorage
export const getDonors = (): Donor[] => {
  const storedDonors = localStorage.getItem('donors');
  if (storedDonors) {
    return JSON.parse(storedDonors);
  }
  return [];
};

// Save donors to localStorage
export const saveDonors = (donors: Donor[]): void => {
  localStorage.setItem('donors', JSON.stringify(donors));
};

// Add a new donor to localStorage
export const addDonor = (donor: Donor): void => {
  const donors = getDonors();
  donors.push(donor);
  saveDonors(donors);
};
