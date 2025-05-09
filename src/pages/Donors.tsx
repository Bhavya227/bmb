
import { useState, useEffect } from "react";
import DonorSearch from "@/components/donor/DonorSearch";
import DonorList from "@/components/donor/DonorList";
import { Donor } from "@/utils/types";
import { getDonors } from "@/utils/localStorage";

const Donors = () => {
  const [donors, setDonors] = useState<Donor[]>([]);
  const [filteredDonors, setFilteredDonors] = useState<Donor[]>([]);
  
  // Load donors from local storage on component mount
  useEffect(() => {
    const storedDonors = getDonors();
    setDonors(storedDonors);
    setFilteredDonors(storedDonors);
  }, []);
  
  const handleSearch = (results: Donor[]) => {
    setFilteredDonors(results);
  };
  
  return (
    <div className="container px-4 py-8 mx-auto max-w-7xl">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Donor Database</h1>
        <p className="text-gray-500">Search and manage blood donor information</p>
      </div>
      
      <DonorSearch onSearch={handleSearch} donors={donors} />
      
      <DonorList donors={filteredDonors} />
    </div>
  );
};

export default Donors;
