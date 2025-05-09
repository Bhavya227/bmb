
import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BloodType, Donor } from "@/utils/types";

interface DonorSearchProps {
  onSearch: (results: Donor[]) => void;
  donors: Donor[];
}

const DonorSearch = ({ onSearch, donors }: DonorSearchProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [bloodTypeFilter, setBloodTypeFilter] = useState<BloodType | "">("");
  
  const bloodTypes: BloodType[] = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    let results = [...donors];
    
    if (searchTerm.trim()) {
      results = results.filter(donor => 
        donor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        donor.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        donor.phone.includes(searchTerm)
      );
    }
    
    if (bloodTypeFilter) {
      results = results.filter(donor => donor.bloodType === bloodTypeFilter);
    }
    
    onSearch(results);
  };

  const handleClear = () => {
    setSearchTerm("");
    setBloodTypeFilter("");
    onSearch(donors);
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-6">
      <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-input pl-10"
            placeholder="Search by name, email or phone"
          />
        </div>
        
        <div className="sm:w-40">
          <select
            value={bloodTypeFilter}
            onChange={(e) => setBloodTypeFilter(e.target.value as BloodType | "")}
            className="form-input"
          >
            <option value="">All Blood Types</option>
            {bloodTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
        
        <div className="flex space-x-2">
          <Button type="submit" className="flex-shrink-0">
            Search
          </Button>
          <Button 
            type="button" 
            variant="outline" 
            className="flex-shrink-0"
            onClick={handleClear}
          >
            Clear
          </Button>
        </div>
      </form>
    </div>
  );
};

export default DonorSearch;
