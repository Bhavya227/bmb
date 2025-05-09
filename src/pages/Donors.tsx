
import { useState } from "react";
import { donors } from "@/utils/data";
import DonorSearch from "@/components/donor/DonorSearch";
import DonorList from "@/components/donor/DonorList";
import { Donor } from "@/utils/types";

const Donors = () => {
  const [filteredDonors, setFilteredDonors] = useState<Donor[]>(donors);
  
  const handleSearch = (results: Donor[]) => {
    setFilteredDonors(results);
  };
  
  return (
    <div className="container px-4 py-8 mx-auto max-w-7xl">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Donor Database</h1>
        <p className="text-gray-500">Search and manage blood donor information</p>
      </div>
      
      <DonorSearch onSearch={handleSearch} />
      
      <DonorList donors={filteredDonors} />
    </div>
  );
};

export default Donors;
